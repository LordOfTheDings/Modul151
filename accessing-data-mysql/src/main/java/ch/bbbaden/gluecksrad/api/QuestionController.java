package ch.bbbaden.gluecksrad.api;

import ch.bbbaden.gluecksrad.db.QuestionEntityRepository;
import ch.bbbaden.gluecksrad.model.QuestionEntity;
import ch.bbbaden.gluecksrad.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@Controller
@RequestMapping(path="/admin/questions")
@CrossOrigin
public class QuestionController {
    @Autowired
    private QuestionEntityRepository questionRepository;

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<QuestionEntity> getAllQuestions() {
        // This returns a JSON or XML with the questions
        return questionRepository.findAll();
    }

    @PostMapping(path="/edit")
    public @ResponseBody
    void editQuestion(@Valid @RequestBody QuestionEntity question) {
            deleteQuestion(question);
            questionRepository.save(question);
    }

    @PostMapping(path="/add")
    public @ResponseBody
    void addQuestion(@Valid @RequestBody QuestionEntity question) {
        questionRepository.save(question);
    }

    /*@DeleteMapping(path="/delete")
    public @ResponseBody
    void deleteQuestion(@RequestParam String id ) {
        questionRepository.deleteById(Integer.valueOf(id));
    }*/

    @PostMapping(path="/delete")
    public @ResponseBody
    void deleteQuestion(@Valid @RequestBody QuestionEntity question) {
        questionRepository.deleteById(question.getId());
    }

    @DeleteMapping(path="/delete/all")
    public @ResponseBody
    void deleteAll() {
        questionRepository.deleteAll();
    }
}
