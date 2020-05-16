package ch.bbbaden.gluecksrad.api.viewmodel;

public class Guess {
    String character;
    Integer scoreAtStake;

    public String getCharacter() {
        return character;
    }

    public Integer getScoreAtStake() {
        return scoreAtStake;
    }

    public void setCharacter(String character) {
        this.character = character;
    }

    public void setScoreAtStake(Integer scoreAtStake) {
        this.scoreAtStake = scoreAtStake;
    }
}
