package ch.bbbaden.gluecksrad.model;
import com.sun.istack.NotNull;
import com.sun.istack.Nullable;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @NotNull
    private Integer Id;
    @Column(unique = true)
    @NotNull
    @Size(min=1,message="userName must have at least 1 character")
    private String userName;
    @NotNull
    @Size(min=1,max=15,message = "password must have between 1 and 15 characters")
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
        Id = id;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getId() {
        return Id;
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
