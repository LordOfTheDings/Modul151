package ch.bbbaden.gluecksrad.model;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CategoryEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer Id;
    @NotNull
    private String text;

    public Integer getId() {
        return Id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
    public void setId(Integer id){
        this.Id = id;
    }
}
