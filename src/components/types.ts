export type LetterCountData = {
  letter: string;
  amount: number;
};

export type EpisodeWithOrigins = {
  title: string;
  number: EpisodeNumber;
  origins: Array<string>;
};

export type EpisodeNumber = {
  season: number;
  episode: number;
};
