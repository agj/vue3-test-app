import { mount } from "@vue/test-utils";
import LetterCount from "./LetterCount.vue";

describe("LetterCount", () => {
  it("despliega letra, cantidad y descripción.", async () => {
    const letter = "L";
    const amount = 123;
    const description = "veces en nombres de lugares";

    const wrapper = mount(LetterCount, {
      props: {
        data: { letter, amount },
      },
      slots: {
        default: description,
      },
    });

    expect(wrapper.find(".letter").text()).toEqual(letter);
    expect(wrapper.find(".amount").text()).toEqual(amount.toString());
    expect(wrapper.find(".content").text()).toEqual(description);
  });
});
