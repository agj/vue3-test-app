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

export type RamEpisodeFilter = {
  page?: number;
  name?: string;
  episode?: string;
};
export type RamLocationFilter = {
  page?: number;
  name?: string;
  type?: string;
  dimension?: string;
};
export type RamCharacterFilter = {
  page?: number;
  name?: string;
  status?: RamCharacterStatus;
  species?: string;
  type?: string;
  gender?: RamGender;
};

export type RamGender = "Female" | "Male" | "Genderless" | "unknown";
export type RamCharacterStatus = "Alive" | "Dead" | "unknown";
export type Url = string;

export type RamError = {
  status: number;
  error: string;
};

export const getAllEpisodes = async () => get2("episode", "all");

export const getEpisodesById = async (ids: Array<number>) =>
  get2("episode", ids);

export const getEpisodesByFilter = async (filter: RamEpisodeFilter) =>
  get2("episode", filter);

export const getAllLocations = async () => get2("location", "all");

export const getLocationsById = async (ids: Array<number>) =>
  get2("location", ids);

export const getLocationsByFilter = async (filter: RamLocationFilter) =>
  get2("location", filter);

export const getAllCharacters = async () => get2("character", "all");

export const getCharactersById = async (ids: Array<number>) =>
  get2("character", ids);

export const getCharactersByFilter = async (filter: RamCharacterFilter) =>
  get2("character", filter);

// Old

export const getEpisode = async (
  opts?: number | Array<number> | RamEpisodeFilter
): Promise<
  RamResponse<RamEpisode> | Array<RamEpisode> | RamEpisode | RamError
> => {
  return get("episode", fixOpts(opts));
};

export const getLocation = async (
  opts?: number | Array<number> | RamLocationFilter
): Promise<
  RamResponse<RamLocation> | Array<RamLocation> | RamLocation | RamError
> => {
  return get("location", fixOpts(opts));
};

export const getCharacter = async (
  opts?: number | Array<number> | RamCharacterFilter
): Promise<
  RamResponse<RamCharacter> | Array<RamCharacter> | RamCharacter | RamError
> => {
  return get("character", fixOpts(opts));
};

export default {
  getEpisode,
  getLocation,
  getCharacter,
};

// INTERNAL

type GetType = "episode" | "character" | "location";

const get2 = async (
  type: GetType,
  opts?:
    | RamEpisodeFilter
    | RamLocationFilter
    | RamCharacterFilter
    | Array<number>
    | "all"
) => {
  const id = Array.isArray(opts) ? opts.join(",") : "";
  const params =
    opts !== "all" && !Array.isArray(opts)
      ? new URLSearchParams(fixOpts(opts)).toString()
      : "";
  const response = await fetch(
    `https://rickandmortyapi.com/api/${type}/${id}?${params}`
  );
  const data = await response.json();
  return data;
};

const get = async (
  type: GetType,
  opts?: Record<string, string> | number | Array<number>
) => {
  const id =
    typeof opts === "number"
      ? opts.toString()
      : Array.isArray(opts)
      ? opts.join(",")
      : "";
  const params =
    typeof opts === "object" && !Array.isArray(opts)
      ? new URLSearchParams(opts).toString()
      : "";
  const response = await fetch(
    `https://rickandmortyapi.com/api/${type}/${id}?${params}`
  );
  const data = await response.json();
  return data;
};

const fixOpts = (opts: any) =>
  typeof opts === "object" && !Array.isArray(opts)
    ? toStringValues(opts)
    : opts;

const toStringValues = (obj: any) =>
  (map((v: any) => v?.toString() ?? "", obj) as unknown) as Record<
    string,
    string
  >;
