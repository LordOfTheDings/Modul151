package ch.bbbaden.gluecksrad.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
public class SentenceEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @NotNull
    private Integer id;
    @Column(unique = true)
    @Size(min=1,message = "sentence must have at least 1 character")
    @NotNull
    @Pattern(regexp = "^[+ a-zA-Z0-9&?.,!@]*$")
    private String sentence;
    @NotNull
    @ManyToOne
    private CategoryEntity category;

    public Integer getId() {
        return id;
    }

    public String getSentence() {
        return sentence;
    }

    public CategoryEntity getCategory() {
        return category;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setSentence(String sentence) {
        this.sentence = sentence;
    }

    public void setCategory(CategoryEntity category) {
        this.category = category;
    }
}
