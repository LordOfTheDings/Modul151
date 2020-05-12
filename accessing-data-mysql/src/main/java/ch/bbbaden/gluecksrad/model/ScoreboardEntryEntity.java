package ch.bbbaden.gluecksrad.model;

import com.sun.istack.NotNull;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import java.sql.Date;
import java.time.ZonedDateTime;

@Entity
public class ScoreboardEntryEntity {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @NotNull
    private Integer id;
    @NotNull
    @Column(unique = true)
    private String playerName;
    @DateTimeFormat(pattern="yyyy-mm-dd")
    @NotNull
    private Date date;
    @NotNull
    private Integer score;
    @NotNull
    private Integer roundsPlayed;


    public Date getDate() {
        return date;
    }

    public Integer getId() {
        return id;
    }

    public Integer getScore() {
        return score;
    }

    public Integer getRoundsPlayed() {
        return roundsPlayed;
    }

    public String getPlayerName(){
        return playerName;
}

    public void setDate(Date date) {
        this.date = date;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public void setScore(Integer score) {
        this.score = score;
    }
    public void setRoundsPlayed(Integer roundsPlayed) {
        this.roundsPlayed = roundsPlayed;
    }
}
