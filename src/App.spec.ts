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
});
