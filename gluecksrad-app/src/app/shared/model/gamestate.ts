import {Question} from "./question";
import {Sentence} from "./sentence";
import {Category} from "./category";
import {PlayMode} from "./playmode.enum";

export interface Gamestate {
  score?: number;
  lives?: number;
  roundsPlayed?: number;
  isWon?: boolean;
  nothingLeftToGuess?: boolean;
  currentMode?: PlayMode
  currentQuestion?: Question;
  currentSentence?: Sentence;
  category?: Category;
}
