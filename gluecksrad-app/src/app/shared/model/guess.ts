export class Guess {

  constructor(character: string, scoreAtStake: number) {
    this.character = character;
    this.scoreAtStake = scoreAtStake;
  }

  character?: string;
  scoreAtStake?: number;
}
