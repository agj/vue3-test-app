import {
  countCharactersWithLetter,
  countEpisodesWithLetter,
  countLocationsWithLetter,
  getCharacterOriginsPerEpisode,
} from "./retrieve-data";
import "./retrieve-data.ts";
import rick_ from "rickmortyapi";
import { mocked } from "ts-jest/utils";

jest.mock("rickmortyapi");

const rick = mocked(rick_, true);

describe("countLocationsWithLetter", () => {
  it("responde con un número de lugares.", async () => {
    const amount = 56;

    rick.getLocation.mockImplementationOnce(async () => ({
      info: {
        count: amount,
        pages: 1,
        next: null,
        prev: null,
      },
      results: [],
    }));

    expect(await countLocationsWithLetter("l")).toEqual(amount);
  });
});

describe("countEpisodesWithLetter", () => {
  it("responde con un número de capítulos.", async () => {
    const amount = 98;

    rick.getEpisode.mockImplementationOnce(async () => ({
      info: {
        count: amount,
        pages: 1,
        next: null,
        prev: null,
      },
      results: [],
    }));

    expect(await countEpisodesWithLetter("e")).toEqual(amount);
  });
});

describe("countCharactersWithLetter", () => {
  it("responde con un número de personajes.", async () => {
    const amount = 223;

    rick.getCharacter.mockImplementationOnce(async () => ({
      info: {
        count: amount,
        pages: 1,
        next: null,
        prev: null,
      },
      results: [],
    }));

    expect(await countCharactersWithLetter("c")).toEqual(amount);
  });
});

describe("getCharacterOriginsPerEpisode", () => {
  it("responde con una lista de capítulos y orígenes.", async () => {
    rick.getEpisode.mockImplementation(async () => ({
      info: {
        count: 2,
        pages: 1,
        next: null,
        prev: null,
      },
      results: [
        {
          id: 2,
          name: "Lawnmower Dog",
          air_date: "December 9, 2013",
          episode: "S01E02",
          characters: [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/38",
          ],
          url: "https://rickandmortyapi.com/api/episode/2",
          created: "2017-11-10T12:56:33.916Z",
        },
        {
          id: 4,
          name: "M. Night Shaym-Aliens!",
          air_date: "January 13, 2014",
          episode: "S01E04",
          characters: [
            "https://rickandmortyapi.com/api/character/1",
            "https://rickandmortyapi.com/api/character/338",
          ],
          url: "https://rickandmortyapi.com/api/episode/4",
          created: "2017-11-10T12:56:34.129Z",
        },
      ],
    }));
    rick.getCharacter.mockImplementation(async () => [
      {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth (Replacement Dimension)",
          url: "https://rickandmortyapi.com/api/location/20",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/4",
        ],
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z",
      },
      {
        id: 38,
        name: "Beth Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: {
          name: "Mars",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/2"],
        url: "https://rickandmortyapi.com/api/character/38",
        created: "2017-11-05T09:48:44.230Z",
      },
      {
        id: 338,
        name: "Summer Smith",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Female",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        location: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1",
        },
        image: "https://rickandmortyapi.com/api/character/avatar/338.jpeg",
        episode: ["https://rickandmortyapi.com/api/episode/4"],
        url: "https://rickandmortyapi.com/api/character/338",
        created: "2018-01-10T16:55:03.390Z",
      },
    ]);

    expect(await getCharacterOriginsPerEpisode()).toEqual([
      {
        title: "Lawnmower Dog",
        number: { season: 1, episode: 2 },
        origins: ["Earth (C-137)", "Mars"],
      },
      {
        title: "M. Night Shaym-Aliens!",
        number: { season: 1, episode: 4 },
        origins: ["Earth (C-137)"],
      },
    ]);
  });
});
