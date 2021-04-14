import {
  countLetterInCharacters,
  countLetterInEpisodes,
  countLetterInLocations,
  getCharacterOriginsPerEpisode,
} from "./retrieve-data";
import "./retrieve-data.ts";
import rick_, {
  RamCharacter,
  RamCharacterFilter,
  RamEpisode,
  RamEpisodeFilter,
  RamLocation,
  RamLocationFilter,
} from "./ram-api";
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

function getByFilter<T extends { name: string }>(list: Array<T>) {
  return async (
    filter: RamCharacterFilter | RamEpisodeFilter | RamLocationFilter
  ): Promise<Array<T>> => {
    const filterName = filter.name?.toLowerCase() ?? "";
    return list.filter((obj) => {
      const objName = obj.name.toLowerCase();
      return objName.includes(filterName);
    });
  };
}
function getById<T>(list: Array<T>) {
  return async (ids: Array<number>): Promise<Array<T>> =>
    ids.map((id) => list[id - 1]!);
}

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
rick.getLocationsById.mockImplementation(getById(locations));
rick.getEpisodesById.mockImplementation(getById(episodes));
rick.getCharactersById.mockImplementation(getById(characters));
rick.getLocationsByFilter.mockImplementation(getByFilter(locations));
rick.getEpisodesByFilter.mockImplementation(getByFilter(episodes));
rick.getCharactersByFilter.mockImplementation(getByFilter(characters));

// PRUEBAS

// Cuenta letras

describe("countLetterInLocations", () => {
  const letterAmount = 3;

  it("responde con una cuenta de letras.", async () => {
    expect(await countLetterInLocations("l")).toEqual(letterAmount);
  });
  it("responde igual con mayúscula.", async () => {
    expect(await countLetterInLocations("L")).toEqual(letterAmount);
  });
});

describe("countLetterInEpisodes", () => {
  const letterAmount = 8;

  it("responde con una cuenta de letras.", async () => {
    expect(await countLetterInEpisodes("e")).toEqual(letterAmount);
  });
  it("responde igual con mayúscula.", async () => {
    expect(await countLetterInEpisodes("E")).toEqual(letterAmount);
  });
});

describe("countLetterInCharacters", () => {
  const letterAmount = 8;

  it("responde con una cuenta de letras.", async () => {
    expect(await countLetterInCharacters("c")).toEqual(letterAmount);
  });
  it("responde igual con mayúscula.", async () => {
    expect(await countLetterInCharacters("C")).toEqual(letterAmount);
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
