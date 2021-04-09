<template>
  <article class="container">
    <h1>Hechos inútiles sobre <b>Rick and Morty</b></h1>
    <section class="letter-count box">
      <div class="description">
        ¿Cuántas veces se repiten letras en nombres?
      </div>
      <div class="items rows-3">
        <LetterCount class="in-locations" :data="locationsLetterCount">
          veces en nombres de lugares
        </LetterCount>
        <LetterCount class="in-episodes" :data="episodesLetterCount">
          veces en títulos de capítulos
        </LetterCount>
        <LetterCount class="in-characters" :data="charactersLetterCount">
          veces en nombres de personajes
        </LetterCount>
      </div>
    </section>
    <section class="ep-char-origins box">
      <div class="description">
        ¿De dónde vienen los personajes que aparecen en cada capítulo?
      </div>
      <div class="items rows-4">
        <EpCharOrigins
          v-for="ep in epCharOrigins"
          :episode="ep"
        ></EpCharOrigins>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
import {
  countLocationsWithLetter,
  countEpisodesWithLetter,
  countCharactersWithLetter,
  getCharacterOriginsPerEpisode,
} from "./retrieve-data";
import { LetterCountData, EpisodeWithOrigins } from "./components/types";

import LetterCount from "./components/LetterCount.vue";
import EpCharOrigins from "./components/EpCharOrigins.vue";

export default {
  components: {
    LetterCount,
    EpCharOrigins,
  },
  setup() {
    const locationsLetterCount = ref<LetterCountData | undefined>();
    const episodesLetterCount = ref<LetterCountData | undefined>();
    const charactersLetterCount = ref<LetterCountData | undefined>();

    countLocationsWithLetter("L").then((num) => {
      locationsLetterCount.value = { letter: "L", amount: num };
    });
    countEpisodesWithLetter("E").then((num) => {
      episodesLetterCount.value = { letter: "E", amount: num };
    });
    countCharactersWithLetter("C").then((num) => {
      charactersLetterCount.value = { letter: "C", amount: num };
    });

    const epCharOrigins = ref<Array<EpisodeWithOrigins>>();

    getCharacterOriginsPerEpisode().then((eps) => {
      epCharOrigins.value = eps;
    });

    return {
      locationsLetterCount,
      episodesLetterCount,
      charactersLetterCount,
      epCharOrigins,
    };
  },
};
</script>

<style>
:root {
  --color-light: hsl(0, 0%, 95%);
  --color-lighter: hsl(0, 0%, 98%);
  --color-green-dark: hsl(126.4, 9.6%, 42.3%);
  --color-green: hsl(126.4, 43.3%, 64.7%);
  --color-green-light: hsl(126.4, 49.3%, 83.7%);
  --color-green-lighter: hsl(126.3, 72.7%, 88.3%);
  --space-l: 1.7rem;
  --space-m: 1rem;
  --space-s: 0.5rem;
  --space-xs: 0.2rem;
  --thickness-s: 0.01rem;
  --font-xl: 28pt;
  --font-l: 16pt;
  --font-m: 13pt;
  --font-s: 9pt;

  font-size: var(--font-m);
  line-height: 1.3;
}
html,
body {
  margin: 0;
  padding: 0;
  background-color: var(--color-light);
}
* {
  box-sizing: border-box;
}

ul,
li {
  padding: 0;
  margin: 0;
}

h1 {
  font-size: var(--font-xl);
  font-weight: normal;
  margin: 0;
  padding: 0;
}
h1 b {
  color: var(--color-green);
}

.rows-3 {
  display: grid;
  grid-template-columns:
    1fr
    1fr
    1fr;
  gap: var(--space-xs);
}
.rows-4 {
  display: grid;
  grid-template-columns:
    1fr
    1fr
    1fr
    1fr;
  gap: var(--space-xs);
}

.container {
  font-family: Helvetica, Arial, sans-serif;
  max-width: 50rem;
  padding: var(--space-m);
  margin: 0 auto;
}
.box {
  padding: 1rem;
  margin: var(--space-m) 0;
  background-color: var(--color-lighter);
}
.box .description {
  padding-bottom: var(--space-m);
  font-size: var(--font-l);
}

.card .header {
  padding: var(--space-s) var(--space-s) var(--space-xs) var(--space-s);
}
.card .content {
  padding: var(--space-s);
}
</style>
