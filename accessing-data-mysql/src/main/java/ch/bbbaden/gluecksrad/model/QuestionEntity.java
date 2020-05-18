package ch.bbbaden.gluecksrad.model;

import javax.persistence.*;
import com.sun.istack.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
public class QuestionEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @NotNull
    private Integer id;
    @NotNull
    @Size(min=10,message="question must have at least 10 characters")
    private String text;
    @NotNull
    @Size(min=1,message="answer must have at least 1 character")
    @Pattern(regexp = "^[+ a-zA-Z0-9&?.,'!@]*$",message = "Forbidden characters used!")
    private String answerCorrect;
    @NotNull
    @Size(min=1,message="answer must have at least 1 character")
    @Pattern(regexp = "^[+ a-zA-Z0-9&?.,'!@]*$",message = "Forbidden characters used!")
    private String answerIncorrect;
    @NotNull
    @ManyToOne
    private CategoryEntity category;

    public Integer getId() {
        return id;
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
        this.id = id;
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
