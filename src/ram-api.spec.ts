import {
  getAllEpisodes,
  getEpisodesById,
  getEpisodesByFilter,
  getAllLocations,
  getLocationsById,
  getLocationsByFilter,
  getAllCharacters,
  getCharactersById,
  getCharactersByFilter,
  RamResponse,
  RamEpisode,
  RamLocation,
  RamCharacter,
  Url,
  RamEpisodeFilter,
  RamCharacterFilter,
} from "./ram-api";

const mockFetch = jest.fn();
window.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockClear();
});

// Capítulos

describe("getAllEpisodes", () => {
  it("llama fetch dos veces y responde con el contenido de dos páginas.", async () => {
    mockFetch.mockResolvedValueOnce(
      pagedResponse({
        pages: 2,
        next: apiUrl("episode/?page=2"),
        results: [episode(1), episode(2)],
      })
    );
    mockFetch.mockResolvedValueOnce(
      pagedResponse({
        pages: 2,
        next: null,
        results: [episode(3), episode(4)],
      })
    );

    const res = await getAllEpisodes();

    expect(res).toEqual([episode(1), episode(2), episode(3), episode(4)]);

    expect(mockFetch).toHaveBeenNthCalledWith(1, apiUrl("episode/?"));
    expect(mockFetch).toHaveBeenNthCalledWith(2, apiUrl("episode/?page=2"));
  });
});

describe("getEpisodesById", () => {
  it("llama fetch con IDs de episodios y responde con una lista de ellos.", async () => {
    const ids = [1, 5, 9];
    const episodes = ids.map(episode);

    mockFetch.mockResolvedValueOnce(listResponse(episodes));

    const res = await getEpisodesById(ids);

    expect(res).toEqual(episodes);
    expect(mockFetch).toHaveBeenLastCalledWith(
      `https://rickandmortyapi.com/api/episode/${ids.join(",")}?`
    );
  });
});

describe("getEpisodesByFilter", () => {
  it("llama fetch con opciones.", async () => {
    const filter = { name: "a", episode: "ep" };

    mockFetch.mockResolvedValueOnce(
      pagedResponse({
        pages: 2,
        next: apiUrl(`episode/?page=2`),
        results: [episode(1), episode(2)],
      })
    );
    mockFetch.mockResolvedValueOnce(
      pagedResponse({
        pages: 2,
        next: null,
        results: [episode(3), episode(4)],
      })
    );

    const res = await getEpisodesByFilter(filter);

    expect(res).toEqual([episode(1), episode(2), episode(3), episode(4)]);

    expect(mockFetch).toHaveBeenNthCalledWith(
      1,
      apiUrl(`episode/?name=${filter.name}&episode=${filter.episode}`)
    );
    expect(mockFetch).toHaveBeenNthCalledWith(2, apiUrl(`episode/?page=2`));
  });
});

// Lugares

describe("getAllLocations", () => {
  it("llama fetch dos veces y responde con el contenido de dos páginas.", async () => {
    mockFetch.mockResolvedValueOnce(
      pagedResponse({
        pages: 2,
        next: apiUrl("location/?page=2"),
        results: [location(1), location(2)],
      })
    );
    mockFetch.mockResolvedValueOnce(
      pagedResponse({
        pages: 2,
        next: null,
        results: [location(3), location(4)],
      })
    );

    const res = await getAllLocations();

    expect(res).toEqual([location(1), location(2), location(3), location(4)]);

    expect(mockFetch).toHaveBeenNthCalledWith(1, apiUrl("location/?"));
    expect(mockFetch).toHaveBeenNthCalledWith(2, apiUrl("location/?page=2"));
  });
});

describe("getLocationsById", () => {
  it("llama fetch con IDs de episodios y responde con una lista de ellos.", async () => {
    const ids = [1, 5, 9];
    const locations = ids.map(location);

    mockFetch.mockResolvedValueOnce(listResponse(locations));

    const res = await getLocationsById(ids);

    expect(res).toEqual(locations);
    expect(mockFetch).toHaveBeenLastCalledWith(
      `https://rickandmortyapi.com/api/location/${ids.join(",")}?`
    );
  });
});

