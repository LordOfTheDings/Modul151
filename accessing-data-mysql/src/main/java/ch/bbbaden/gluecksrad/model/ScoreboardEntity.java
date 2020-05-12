package ch.bbbaden.gluecksrad.model;

import ch.bbbaden.gluecksrad.model.ScoreboardEntryEntity;

import javax.persistence.*;


@Entity
public class ScoreboardEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer Id;

    @ManyToOne
    private ScoreboardEntryEntity scoreboardEntrys;

    public ScoreboardEntryEntity getScoreboardEntries() {
        return scoreboardEntrys;
    }

    public void setScoreboardEntries(ScoreboardEntryEntity scoreboardEntrys) {
        this.scoreboardEntrys = scoreboardEntrys;
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }
}
