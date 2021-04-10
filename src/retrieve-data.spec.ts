import {
  countLetterInCharacters,
  countLetterInEpisodes,
  countLetterInLocations,
  getCharacterOriginsPerEpisode,
} from "./retrieve-data";
import "./retrieve-data.ts";
import rick_, { RamCharacter, RamEpisode, RamLocation } from "./ram-api";
import { mocked } from "ts-jest/utils";

// UTILIDADES

const location = (id: number, residents: Array<number>): RamLocation => ({
  id: id,
  name: "Location " + id,
  type: "Type " + id,
  dimension: "Dimension " + id,
  residents: residents.map((rid) => apiUrl("character/" + rid)),
  url: apiUrl("location/" + id),
  created: "date" + id,
});
const episode = (id: number, characters: Array<number>): RamEpisode => ({
  id: id,
  name: "Episode " + id,
  air_date: "date" + id,
  episode: "S01E0" + id,
  characters: characters.map((cid) => apiUrl("character/" + cid)),
  url: apiUrl("episode/" + id),
  created: "date" + id,
});
const character = (
  id: number,
  origin: number,
  episodes: Array<number>
): RamCharacter => ({
  id: id,
  name: "Character " + id,
  status: "unknown",
  species: "unknown",
  type: "unknown",
  gender: "unknown",
  origin: {
    name: "Location " + origin,
    url: apiUrl("location/" + origin),
  },
  location: {
    name: "Location 99",
    url: apiUrl("location/99"),
  },
  image: "image" + id,
  episode: episodes.map((cid) => apiUrl("episode/" + id)),
  url: apiUrl("character/" + id),
  created: "date" + id,
});

const apiUrl = (rest: string) => "https://rickandmortyapi.com/api/" + rest;

// MOCKS

jest.mock("./ram-api");

const rick = mocked(rick_, true);

const locations = [
  location(1, [1, 2, 3]),
  location(2, [1, 3, 4]),
  location(3, [1, 2, 4]),
];
const episodes = [
  episode(1, [1, 2]),
  episode(2, [1, 2, 3]),
  episode(3, [1, 3, 4]),
  episode(4, [1, 4]),
];
const characters = [
  character(1, 1, [1, 2, 3, 4]),
  character(2, 1, [1, 2]),
  character(3, 3, [2, 3]),
  character(4, 2, [3, 4]),
];

rick.getAllLocations.mockResolvedValue(locations);
rick.getAllEpisodes.mockResolvedValue(episodes);
rick.getAllCharacters.mockResolvedValue(characters);
rick.getLocationsById.mockImplementation(async (ids) =>
  ids.map((id) => locations[id - 1])
);
rick.getEpisodesById.mockImplementation(async (ids) =>
  ids.map((id) => episodes[id - 1])
);
rick.getCharactersById.mockImplementation(async (ids) =>
  ids.map((id) => characters[id - 1])
);
rick.getLocationsByFilter.mockResolvedValue([locations[1], locations[2]]);
rick.getEpisodesByFilter.mockResolvedValue([
  episodes[0],
  episodes[1],
  episodes[2],
]);
rick.getCharactersByFilter.mockResolvedValue([
  characters[0],
  characters[1],
  characters[2],
  characters[3],
]);

// PRUEBAS

// Cuenta letras

describe("countLetterInLocations", () => {
  it("responde con una cuenta de letras.", async () => {
    const amount = 2;

    expect(await countLetterInLocations("l")).toEqual(amount);
  });
});

describe("countLetterInEpisodes", () => {
  it("responde con una cuenta de letras.", async () => {
    const amount = 6;

    expect(await countLetterInEpisodes("e")).toEqual(amount);
  });
});

describe("countLetterInCharacters", () => {
  it("responde con una cuenta de letras.", async () => {
    const amount = 8;

    expect(await countLetterInCharacters("c")).toEqual(amount);
  });
});

// Orígenes

describe("getCharacterOriginsPerEpisode", () => {
  it("responde con una lista de capítulos y orígenes.", async () => {
    expect(await getCharacterOriginsPerEpisode()).toEqual([
      {
        title: "Episode 1",
        number: { season: 1, episode: 1 },
        origins: ["Location 1"],
      },
      {
        title: "Episode 2",
        number: { season: 1, episode: 2 },
        origins: ["Location 1", "Location 3"],
      },
      {
        title: "Episode 3",
        number: { season: 1, episode: 3 },
        origins: ["Location 1", "Location 3", "Location 2"],
      },
      {
        title: "Episode 4",
        number: { season: 1, episode: 4 },
        origins: ["Location 1", "Location 2"],
      },
    ]);
  });
});
