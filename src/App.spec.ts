import { mount } from "@vue/test-utils";
import App from "./App.vue";
import LetterCount from "./components/LetterCount.vue";

jest.mock("./retrieve-data");

describe("App", () => {
  it("despliega cantidad de letras L en nombres de lugares.", async () => {
    const wrapper = mount(App);

    expect(wrapper.find(".in-locations .letter").text()).toEqual("L");
    expect(wrapper.find(".in-locations .amount").text()).toEqual("5");
  });

  it("despliega cantidad de letras E en títulos de episodios.", async () => {
    const wrapper = mount(App);

    expect(wrapper.find(".in-episodes .letter").text()).toEqual("E");
    expect(wrapper.find(".in-episodes .amount").text()).toEqual("10");
  });

  it("despliega cantidad de letras C en nombres de personajes.", async () => {
    const wrapper = mount(App);

    expect(wrapper.find(".in-characters .letter").text()).toEqual("C");
    expect(wrapper.find(".in-characters .amount").text()).toEqual("15");
  });
});
