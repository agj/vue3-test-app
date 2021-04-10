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
} from "./ram-api";

const mockFetch = jest.fn().mockImplementation(async (url) => ({
  ok: true,
  status: 200,
  json: async () => ({}),
}));
window.fetch = mockFetch;

describe("getAllEpisodes", () => {
  it("llama fetch sin argumentos.", async () => {
    await getAllEpisodes();

    expect(mockFetch).toHaveBeenLastCalledWith(
      "https://rickandmortyapi.com/api/episode/?"
    );
  });
});

describe("getEpisodesById", () => {
  it("llama fetch con IDs de episodios.", async () => {
    await getEpisodesById([1, 5]);

    expect(mockFetch).toHaveBeenLastCalledWith(
      "https://rickandmortyapi.com/api/episode/1,5?"
    );
  });
});

describe("getEpisodesByFilter", () => {
  it("llama fetch con opciones.", async () => {
    const page = 2;
    const name = "a";
    const episode = "t01e02";

    await getEpisodesByFilter({ page, name, episode });

    expect(mockFetch).toHaveBeenLastCalledWith(
      `https://rickandmortyapi.com/api/episode/?page=${page}&name=${name}&episode=${episode}`
    );
  });
});

describe("getAllLocations", () => {
  it("llama fetch sin argumentos.", async () => {
    await getAllLocations();

    expect(mockFetch).toHaveBeenLastCalledWith(
      "https://rickandmortyapi.com/api/location/?"
    );
  });
});

describe("getLocationsById", () => {
  it("llama fetch con IDs de episodios.", async () => {
    await getLocationsById([1, 5]);

    expect(mockFetch).toHaveBeenLastCalledWith(
      "https://rickandmortyapi.com/api/location/1,5?"
    );
  });
});

describe("getLocationsByFilter", () => {
  it("llama fetch con opciones.", async () => {
    const page = 2;
    const name = "a";
    const type = "Type";
    const dimension = "Dimension";

    await getLocationsByFilter({ page, name, type, dimension });

    expect(mockFetch).toHaveBeenLastCalledWith(
      `https://rickandmortyapi.com/api/location/?page=${page}&name=${name}&type=${type}&dimension=${dimension}`
    );
  });
});

describe("getAllCharacters", () => {
  it("llama fetch sin argumentos.", async () => {
    await getAllCharacters();

    expect(mockFetch).toHaveBeenLastCalledWith(
      "https://rickandmortyapi.com/api/character/?"
    );
  });
});

describe("getCharactersById", () => {
  it("llama fetch con IDs de episodios.", async () => {
    await getCharactersById([1, 5]);

    expect(mockFetch).toHaveBeenLastCalledWith(
      "https://rickandmortyapi.com/api/character/1,5?"
    );
  });
});

describe("getCharactersByFilter", () => {
  it("llama fetch con opciones.", async () => {
    const page = 2;
    const name = "a";
    const status = "unknown";
    const species = "Human";
    const type = "Type";
    const gender = "Female";

    await getCharactersByFilter({ page, name, status, species, type, gender });

    expect(mockFetch).toHaveBeenLastCalledWith(
      `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`
    );
  });
});
