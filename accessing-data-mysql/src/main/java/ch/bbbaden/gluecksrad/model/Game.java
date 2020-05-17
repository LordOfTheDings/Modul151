package ch.bbbaden.gluecksrad.model;

import ch.bbbaden.gluecksrad.api.ToolEntities.Gamestate;
import ch.bbbaden.gluecksrad.api.ToolEntities.Guess;
import ch.bbbaden.gluecksrad.api.ToolEntities.PlayMode;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

public class Game {
    private List<QuestionEntity> questions = new ArrayList<>();
    private List<SentenceEntity> sentences = new ArrayList<>();
    private String sentenceToGuess = "";
    private String hiddenCharacters;
    private String guessedCharacters = "";
    private Gamestate gamestate = new Gamestate();
    Random randomGenerator = new Random();

    public Game(String hiddenCharacters) {
        this.hiddenCharacters = hiddenCharacters;
    }

    public Gamestate startGame(Iterator<QuestionEntity> questionEntityIterator, Iterator<SentenceEntity> sentenceEntityIterator){
        questionEntityIterator.forEachRemaining(this.questions::add);
        sentenceEntityIterator.forEachRemaining(this.sentences::add);
        return setSentence();
    }

    public Gamestate turnWheel(double random){
        ++gamestate.roundsPlayed;
        if(random <= 3){
            gamestate.currentMode = PlayMode.BANKRUPT;
        }else if(random <= 44){
            gamestate.currentMode = PlayMode.MONEY;
        }else{
            gamestate.currentMode = PlayMode.RISK;
        }
        return gamestate;
    }

    private Gamestate setSentence(){
        SentenceEntity sentence = setRandomSentence();
        hideCharacters(sentence);
        gamestate.currentSentence=sentence;
        gamestate.category=sentence.getCategory();
        return gamestate;
    }

    public Gamestate guessSentence(String guess){
        if(!checkForGuessedSentence(sentenceToGuess,guess)){
            --gamestate.lives;
        }
        return gamestate;
    }

    private boolean checkForGuessedSentence(String current, String other) {
        return current.equals(other);
    }

    private void hideCharacters(SentenceEntity sentence) {
        String text = sentence.getSentence();
        for(char character : hiddenCharacters.toCharArray()){
            text =  text.replace(character, '*');
        }
        sentence.setSentence(text);
    }

    private SentenceEntity setRandomSentence() {
        var index = randomGenerator.nextInt(this.sentences.size());
        this.sentenceToGuess = this.sentences.get(index).getSentence();
        return this.sentences.get(index);
    }

    public Gamestate guessQuestion(Guess guess) {
        if(guess.getText().equals(gamestate.currentQuestion.getAnswerCorrect())){
            gamestate.score+= guess.getScoreAtStake();
        }else{
            gamestate.score-= guess.getScoreAtStake();
        }
        return gamestate;
    }

    public Gamestate guessCharacter(Guess guess){
        if(guessedCharacters.contains(guess.getText())){
            return gamestate;
        }
        guessedCharacters += guess.getText();
        this.gamestate.currentSentence.setSentence(updateSentence(guess.getText()));
        evaluateCharacterGuess(guess);
        gamestate.isWon = checkForGuessedSentence(this.gamestate.currentSentence.getSentence(),sentenceToGuess);
        return gamestate;
    }

    private void evaluateCharacterGuess(Guess guess) {
         String vocals = "aeiouAEIOU";
        if(!sentenceToGuess.toLowerCase().contains(guess.getText().toLowerCase())){
            --gamestate.lives;
            return;
        }else if(!(vocals).contains(guess.getText())){
            handleConsonantGuess(guess);
            return;
        }
        gamestate.score-=400;
    }

    private void handleConsonantGuess(Guess guess) {
        var occurrences = sentenceToGuess.toLowerCase().chars().filter(ch -> ch == guess.getText().toLowerCase().charAt(0)).count();
        gamestate.score+= occurrences*guess.getScoreAtStake();
        if(countConsonants(sentenceToGuess)==countConsonants(gamestate.currentSentence.getSentence())){
            gamestate.nothingLeftToGuess = true;
        }
    }

    private int countConsonants(String text) {
        String consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
        int count = 0;
        for(int i = 0; i< text.length();++i){
            if(consonants.contains(text.substring(i,i+1))){
                ++count;
            }
        }
        return count;
    }

    private String updateSentence(String guess){
        StringBuilder updatedSentence = new StringBuilder();
        for(var i = 0; i < sentenceToGuess.length();++i){
            if(sentenceToGuess.toLowerCase().charAt(i) == guess.toLowerCase().charAt(0)){
                updatedSentence.append(sentenceToGuess.charAt(i));
            }else{
                if(gamestate.currentSentence.getSentence().toLowerCase().contains(sentenceToGuess.toLowerCase().substring(i,i+1))){
                    updatedSentence.append(sentenceToGuess.charAt(i));
                }else{
                    updatedSentence.append("*");
                }
            }
        }
        return updatedSentence.toString();
    }

    public Gamestate getQuestion(){
        gamestate.currentQuestion = findRandomQuestion();
        return gamestate;
    }

    private QuestionEntity findRandomQuestion(){
        QuestionEntity question;
        //do { commented out momentarily because of lack of questions
        //add more questions to each category before commenting in again
        question = questions.get(randomGenerator.nextInt(questions.size()));
        //} while(question.getCategory()!=gamestate.category);
        questions.remove(question);
        return question;
    }
}
