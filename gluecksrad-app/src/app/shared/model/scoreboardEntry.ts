export class ScoreboardEntry {
  constructor(playerName: string, score: number, roundsPlayed: number,date: string) {
    this.playerName = playerName;
    this.score = score;
    this.date = date;
    this.roundsPlayed = roundsPlayed;
  }

  id?: number;
  playerName?: string;
  score?: number;
  date?: string;
  roundsPlayed?: number;
}
