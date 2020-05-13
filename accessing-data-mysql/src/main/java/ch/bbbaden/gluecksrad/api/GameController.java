package ch.bbbaden.gluecksrad.api;


import ch.bbbaden.gluecksrad.model.CategoryEntity;
import ch.bbbaden.gluecksrad.model.QuestionEntity;
import ch.bbbaden.gluecksrad.model.SentenceEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;

@Controller
@RequestMapping(path="/game/")
@CrossOrigin
public class GameController {

    private String nickName="";
    private Integer score = 0;
    private ArrayList<QuestionEntity> questions = new ArrayList<>();
    private ArrayList<SentenceEntity> sentences = new ArrayList<>();

    @PostMapping (path= "play")
    public @ResponseBody
    void play(@RequestParam String nickName){
        this.nickName = nickName;
       // startGame();
    }

    @PostMapping(path="play/question/delete")
    public @ResponseBody
    void deleteQuestionFromList(@Valid @RequestBody QuestionEntity question){
        this.questions.remove(question);
    }

    @PostMapping(path="play/sentence/delete")
    public @ResponseBody
    void deleteSentenceFromList(@Valid @RequestBody SentenceEntity sentence){
        this.sentences.remove(sentence);
    }


}
