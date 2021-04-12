import { map } from "ramda";

export type RamResponse<T> = {
  info: {
    count: number;
    pages: number;
    next: Url | null;
    prev: Url | null;
  };
  results: Array<T>;
};

export type RamEpisode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<Url>;
  url: Url;
  created: string;
};
export type RamLocation = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: Array<Url>;
  url: Url;
  created: string;
};
export type RamCharacter = {
  id: number;
  name: string;
  status: RamCharacterStatus;
  species: string;
  type: string;
  gender: RamGender;
  origin: {
    name: string;
    url: Url;
  };
  location: {
    name: string;
    url: Url;
  };
  image: Url;
  episode: Array<Url>;
  url: Url;
  created: string;
};
export type RamThing = RamEpisode | RamLocation | RamCharacter;

export type RamEpisodeFilter = {
  name?: string;
  episode?: string;
};
export type RamLocationFilter = {
  name?: string;
  type?: string;
  dimension?: string;
};
export type RamCharacterFilter = {
  name?: string;
  status?: RamCharacterStatus;
  species?: string;
  type?: string;
  gender?: RamGender;
};
export type RamFilter =
  | RamEpisodeFilter
  | RamLocationFilter
  | RamCharacterFilter;

export type RamGender = "Female" | "Male" | "Genderless" | "unknown";
export type RamCharacterStatus = "Alive" | "Dead" | "unknown";
export type Url = string;

export type RamError = {
  status: number;
  error: string;
};

// Capítulos

export const getAllEpisodes = async (): Promise<Array<RamEpisode>> =>
  get("episode", "all");

export const getEpisodesById = async (
  ids: Array<number>
): Promise<Array<RamEpisode>> => get("episode", ids);

export const getEpisodesByFilter = async (
  filter: RamEpisodeFilter
): Promise<Array<RamEpisode>> => get("episode", filter);

// Lugares

export const getAllLocations = async (): Promise<Array<RamLocation>> =>
  get("location", "all");

export const getLocationsById = async (
  ids: Array<number>
): Promise<Array<RamLocation>> => get("location", ids);

export const getLocationsByFilter = async (
  filter: RamLocationFilter
): Promise<Array<RamLocation>> => get("location", filter);

// Personajes

export const getAllCharacters = async (): Promise<Array<RamCharacter>> =>
  get("character", "all");

export const getCharactersById = async (
  ids: Array<number>
): Promise<Array<RamCharacter>> => get("character", ids);

export const getCharactersByFilter = async (
  filter: RamCharacterFilter
): Promise<Array<RamCharacter>> => get("character", filter);

export default {
  getAllEpisodes,
  getEpisodesById,
  getEpisodesByFilter,
  getAllLocations,
  getLocationsById,
  getLocationsByFilter,
  getAllCharacters,
  getCharactersById,
  getCharactersByFilter,
};

// INTERNAL

type InternalFilter<T> = T & {
  page?: number;
};

type GetType = "episode" | "character" | "location";

const get = async <T>(
  type: GetType,
  opts?: RamFilter | Array<number> | "all"
): Promise<Array<T>> => {
  const id = Array.isArray(opts) ? opts.join(",") : "";
  const params =
    opts && opts !== "all" && !Array.isArray(opts)
      ? new URLSearchParams(fixOpts(opts)).toString()
      : "";
  const response = await fetch(
    `https://rickandmortyapi.com/api/${type}/${id}?${params}`
  );
  const data = await response.json();

  if (Array.isArray(data)) {
    return data;
  } else if (data.info) {
    let result = data.results;
    let newData: RamResponse<any> = data;
    while (newData.info.next) {
      const response = await fetch(newData.info.next);
      newData = await response.json();
      result = result.concat(newData.results);
    }
    return result;
  } else {
    return [];
  }
};

const fixOpts = (opts: RamFilter) =>
  !Array.isArray(opts) ? toStringValues(opts) : opts;

const toStringValues = (obj: Record<string, any>): Record<string, string> =>
  map((v: any) => v?.toString() ?? "", obj);
