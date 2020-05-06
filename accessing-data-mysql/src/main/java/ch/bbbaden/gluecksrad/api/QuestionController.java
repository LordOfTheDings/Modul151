package ch.bbbaden.gluecksrad.api;

import ch.bbbaden.gluecksrad.db.QuestionEntityRepository;
import ch.bbbaden.gluecksrad.model.QuestionEntity;
import ch.bbbaden.gluecksrad.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller // This means that this class is a Controller
@RequestMapping(path="/admin/questions/")
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
}
