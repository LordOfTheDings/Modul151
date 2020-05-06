package ch.bbbaden.gluecksrad.model;

import ch.bbbaden.gluecksrad.model.ScoreboardentryEntity;

import javax.persistence.*;


@Entity
public class ScoreboardEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer Id;

    @ManyToOne
    private ScoreboardentryEntity scoreboardEntrys;

    public ScoreboardentryEntity getScoreboardEntrys() {
        return scoreboardEntrys;
    }

    public void setScoreboardEntrys(ScoreboardentryEntity scoreboardEntrys) {
        this.scoreboardEntrys = scoreboardEntrys;
    }

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }
}
