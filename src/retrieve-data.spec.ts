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
    ]);
  });
});
