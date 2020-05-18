package ch.bbbaden.gluecksrad.model;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class LoginTest {

    @Test
    void checkLoginRequestFalseTest(){
        Login login = new Login();
        UserEntity user = new UserEntity();
        user.setPassword("right");
        user.setUserName("also");
        List<UserEntity> users = new ArrayList<>();
        users.add(user);
        UserEntity other = new UserEntity();
        other.setUserName("wrong");
        other.setPassword("wrong");
        assertNull(login.checkLoginRequest(users, other));
    }

    @Test
    void checkLoginRequestTrueTest(){
        Login login = new Login();
        UserEntity user = new UserEntity();
        user.setPassword("right");
        user.setUserName("also");
        List<UserEntity> users = new ArrayList<>();
        users.add(user);
        assertNotNull(login.checkLoginRequest(users, user));
    }

}
