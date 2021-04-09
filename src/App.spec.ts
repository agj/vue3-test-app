import { mount } from "@vue/test-utils";
import AwaitPromises from "await-promises";
import App from "./App.vue";

jest.mock("./retrieve-data");

const mountWait = async (comp: any) => {
  const waiter = new AwaitPromises();
  waiter.collect();
  const wrapper = mount(comp);
  waiter.stop();
  await waiter.wait();
  return wrapper;
};

describe("App", () => {
  it("despliega cantidad de letras L en nombres de lugares.", async () => {
    const wrapper = await mountWait(App);

    expect(wrapper.find(".in-locations .letter").text()).toEqual("L");
    expect(wrapper.find(".in-locations .amount").text()).toEqual("5");
  });

  it("despliega cantidad de letras E en títulos de episodios.", async () => {
    const wrapper = await mountWait(App);

    expect(wrapper.find(".in-episodes .letter").text()).toEqual("E");
    expect(wrapper.find(".in-episodes .amount").text()).toEqual("10");
  });

  it("despliega cantidad de letras C en nombres de personajes.", async () => {
    const wrapper = await mountWait(App);

    expect(wrapper.find(".in-characters .letter").text()).toEqual("C");
    expect(wrapper.find(".in-characters .amount").text()).toEqual("15");
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
});
