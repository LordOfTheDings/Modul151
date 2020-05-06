package ch.bbbaden.gluecksrad.model;
import javax.persistence.*;

@Entity
public class UserEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer Id;
    @Column(unique = true)
    private String userName;
    @Column(length=255)
    private String password;

    public UserEntity() {

    }

    public UserEntity(String userName, String password) {
        this.userName = userName;
        this.password = password;
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

}
