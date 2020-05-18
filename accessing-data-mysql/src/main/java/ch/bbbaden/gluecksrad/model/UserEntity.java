package ch.bbbaden.gluecksrad.model;

import com.sun.istack.Nullable;

import javax.persistence.*;
import com.sun.istack.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @NotNull
    private Integer id;
    @Column(unique = true)
    @NotNull
    @Size(min=1,message="userName must have at least 1 character")
    @Pattern(regexp = "^[+ a-zA-Z0-9&?.!'@]*$")
    private String userName;
    @NotNull
    @Size(min=1,max=15,message = "password must have between 1 and 15 characters")
    @Pattern(regexp = "^[+ a-zA-Z0-9&?.!'@]*$")
    private String password;
    @Nullable
    private String authData;

    public UserEntity() {

    }

    public UserEntity(String userName, String password,String authData) {
        this.userName = userName;
        this.password = password;
        this.authData = authData;
    }

    public void setAuthData(String authData) {
        this.authData = authData;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getPassword() {
        return password;
    }

    public String getAuthData() {
        return authData;
    }


}
