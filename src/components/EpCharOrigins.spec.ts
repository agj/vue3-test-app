import { mount } from "@vue/test-utils";
import EpCharOrigins from "./EpCharOrigins.vue";

describe("EpCharOrigins", () => {
  it("despliega título y número del episodio, y número y nombre de lugares de origen.", async () => {
    const episodeTitle = "Pilot";
    const episodeNumber = "T01E01";
    const origins = ["Earth", "Jupiter", "Mars", "Uranus"];

    const wrapper = mount(EpCharOrigins, {
      props: {
        episodeTitle,
        episodeNumber,
        origins,
      },
    });

    expect(wrapper.find(".episode-title").text()).toEqual(episodeTitle);
    expect(wrapper.find(".episode-number").text()).toEqual(episodeNumber);
    expect(wrapper.find(".location-amount").text()).toEqual(
      origins.length.toString()
    );
    expect(wrapper.findAll(".locations li").map((loc) => loc.text())).toEqual(
      origins
    );
  });
});
