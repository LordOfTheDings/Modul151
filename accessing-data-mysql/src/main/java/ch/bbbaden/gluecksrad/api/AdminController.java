package ch.bbbaden.gluecksrad.api;

import ch.bbbaden.gluecksrad.db.UserEntityRepository;
import ch.bbbaden.gluecksrad.model.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller // This means that this class is a Controller
@RequestMapping(path="/admin") // This means URL's start with /demo (after Application path)
@CrossOrigin
public class AdminController {
    @Autowired
    private UserEntityRepository userRepository;

    @PostMapping(path = "/add") // Map ONLY POST Requests
    public @ResponseBody
    String addNewAdmin(@RequestParam String name, @RequestParam String password) {
        UserEntity n = new UserEntity(name, password);
        userRepository.save(n);
        return "Saved";
    }

    @PostMapping(path = "/login")
    public @ResponseBody
    UserEntity loginAsAdmin(@RequestBody UserEntity us) {
        UserEntity user = new UserEntity(us.getUserName(), us.getPassword());
        Iterable<UserEntity> users = this.getAllUsers();
        for (UserEntity currentUser : users) {
            if (currentUser.getPassword()==us.getPassword() && currentUser.getUserName()==us.getUserName()) {
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