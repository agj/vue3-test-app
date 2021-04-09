export const countLocationsWithLetter = async (letter: string) => 10;

export const countEpisodesWithLetter = async (letter: string) => 20;

export const countCharactersWithLetter = async (letter: string) => 30;

export const getCharacterOriginsPerEpisode = async () => [
  {
    title: "Pilot",
    number: "T01E01",
    origins: ["Earth", "Jupiter", "Uranus"],
  },
  {
    title: "Lawnmower Dog",
    number: "T01E02",
    origins: ["Jupiter", "Uranus", "Mars"],
  },
  {
    title: "Anatomy Park",
    number: "T01E03",
    origins: ["Uranus", "Mars", "Pluto", "Andromeda", "Chiloé"],
  },
];
