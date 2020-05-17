package ch.bbbaden.gluecksrad.api;

import java.util.*;
import ch.bbbaden.gluecksrad.api.ToolEntities.Gamestate;
import ch.bbbaden.gluecksrad.api.ToolEntities.Guess;
import ch.bbbaden.gluecksrad.db.QuestionEntityRepository;
import ch.bbbaden.gluecksrad.db.SentenceEntityRepository;
import ch.bbbaden.gluecksrad.model.Game;
import ch.bbbaden.gluecksrad.model.QuestionEntity;
import ch.bbbaden.gluecksrad.model.SentenceEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@Controller
@RequestMapping(path="/game")
@CrossOrigin
public class GameController {
    @Autowired
    QuestionEntityRepository questionEntityRepository;
    @Autowired
    SentenceEntityRepository sentenceEntityRepository;
    private Game gameLogic;

    @GetMapping(path="/start")
    public @ResponseBody
    Gamestate startGame(){
        this.gameLogic = new Game();
        Iterator<QuestionEntity> qIterator = questionEntityRepository.findAll().iterator();
        Iterator<SentenceEntity> sIterator = sentenceEntityRepository.findAll().iterator();
        return gameLogic.startGame(qIterator, sIterator,"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    @GetMapping(path="/turnwheel")
    public @ResponseBody
    Gamestate turnWheel(){
        var random = Math.floor(Math.random()*50)+1;
        return gameLogic.turnWheel(random);
    }

    @PostMapping(path="/guess/sentence")
    public @ResponseBody
    Gamestate guessSentence(@Valid @RequestBody String guess){
       return gameLogic.guessSentence(guess);
    }

    @PostMapping(path="/guess/question")
    public @ResponseBody
    Gamestate guessQuestion(@Valid @RequestBody Guess guess){
        return gameLogic.guessQuestion(guess);
    }

    @PostMapping(path="/guess/character")
    public @ResponseBody
    Gamestate guessCharacter(@Valid @RequestBody Guess guess){
        return gameLogic.guessCharacter(guess);
    }

    @GetMapping (path= "/get/question")
    public @ResponseBody
    Gamestate getQuestion() {
       return gameLogic.getQuestion();
    }
}