describe("getLocationsByFilter", () => {
  it("llama fetch con opciones.", async () => {
    const filter = { name: "a", type: "Type", dimension: "Dimension" };

    mockFetch.mockResolvedValueOnce(
      pagedResponse({
        pages: 2,
        next: apiUrl(`location/?page=2`),
        results: [location(1), location(2)],
      })
    );
    mockFetch.mockResolvedValueOnce(
      pagedResponse({
        pages: 2,
        next: null,
        results: [location(3), location(4)],
      })
    );

    const res = await getLocationsByFilter(filter);

    expect(res).toEqual([location(1), location(2), location(3), location(4)]);

    expect(mockFetch).toHaveBeenNthCalledWith(
      1,
      apiUrl(
        `location/?name=${filter.name}&type=${filter.type}&dimension=${filter.dimension}`
      )
    );
    expect(mockFetch).toHaveBeenNthCalledWith(2, apiUrl(`location/?page=2`));
  });
});

// Personajes

describe("getAllCharacters", () => {
  it("llama fetch dos veces y responde con el contenido de dos páginas.", async () => {
    mockFetch.mockResolvedValueOnce(
      pagedResponse({
        pages: 2,
        next: apiUrl("character/?page=2"),
        results: [character(1), character(2)],
      })
    );
    mockFetch.mockResolvedValueOnce(
      pagedResponse({
        pages: 2,
        next: null,
        results: [character(3), character(4)],
      })
    );

    const res = await getAllCharacters();

    expect(res).toEqual([
      character(1),
      character(2),
      character(3),
      character(4),
    ]);

    expect(mockFetch).toHaveBeenNthCalledWith(1, apiUrl("character/?"));
    expect(mockFetch).toHaveBeenNthCalledWith(2, apiUrl("character/?page=2"));
  });
});

describe("getCharactersById", () => {
  it("llama fetch con IDs de episodios y responde con una lista de ellos.", async () => {
    const ids = [1, 5, 9];
    const characters = ids.map(character);

    mockFetch.mockResolvedValueOnce(listResponse(characters));

    const res = await getCharactersById(ids);

    expect(res).toEqual(characters);
    expect(mockFetch).toHaveBeenLastCalledWith(
      `https://rickandmortyapi.com/api/character/${ids.join(",")}?`
    );
  });
});

describe("getCharactersByFilter", () => {
  it("llama fetch con opciones.", async () => {
    const filter: RamCharacterFilter = {
      name: "a",
      status: "unknown",
      species: "Human",
      type: "Type",
      gender: "Female",
    };

    mockFetch.mockResolvedValueOnce(
      pagedResponse({
        pages: 2,
        next: apiUrl(`character/?page=2`),
        results: [character(1), character(2)],
      })
    );
    mockFetch.mockResolvedValueOnce(
      pagedResponse({
        pages: 2,
        next: null,
        results: [character(3), character(4)],
      })
    );

    const res = await getCharactersByFilter(filter);

    expect(res).toEqual([
      character(1),
      character(2),
      character(3),
      character(4),
    ]);

    expect(mockFetch).toHaveBeenNthCalledWith(
      1,
      apiUrl(
        `character/?name=${filter.name}&status=${filter.status}&species=${filter.species}&type=${filter.type}&gender=${filter.gender}`
      )
    );
    expect(mockFetch).toHaveBeenNthCalledWith(2, apiUrl(`character/?page=2`));
  });
});

// UTILIDADES

const pagedResponse = ({
  count = 100,
  pages = 1,
  next = null,
  prev = null,
  results = [],
}: {
  count?: number;
  pages?: number;
  next?: Url | null;
  prev?: Url | null;
  results?: Array<RamEpisode | RamLocation | RamCharacter>;
}) => ({
  ok: true,
  status: 200,
  json: async () => ({
    info: {
      count,
      pages,
      next,
      prev,
    },
    results,
  }),
});
const listResponse = (
  results: Array<RamEpisode | RamLocation | RamCharacter> = []
) => ({
  ok: true,
  status: 200,
  json: async () => results,
});

const episode = (id: number): RamEpisode => ({
  id: id,
  name: "Episode " + id,
  air_date: "date" + id,
  episode: "S01E" + id,
  characters: [],
  url: apiUrl("episode/" + id),
  created: "date" + id,
});
const location = (id: number): RamLocation => ({
  id: id,
  name: "Location " + id,
  type: "Type " + id,
  dimension: "Dimension " + id,
  residents: [],
  url: apiUrl("location/" + id),
  created: "date" + id,
});
const character = (id: number): RamCharacter => ({
  id: id,
  name: "Character " + id,
  status: "unknown",
  species: "unknown",
  type: "unknown",
  gender: "unknown",
  origin: {
    name: "Location 99",
    url: apiUrl("location/99"),
  },
  location: {
    name: "Location 99",
    url: apiUrl("location/99"),
  },
  image: "image" + id,
  episode: [],
  url: apiUrl("character/" + id),
  created: "date" + id,
});

const apiUrl = (rest: string) => "https://rickandmortyapi.com/api/" + rest;
