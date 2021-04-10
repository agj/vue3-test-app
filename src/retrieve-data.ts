import {
  getAllEpisodes,
  getCharactersByFilter,
  getCharactersById,
  getEpisodesByFilter,
  getLocationsByFilter,
  RamCharacter,
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
  const episodes = await getEpisodesByFilter({ name: letter });
  return countLetters(letter, episodes);
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
  const episodes = await getAllEpisodes();
  const characterIds = uniq(
    flatten(episodes.map((ep) => ep.characters.map(idFromUrl)))
  );
  const characters = await getCharactersById(characterIds);

  const result = episodes.map((ep) => ({
    title: ep.name,
    number: episodeSeasonFromString(ep.episode),
    origins: getOrigins(characters, ep.characters),
  }));

  return result;
};

// INTERNAL

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
