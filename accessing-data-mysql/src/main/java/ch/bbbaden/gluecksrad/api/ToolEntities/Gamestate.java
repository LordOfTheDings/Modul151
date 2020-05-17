package ch.bbbaden.gluecksrad.api.ToolEntities;

import ch.bbbaden.gluecksrad.model.CategoryEntity;
import ch.bbbaden.gluecksrad.model.QuestionEntity;
import ch.bbbaden.gluecksrad.model.SentenceEntity;

public class Gamestate {

    public int score = 0;
    public int lives = 3;
    public int roundsPlayed = 0;
    public boolean isWon = false;
    public boolean nothingLeftToGuess = false;
    public PlayMode currentMode;
    public QuestionEntity currentQuestion;
    public SentenceEntity currentSentence;
    public CategoryEntity category;
}
