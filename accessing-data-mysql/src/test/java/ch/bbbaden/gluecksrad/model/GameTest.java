package ch.bbbaden.gluecksrad.model;

import ch.bbbaden.gluecksrad.api.ToolEntities.Guess;
import ch.bbbaden.gluecksrad.api.ToolEntities.PlayMode;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

class GameTest {

    @Test
    void startGame() {
        List<SentenceEntity> sentences = new ArrayList<>();
        var sentence = new SentenceEntity();
        sentence.setSentence("hello");
        sentences.add(sentence);

        Game game = new Game();
        game.startGame(new ArrayList<QuestionEntity>().iterator(), sentences.iterator(),"");
        assertEquals(sentence, game.getGamestate().currentSentence);
    }

    @Test
    void turnWheelResultBankrupt() {
        Game game = new Game();
        game.turnWheel(3);
        assertEquals(PlayMode.BANKRUPT, game.getGamestate().currentMode);
    }

    @Test
    void turnWheelResultRisk() {
        Game game = new Game();
        game.turnWheel(45);
        assertEquals(PlayMode.RISK, game.getGamestate().currentMode);
    }

    @Test
    void turnWheelResultMoney() {
        Game game = new Game();
        game.turnWheel(34);
        assertEquals(PlayMode.MONEY, game.getGamestate().currentMode);
    }


    @Test
    void guessSentenceIncorrect() {
        List<SentenceEntity> sentences = new ArrayList<>();
        var sentence = new SentenceEntity();
        sentence.setSentence("hello");
        sentences.add(sentence);

        Game game = new Game();
        game.startGame(new ArrayList<QuestionEntity>().iterator(), sentences.iterator(),"");
        game.guessSentence("hell");
        assertEquals(2, game.getGamestate().lives);
    }

    @Test
    void guessSentenceCorrect() {
        List<SentenceEntity> sentences = new ArrayList<>();
        var sentence = new SentenceEntity();
        sentence.setSentence("hello");
        sentences.add(sentence);

        Game game = new Game();
        game.startGame(new ArrayList<QuestionEntity>().iterator(), sentences.iterator(),"");
        game.guessSentence("hello");
        assertEquals(3, game.getGamestate().lives);
        assertEquals(true, game.getGamestate().isWon);
    }

    @Test
    void getQuestion() {
        List<QuestionEntity> questions = new ArrayList<>();
        List<SentenceEntity> sentences = new ArrayList<>();
        var sentence = new SentenceEntity();
        sentences.add(sentence);
        var question = new QuestionEntity();
        question.setText("what the hell?");
        questions.add(question);

        Game game = new Game();
        game.startGame(questions.iterator(), sentences.iterator(),"");
        game.getQuestion();
        assertEquals(question, game.getGamestate().currentQuestion);
    }

    @Test
    void guessQuestionCorrect() {
        List<QuestionEntity> questions = new ArrayList<>();
        List<SentenceEntity> sentences = new ArrayList<>();
        var sentence = new SentenceEntity();
        sentences.add(sentence);
        var question = new QuestionEntity();
        question.setText("what the hell?");
        question.setAnswerCorrect("no u");
        questions.add(question);

        Game game = new Game();
        game.startGame(questions.iterator(), sentences.iterator(),"");
        game.getQuestion();

        game.guessQuestion(new Guess("no u",200));
        assertEquals(200, game.getGamestate().score);
    }

    @Test
    void guessQuestionCorrectNoMoney() {
        List<QuestionEntity> questions = new ArrayList<>();
        List<SentenceEntity> sentences = new ArrayList<>();
        var sentence = new SentenceEntity();
        sentences.add(sentence);
        var question = new QuestionEntity();
        question.setText("what the hell?");
        question.setAnswerCorrect("no u");
        questions.add(question);

        Game game = new Game();
        game.startGame(questions.iterator(), sentences.iterator(),"");
        game.getQuestion();

        game.guessQuestion(new Guess("no u",0));
        assertEquals(0, game.getGamestate().score);
    }

    @Test
    void guessQuestionIncorrectNoMoney() {
        List<QuestionEntity> questions = new ArrayList<>();
        List<SentenceEntity> sentences = new ArrayList<>();
        var sentence = new SentenceEntity();
        sentences.add(sentence);
        var question = new QuestionEntity();
        question.setText("what the hell?");
        question.setAnswerCorrect("no ");
        questions.add(question);

        Game game = new Game();
        game.startGame(questions.iterator(), sentences.iterator(),"");
        game.getQuestion();

        game.guessQuestion(new Guess("no u",0));
        assertEquals(0, game.getGamestate().score);
    }

