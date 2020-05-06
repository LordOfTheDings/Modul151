package ch.bbbaden.gluecksrad.model;
import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
public class AnswerEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer Id;
    @NotNull
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
