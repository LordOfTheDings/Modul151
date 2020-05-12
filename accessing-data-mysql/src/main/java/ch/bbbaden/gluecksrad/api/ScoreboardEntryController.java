package ch.bbbaden.gluecksrad.api;

import ch.bbbaden.gluecksrad.db.ScoreboardEntryEntityRepository;
import ch.bbbaden.gluecksrad.model.ScoreboardEntryEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping(path="/game/scoreboard")
@CrossOrigin
public class ScoreboardEntryController {
    @Autowired
    private ScoreboardEntryEntityRepository scoreboardRepository;

    @GetMapping(path="/all")
    public @ResponseBody
    Iterable<ScoreboardEntryEntity>getAllEntries(){
        return scoreboardRepository.findAll();
    }

    @PostMapping(path="/delete")
    public @ResponseBody
    void deleteEntry(@RequestBody ScoreboardEntryEntity entry){
        scoreboardRepository.deleteById(entry.getId());
    }

    @PostMapping(path="/add")
    public @ResponseBody
    void addEntry(ScoreboardEntryEntity entry){
        scoreboardRepository.save(entry);
    }
}
