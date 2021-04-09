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

export const getEpisode = async (
  opts?: number | Array<number> | RamEpisodeFilter
): Promise<
  RamResponse<RamEpisode> | Array<RamEpisode> | RamEpisode | RamError
> => {
  return [];
};
export const getLocation = async (
  opts?: number | Array<number> | RamLocationFilter
): Promise<
  RamResponse<RamLocation> | Array<RamLocation> | RamLocation | RamError
> => {
  return [];
};
export const getCharacter = async (
  opts?: number | Array<number> | RamCharacterFilter
): Promise<
  RamResponse<RamCharacter> | Array<RamCharacter> | RamCharacter | RamError
> => {
  return [];
};

export default {
  getEpisode,
  getLocation,
  getCharacter,
};
