package ch.bbbaden.gluecksrad.api;

import java.util.*;
import ch.bbbaden.gluecksrad.api.viewmodel.Gamestate;
import ch.bbbaden.gluecksrad.api.viewmodel.Guess;
import ch.bbbaden.gluecksrad.api.viewmodel.PlayMode;
import ch.bbbaden.gluecksrad.db.QuestionEntityRepository;
import ch.bbbaden.gluecksrad.db.SentenceEntityRepository;
import ch.bbbaden.gluecksrad.model.QuestionEntity;
import ch.bbbaden.gluecksrad.model.SentenceEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/game")
@CrossOrigin
public class GameController {
    @Autowired
    QuestionEntityRepository questionEntityRepository;
    @Autowired
    SentenceEntityRepository sentenceEntityRepository;

    //Class Game for all this stuff
    //Controller call method, gamestate is returned
    private List<QuestionEntity> questions = new ArrayList<>();
    private List<SentenceEntity> sentences = new ArrayList<>();
    private String sentenceToGuess = "";
    private String hiddenCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private String guessedCharacters = "";
    private Gamestate gamestate = new Gamestate();

    @GetMapping(path="/start")
    public @ResponseBody
    Gamestate startGame(){
        reset();
        this.gamestate = new Gamestate();
        Iterator<QuestionEntity> iterator = questionEntityRepository.findAll().iterator();
        iterator.forEachRemaining(this.questions::add);
        Iterator<SentenceEntity> sIterator = sentenceEntityRepository.findAll().iterator();
        sIterator.forEachRemaining(this.sentences::add);
       return setSentence();
    }

    @GetMapping(path="/turnwheel")
    public @ResponseBody
    Gamestate turnWheel(){
        ++gamestate.roundsPlayed;
        var random = Math.floor(Math.random()*12)+1;
        if(random <= 1){
            gamestate.currentMode = PlayMode.BANKRUPT;
        }else if(random <= 9 ){
            gamestate.currentMode = PlayMode.MONEY;
        }else{
            gamestate.currentMode = PlayMode.RISK;
        }
        return gamestate;
    }

    private void reset(){
        this.sentences.clear();
        this.questions.clear();
        guessedCharacters = "";
        sentenceToGuess = "";
    }

    @PostMapping(path="/guess/sentence")
    public @ResponseBody
    Gamestate guessSentence(@RequestBody String guess){
        if(guess.equals(this.sentenceToGuess)){
            gamestate.isWon = true;
        }else{
            --gamestate.lives;
        }
        return gamestate;
    }

    @PostMapping(path="/guess/question")
    public @ResponseBody
    boolean guessQuestion(@RequestBody String guess){
        return guess.equals(gamestate.currentQuestion.getAnswerCorrect());
    }

    @PostMapping(path="/guess/character")
    public @ResponseBody
    Gamestate guessCharacter(@RequestBody Guess guess){
        if(guessedCharacters.contains(guess.getCharacter())){
            return gamestate;
        }
        guessedCharacters += guess.getCharacter();
        evaluateCharacterGuess(guess);
        this.gamestate.currentSentence.setSentence(updateSentence(guess.getCharacter()));
        return gamestate;
    }

    private String updateSentence(String guess) {
        StringBuilder updatedSentence = new StringBuilder();
        for(var i = 0; i < sentenceToGuess.length();++i){
            if(sentenceToGuess.charAt(i) == guess.charAt(0)){
                updatedSentence.append(guess);
            }else{
                if(hiddenCharacters.contains(sentenceToGuess.substring(i,i+1))){
                    updatedSentence.append("*");
                }else{
                    updatedSentence.append(sentenceToGuess.charAt(i));
                }
            }
        }
        return updatedSentence.toString();
    }

    private void evaluateCharacterGuess(Guess guess) {
        if(!sentenceToGuess.contains(guess.getCharacter())){
            --gamestate.lives;
        }else{
            var occurrences = sentenceToGuess.chars().filter(ch -> ch == guess.getCharacter().charAt(0)).count();
            gamestate.score+= occurrences*guess.getScoreAtStake();
        }
    }

    @GetMapping (path= "/get/question")
    public @ResponseBody
    Gamestate getQuestion() {
        gamestate.currentQuestion = findRandomQuestion();
        return gamestate;
    }

    private QuestionEntity findRandomQuestion(){
        Random rand = new Random();
        QuestionEntity question;
        do {
            question = questions.get(rand.nextInt(questions.size()));
        } while(question.getCategory()!=gamestate.category);
        questions.remove(question);
        return question;
    }

    private void hideCharacters(SentenceEntity sentence) {
        String text = sentence.getSentence();
        for(char character : hiddenCharacters.toCharArray()){
            text =  text.replace(character, '*');
        }
        sentence.setSentence(text);
    }

    private Gamestate setSentence(){
        SentenceEntity sentence = setRandomSentence();
        hideCharacters(sentence);
        gamestate.currentSentence=sentence;
        gamestate.category=sentence.getCategory();
        return gamestate;
    }

    private SentenceEntity setRandomSentence() {
        Random rand = new Random();
        var index = rand.nextInt(this.sentences.size());
        var sentence =  this.sentences.get(index);
        this.sentenceToGuess = sentence.getSentence();
        return sentence;
    }
}
