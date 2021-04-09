import { EpisodeWithOrigins } from "../components/types";

export const countLocationsWithLetter = async (letter: string) => 5;

export const countEpisodesWithLetter = async (letter: string) => 10;

export const countCharactersWithLetter = async (letter: string) => 15;

export const getCharacterOriginsPerEpisode = async (): Promise<
  Array<EpisodeWithOrigins>
> => [
  {
    title: "Lawnmower Dog",
    number: { season: 1, episode: 2 },
    origins: ["Jupiter", "Uranus", "Mars"],
  },
  {
    title: "Anatomy Park",
    number: { season: 1, episode: 3 },
    origins: ["Uranus", "Mars", "Pluto", "Andromeda", "Chiloé"],
  },
];
