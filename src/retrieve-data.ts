import {
  getAllCharacters,
  getAllEpisodes,
  getCharactersByFilter,
  getCharactersById,
  getEpisodesByFilter,
  getLocationsByFilter,
  RamCharacter,
  RamEpisode,
  RamLocation,
  Url,
} from "./ram-api";
import { flatten, uniq } from "ramda";
import { EpisodeNumber, EpisodeWithOrigins } from "./components/types";

export const countLetterInLocations = async (
  letter: string
): Promise<number> => {
  const locations = await getLocationsByFilter({ name: letter });
  return countLetters(letter, locations);
};

export const countLetterInEpisodes = async (
  letter: string
): Promise<number> => {
  checkEpisodes();
  return countLetters(letter, await episodes);
};

export const countLetterInCharacters = async (
  letter: string
): Promise<number> => {
  checkCharacters();
  return countLetters(letter, await characters);
};

export const getCharacterOriginsPerEpisode = async (): Promise<
  Array<EpisodeWithOrigins>
> => {
  checkEpisodes();
  checkCharacters();
  const allEps = await episodes;
  const allChars = await characters;
  const characterIds = uniq(
    flatten(allEps.map((ep) => ep.characters.map(idFromUrl)))
  );
  const chars = allChars.filter(({ id }) => characterIds.includes(id));

  const result = allEps.map((ep) => ({
    title: ep.name,
    number: episodeSeasonFromString(ep.episode),
    origins: getOrigins(chars, ep.characters),
  }));

  return result;
};

// INTERNAL

let episodes: Promise<Array<RamEpisode>>;
let characters: Promise<Array<RamCharacter>>;

const countLetters = (
  letter: string,
  list: Array<{ name: string }>
): number => {
  const letterNormalized = letter.toLowerCase();
  return list.reduce((acc, { name }) => {
    const countName =
      name.length - name.toLowerCase().replaceAll(letterNormalized, "").length;
    return acc + countName;
  }, 0);
};

const idFromUrl = (url: string) => {
  const n = url.match(/\/(\d+)$/) ?? [];
  return parseInt(n[1]);
};

const episodeSeasonFromString = (code: string): EpisodeNumber => {
  const s = (code.match(/S(\d\d)/) ?? [])[1];
  const e = (code.match(/E(\d\d)/) ?? [])[1];
  return {
    season: parseInt(s),
    episode: parseInt(e),
  };
};

const getOrigins = (
  characters: Array<RamCharacter>,
  epCharUrls: Array<Url>
) => {
  const epCharIds = epCharUrls.map(idFromUrl);
  const epChars = characters.filter(({ id }) => epCharIds.includes(id));
  const origins = uniq(epChars.map((ch) => ch.origin.name));
  return origins;
};

const checkEpisodes = () => {
  if (!episodes) {
    episodes = getAllEpisodes();
  }
};
const checkCharacters = () => {
  if (!characters) {
    characters = getAllCharacters();
  }
};
