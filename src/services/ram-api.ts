import { concat, map, merge, range, reduce } from "ramda";

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

type GetType = "episode" | "character" | "location";

const get = async <T>(
  type: GetType,
  opts?: RamFilter | Array<number> | "all"
): Promise<Array<T>> => {
  const ids = Array.isArray(opts) ? opts : [];
  const params =
    opts && opts !== "all" && !Array.isArray(opts) ? fixOpts(opts) : {};
  const url = makeApiUrl(type, ids, params);

  const response = await fetch(url);
  const data = await response.json();

  if (Array.isArray(data)) {
    return data;
  } else if (data.info) {
    const ramResponse: RamResponse<T> = data;

    const pageRequests =
      ramResponse.info.pages < 2
        ? []
        : range(2, ramResponse.info.pages + 1).map((p) => {
            const pageUrl = makeApiUrl(
              type,
              ids,
              merge({ page: p.toString() }, params)
            );
            return fetch(pageUrl);
          });

    const pageResponses: Array<Response> = await Promise.all(pageRequests);
    const pageDatas = pageResponses.map(
      async (r) => (await r.json()) as RamResponse<T>
    );
    const pageResults = (await Promise.all(pageDatas)).map((d) => d.results);

    return reduce<Array<T>, Array<T>>(concat, ramResponse.results, pageResults);
  } else {
    return [];
  }
};

const fixOpts = (opts: RamFilter): Record<string, string> =>
  toStringValues(opts);

const toStringValues = (obj: Record<string, any>): Record<string, string> =>
  map((v: any) => v?.toString() ?? "", obj);

const makeApiUrl = (
  type: GetType,
  ids: Array<number>,
  params: Record<string, string>
): Url => {
  const idsString = ids.join(",");
  const paramsString = new URLSearchParams(params).toString();
  return `https://rickandmortyapi.com/api/${type}/${idsString}?${paramsString}`;
};
