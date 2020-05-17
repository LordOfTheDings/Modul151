package ch.bbbaden.gluecksrad.api;

import ch.bbbaden.gluecksrad.db.SentenceEntityRepository;
import ch.bbbaden.gluecksrad.model.SentenceEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping(path="/admin/sentences")
@CrossOrigin
public class SentenceController {
    @Autowired
    private SentenceEntityRepository sentenceRepository;

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<SentenceEntity> getAllQuestions() {
        return sentenceRepository.findAll();
    }

    @PostMapping(path="/edit")
    public @ResponseBody
    void editQuestion(@Valid  @RequestBody SentenceEntity sentence) {
        sentenceRepository.save(sentence);
    }

    @PostMapping(path="/add")
    public @ResponseBody
    void addQuestion(@Valid @RequestBody SentenceEntity sentence) {
        sentenceRepository.save(sentence);
    }

    @PostMapping(path="/delete")
    public @ResponseBody
    void deleteQuestion(@Valid @RequestBody SentenceEntity sentence) {
        sentenceRepository.deleteById(sentence.getId());
    }

    @DeleteMapping(path="/delete/all")
    public @ResponseBody
    void deleteAll() {
        sentenceRepository.deleteAll();
    }
}
