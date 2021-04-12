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
  const characters = await getCharactersByFilter({ name: letter });
  return countLetters(letter, characters);
};

export const getCharacterOriginsPerEpisode = async (): Promise<
  Array<EpisodeWithOrigins>
> => {
  checkEpisodes();
  const allEps = await episodes;
  const characterIds = uniq(
    flatten(allEps.map((ep) => ep.characters.map(idFromUrl)))
  );
  const characters = await getCharactersById(characterIds);

  const result = allEps.map((ep) => ({
    title: ep.name,
    number: episodeSeasonFromString(ep.episode),
    origins: getOrigins(characters, ep.characters),
  }));

  return result;
};

// INTERNAL

let episodes: Promise<Array<RamEpisode>>;

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
  const id = url.match(/\/(\d+)$/)?.[1] ?? "";
  return parseInt(id);
};

const episodeSeasonFromString = (code: string): EpisodeNumber => {
  const s = code.match(/S(\d\d)/)?.[1] ?? "";
  const e = code.match(/E(\d\d)/)?.[1] ?? "";
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
