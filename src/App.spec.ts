import { mount } from "@vue/test-utils";
import AwaitPromises from "await-promises";
import { mocked } from "ts-jest/utils";
import App from "./App.vue";
import * as retrieveData from "./retrieve-data";

// MOCKS

jest.mock("./retrieve-data");

const mockRetrieveData = mocked(retrieveData);

mockRetrieveData.countLetterInEpisodes.mockResolvedValue(10);
mockRetrieveData.countLetterInLocations.mockResolvedValue(20);
mockRetrieveData.countLetterInCharacters.mockResolvedValue(30);
mockRetrieveData.getCharacterOriginsPerEpisode.mockResolvedValue([
  {
    title: "Lawnmower Dog",
    number: { season: 1, episode: 2 },
    origins: ["Jupiter", "Uranus", "Mars"],
  },
  {
    title: "Anatomy Park",
    number: { season: 1, episode: 3 },
    origins: ["Uranus", "Mars", "Pluto", "Andromeda", "Chiloé"],
  },
]);

// UTILIDADES

const mountWait = async (comp: any) => {
  const waiter = new AwaitPromises();
  waiter.collect();
  const wrapper = mount(comp);
  waiter.stop();
  await waiter.wait();
  return wrapper;
};

// PRUEBAS

describe("App", () => {
  it("despliega cantidad de letras E en títulos de episodios.", async () => {
    const wrapper = await mountWait(App);

    expect(wrapper.find(".in-episodes .letter").text()).toEqual("E");
    expect(wrapper.find(".in-episodes .amount").text()).toEqual("10");
  });

  it("despliega cantidad de letras L en nombres de lugares.", async () => {
    const wrapper = await mountWait(App);

    expect(wrapper.find(".in-locations .letter").text()).toEqual("L");
    expect(wrapper.find(".in-locations .amount").text()).toEqual("20");
  });

  it("despliega cantidad de letras C en nombres de personajes.", async () => {
    const wrapper = await mountWait(App);

    expect(wrapper.find(".in-characters .letter").text()).toEqual("C");
    expect(wrapper.find(".in-characters .amount").text()).toEqual("30");
  });

  it("despliega una lista de episodios con los orígenes de sus personajes.", async () => {
    const wrapper = await mountWait(App);

    expect(
      wrapper.findAll(".ep-char-origins .items > *").map((el) => ({
        title: el.find(".episode-title").text(),
        number: el.find(".episode-number").text(),
        origins: el.findAll(".locations > *").map((l) => l.text()),
      }))
    ).toEqual([
      {
        title: "Lawnmower Dog",
        number: "T1 E2",
        origins: ["Jupiter", "Uranus", "Mars"],
      },
      {
        title: "Anatomy Park",
        number: "T1 E3",
        origins: ["Uranus", "Mars", "Pluto", "Andromeda", "Chiloé"],
      },
    ]);
  });

  it("despliega el tiempo que se demoró en recibir datos.", async () => {
    const wrapper = await mountWait(App);

    expect(wrapper.find(".letter-count .elapsed").text()).toMatch(/\d+ ms/);
    expect(wrapper.find(".ep-char-origins .elapsed").text()).toMatch(/\d+ ms/);
  });
});