    @Test
    void guessQuestionIncorrect() {
        List<QuestionEntity> questions = new ArrayList<>();
        List<SentenceEntity> sentences = new ArrayList<>();
        var sentence = new SentenceEntity();
        sentences.add(sentence);
        var question = new QuestionEntity();
        question.setText("what the hell?");
        question.setAnswerCorrect("no ");
        questions.add(question);

        Game game = new Game();
        game.startGame(questions.iterator(), sentences.iterator(),"");
        game.getQuestion();

        game.guessQuestion(new Guess("no u",500));
        assertEquals(-500, game.getGamestate().score);
    }

    @Test
    void guessCharacterCorrectMoney() {
        List<SentenceEntity> sentences = new ArrayList<>();
        var sentence = new SentenceEntity();
        sentence.setSentence("This is hella annoying");
        sentences.add(sentence);

        Game game = new Game();
        game.startGame(new ArrayList<QuestionEntity>().iterator(), sentences.iterator(),"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
        game.guessCharacter(new Guess("h",200));
        assertEquals(400,game.getGamestate().score);
        assertEquals("*h** ** h**** ********",game.getGamestate().currentSentence.getSentence());
        assertEquals(3, game.getGamestate().lives);
    }

    @Test
    void guessCharacterInCorrect() {
        List<SentenceEntity> sentences = new ArrayList<>();
        var sentence = new SentenceEntity();
        sentence.setSentence("This is hella annoying");
        sentences.add(sentence);

        Game game = new Game();
        game.startGame(new ArrayList<QuestionEntity>().iterator(),sentences.iterator(),"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
        game.guessCharacter(new Guess("x",0));
        assertEquals(0, game.getGamestate().score);
        assertEquals("**** ** ***** ********",game.getGamestate().currentSentence.getSentence());
        assertEquals(2, game.getGamestate().lives);
    }

    @Test
    void guessCharacterInCorrectMoney() {
        List<SentenceEntity> sentences = new ArrayList<>();
        var sentence = new SentenceEntity();
        sentence.setSentence("This is hella annoying");
        sentences.add(sentence);

        Game game = new Game();
        game.startGame(new ArrayList<QuestionEntity>().iterator(),sentences.iterator(),"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
        game.guessCharacter(new Guess("x",200));
        assertEquals(0, game.getGamestate().score);
        assertEquals("**** ** ***** ********",game.getGamestate().currentSentence.getSentence());
        assertEquals(2, game.getGamestate().lives);
    }

    @Test
    void guessCharacterWon() {
        List<SentenceEntity> sentences = new ArrayList<>();
        var sentence = new SentenceEntity();
        sentence.setSentence("This");
        sentences.add(sentence);

        Game game = new Game();
        game.startGame(new ArrayList<QuestionEntity>().iterator(),sentences.iterator(),"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
        game.guessCharacter(new Guess("t",0));
        game.guessCharacter(new Guess("h",0));
        game.guessCharacter(new Guess("i",0));
        game.guessCharacter(new Guess("s",0));

        assertEquals(-400, game.getGamestate().score);
        assertEquals("This",game.getGamestate().currentSentence.getSentence());
        assertEquals(3, game.getGamestate().lives);
        assertEquals(true, game.getGamestate().isWon);
    }

    @Test
    void guessCharacterNoConsonantsLeft() {
        List<SentenceEntity> sentences = new ArrayList<>();
        var sentence = new SentenceEntity();
        sentence.setSentence("This");
        sentences.add(sentence);

        Game game = new Game();
        game.startGame(new ArrayList<QuestionEntity>().iterator(),sentences.iterator(),"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
        game.guessCharacter(new Guess("t",0));
        game.guessCharacter(new Guess("h",0));
        game.guessCharacter(new Guess("s",0));

        assertEquals(0, game.getGamestate().score);
        assertEquals("Th*s",game.getGamestate().currentSentence.getSentence());
        assertEquals(3, game.getGamestate().lives);
        assertEquals(true, game.getGamestate().nothingLeftToGuess);
    }
}
