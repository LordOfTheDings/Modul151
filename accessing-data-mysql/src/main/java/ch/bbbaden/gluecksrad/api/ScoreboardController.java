package ch.bbbaden.gluecksrad.api;

import ch.bbbaden.gluecksrad.db.ScoreboardEntryEntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller // This means that this class is a Controller
@RequestMapping(path="/game") // This means URL's start with /demo (after Application path)
@CrossOrigin
public class ScoreboardController {
    @Autowired
    private ScoreboardEntryEntityRepository scoreboardRepository;


}