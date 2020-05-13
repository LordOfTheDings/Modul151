package ch.bbbaden.gluecksrad.api;

import ch.bbbaden.gluecksrad.db.UserEntityRepository;
import ch.bbbaden.gluecksrad.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;


@Controller
@RequestMapping(path="/admin")
@CrossOrigin
public class AdminController {
    @Autowired
    private UserEntityRepository userRepository;
    private boolean loggedIn;

    @PostMapping(path = "/login")
    public @ResponseBody
    UserEntity loginAsAdmin(@Valid @RequestBody UserEntity user) {
        Iterable<UserEntity> users = this.getAllUsers();
        for (UserEntity currentUser : users) {
            if(user.getUserName().equals(currentUser.getUserName())&&user.getPassword().equals(currentUser.getPassword())){
                loggedIn = true;
                return user;
            }
        }
        return null;
    }

    @GetMapping(path="/users/all")
    public @ResponseBody Iterable<UserEntity> getAllUsers() {
        // This returns a JSON or XML with the users
        return userRepository.findAll();
    }
}
