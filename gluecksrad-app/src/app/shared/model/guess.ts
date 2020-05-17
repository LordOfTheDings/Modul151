export class Guess {

  constructor(text: string, scoreAtStake: number) {
    this.text = text;
    this.scoreAtStake = scoreAtStake;
  }

  text?: string;
  scoreAtStake?: number;
}
