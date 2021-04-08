import {
  countCharactersWithLetter,
  countEpisodesWithLetter,
  countLocationsWithLetter,
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
