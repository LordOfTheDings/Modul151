package com.example.accessingdatamysql;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class ScoreboardentryEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer Id;
    private String playername;
    private Date datetime;
    private Integer score;
    private Integer roundsPlayed;


    public Integer getId() {
        return Id;
    }

    public String getPlayername() {
        return playername;
    }

    public Date getDatetime() {
        return datetime;
    }

    public Integer getScore() {
        return score;
    }

    public Integer getRoundsPlayed() {
        return roundsPlayed;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public void setPlayername(String playername) {
        this.playername = playername;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public void setRoundsPlayed(Integer roundsPlayed) {
        this.roundsPlayed = roundsPlayed;
    }
}
