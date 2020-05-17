package ch.bbbaden.gluecksrad.api.ToolEntities;

import com.sun.istack.NotNull;
import javax.validation.constraints.Pattern;

public class Guess {
    @NotNull
    @Pattern(regexp = "^[+ a-zA-Z0-9&?.,!@]*$",message = "Forbidden characters used!")
    String text;
    @NotNull
    Integer scoreAtStake;

    public String getText() {
        return text;
    }

    public Integer getScoreAtStake() {
        return scoreAtStake;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setScoreAtStake(Integer scoreAtStake) {
        this.scoreAtStake = scoreAtStake;
    }
}
