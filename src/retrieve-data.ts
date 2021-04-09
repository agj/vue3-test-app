import {
  getCharacter,
  getEpisode,
  getLocation,
  RamCharacter,
  RamEpisode,
  RamLocation,
  RamResponse,
  Url,
} from "./ram-api";
import { flatten, uniq } from "ramda";
import { EpisodeNumber, EpisodeWithOrigins } from "./components/types";

export const countLocationsWithLetter = async (
  letter: string
): Promise<number> => {
  const response = await getLocation({ name: letter });
  return (response as RamResponse<RamLocation>).info?.count ?? 0;
};

export const countEpisodesWithLetter = async (
  letter: string
): Promise<number> => {
  const response = await getEpisode({ name: letter });
  return (response as RamResponse<RamEpisode>).info?.count ?? 0;
};

export const countCharactersWithLetter = async (
  letter: string
): Promise<number> => {
  const response = await getCharacter({ name: letter });
  return (response as RamResponse<RamCharacter>).info?.count ?? 0;
};

export const getCharacterOriginsPerEpisode = async (): Promise<
  Array<EpisodeWithOrigins>
> => {
  const episodes = await getAllEpisodes();
  const characterIds = uniq(
    flatten(episodes.map((ep) => ep.characters.map(idFromUrl)))
  );
  const characters = (await getCharacter(characterIds)) as Array<RamCharacter>;

  const result = episodes.map((ep) => ({
    title: ep.name,
    number: episodeSeasonFromString(ep.episode),
    origins: getOrigins(characters, ep.characters),
  }));

  return result;
};

// INTERNAL

const getAllEpisodes = async () => {
  let episodes: Array<RamEpisode> = [];
  let page = 1;
  while (true) {
    const response = (await getEpisode({ page })) as RamResponse<RamEpisode>;
    episodes = episodes.concat(response.results);
    ++page;
    if (!response.info.next) break;
  }
  return episodes;
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
