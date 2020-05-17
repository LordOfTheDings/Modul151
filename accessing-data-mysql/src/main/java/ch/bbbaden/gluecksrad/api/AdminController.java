package ch.bbbaden.gluecksrad.api;

import ch.bbbaden.gluecksrad.db.UserEntityRepository;
import ch.bbbaden.gluecksrad.model.Login;
import ch.bbbaden.gluecksrad.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@Controller
@RequestMapping(path="/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private UserEntityRepository userRepository;

    @PostMapping(path = "/login")
    public @ResponseBody
    UserEntity loginAsAdmin(@Valid @RequestBody UserEntity user) {
        Login login = new Login();
        return login.checkLoginRequest(userRepository.findAll(),user);
    }

    @GetMapping(path="/users/all")
    public @ResponseBody Iterable<UserEntity> getAllUsers() {
        return userRepository.findAll();
    }
}
