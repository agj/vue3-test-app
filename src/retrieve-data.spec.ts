import {
  countCharactersWithLetter,
  countEpisodesWithLetter,
  countLocationsWithLetter,
  getCharacterOriginsPerEpisode,
} from "./retrieve-data";
import "./retrieve-data.ts";

describe("countLocationsWithLetter", () => {
  it("responde con un número de lugares.", async () => {
    expect(await countLocationsWithLetter("e")).toEqual(10);
  });
});

describe("countEpisodesWithLetter", () => {
  it("responde con un número de capítulos.", async () => {
    expect(await countEpisodesWithLetter("e")).toEqual(20);
  });
});

describe("countCharactersWithLetter", () => {
  it("responde con un número de personajes.", async () => {
    expect(await countCharactersWithLetter("e")).toEqual(30);
  });
});

describe("getCharacterOriginsPerEpisode", () => {
  it("responde con una lista de capítulos y orígenes.", async () => {
    expect(await getCharacterOriginsPerEpisode()).toEqual([
      {
        title: "Pilot",
        number: { season: 1, episode: 1 },
        origins: ["Earth", "Jupiter", "Uranus"],
      },
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
    ]);
  });
});
