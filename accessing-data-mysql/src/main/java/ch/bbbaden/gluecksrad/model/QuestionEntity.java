package ch.bbbaden.gluecksrad.model;

import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
public class QuestionEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer Id;
    @NotNull
    @Size(min=10,message="question must have at least 10 characters")
    private String text;
    @NotNull
    @Size(min=1,message="answer must have at least 1 character")
    private String answerCorrect;
    @NotNull
    @Size(min=1,message="answer must have at least 1 character")
    private String answerIncorrect;
    @NotNull
    @ManyToOne
    private CategoryEntity category;

    public Integer getId() {
        return Id;
    }

    public String getText() {
        return text;
    }

    public String getAnswerCorrect() {
        return answerCorrect;
    }

    public String getAnswerIncorrect() {
        return answerIncorrect;
    }

    public CategoryEntity getCategory() {
        return category;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setAnswerCorrect(String answerCorrect) {
        this.answerCorrect = answerCorrect;
    }

    public void setAnswerIncorrect(String answerIncorrect) {
        this.answerIncorrect = answerIncorrect;
    }

    public void setCategory(CategoryEntity category) {
        this.category = category;
    }
}
