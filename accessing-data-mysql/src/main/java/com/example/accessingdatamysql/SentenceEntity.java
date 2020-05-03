package com.example.accessingdatamysql;

import javax.persistence.*;

@Entity
public class SentenceEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer Id;
    @Column(unique = true)
    private String sentence;
    @ManyToOne
    private CategoryEntity category;

    public Integer getId() {
        return Id;
    }

    public String getSentence() {
        return sentence;
    }

    public CategoryEntity getCategory() {
        return category;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public void setSentence(String sentence) {
        this.sentence = sentence;
    }

    public void setCategory(CategoryEntity category) {
        this.category = category;
    }
}
