package ch.bbbaden.gluecksrad;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class AnswerEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer Id;
    private String text;

    public AnswerEntity() {
    }

    public Integer getId() {
        return Id;
    }

    public String getText() {
        return text;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public void setText(String text) {
        this.text = text;
    }
}
