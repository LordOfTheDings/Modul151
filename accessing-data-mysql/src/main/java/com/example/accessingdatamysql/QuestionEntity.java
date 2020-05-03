package com.example.accessingdatamysql;

import javax.persistence.*;

@Entity
public class QuestionEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer Id;
    private String text;
    @ManyToOne
    private AnswerEntity answerCorrect;
    @ManyToOne
    private AnswerEntity answerIncorrect;
    @ManyToOne
    private CategoryEntity category;

    public Integer getId() {
        return Id;
    }

    public String getText() {
        return text;
    }

    public AnswerEntity getAnswerCorrect() {
        return answerCorrect;
    }

    public AnswerEntity getAnswerIncorrect() {
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

    public void setAnswerCorrect(AnswerEntity answerCorrect) {
        this.answerCorrect = answerCorrect;
    }

    public void setAnswerIncorrect(AnswerEntity answerIncorrect) {
        this.answerIncorrect = answerIncorrect;
    }

    public void setCategory(CategoryEntity category) {
        this.category = category;
    }
}
