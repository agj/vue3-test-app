import { mount } from "@vue/test-utils";
import EpCharOrigins from "./EpCharOrigins.vue";

describe("EpCharOrigins", () => {
  it("despliega título y número del episodio, y número y nombre de lugares de origen.", async () => {
    const episode = {
      title: "Pilot",
      number: { season: 1, episode: 3 },
      origins: ["Earth", "Jupiter", "Mars", "Uranus"],
    };

    const wrapper = mount(EpCharOrigins, {
      props: {
        episode,
      },
    });

    expect(wrapper.find(".episode-title").text()).toEqual(episode.title);
    expect(wrapper.find(".episode-number").text()).toEqual(
      `T${episode.number.season} E${episode.number.episode}`
    );
    expect(wrapper.find(".location-amount").text()).toEqual(
      episode.origins.length.toString()
    );
    expect(wrapper.findAll(".locations li").map((loc) => loc.text())).toEqual(
      episode.origins
    );
  });
});
