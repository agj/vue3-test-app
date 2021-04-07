<template>
  <article class="container">
    <h1>Hechos inútiles sobre <b>Rick and Morty</b></h1>
    <section class="letter-count box">
      <div class="description">
        ¿Cuántas veces se repiten letras en nombres?
      </div>
      <div class="items rows-3">
        <LetterCount letter="L" :amount="65">
          veces en nombres de lugares
        </LetterCount>
        <LetterCount letter="E" :amount="189">
          veces en títulos de capítulos
        </LetterCount>
        <LetterCount letter="C" :amount="12">
          veces en nombres de personajes
        </LetterCount>
      </div>
    </section>
    <section class="ep-char-origins box">
      <div class="description">
        ¿De dónde vienen los personajes que aparecen en cada capítulo?
      </div>
      <div class="items rows-4">
        <section class="card">
          <div class="header">
            <div class="location-amount">6</div>
            <div class="episode-title">Pilot</div>
            <div class="episode-number">T01E01</div>
          </div>
          <div class="content">
            <ul class="locations">
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
            </ul>
          </div>
        </section>
        <section class="card">
          <div class="header">
            <div class="location-amount">6</div>
            <div class="episode-title">Pilot</div>
            <div class="episode-number">T01E01</div>
          </div>
          <div class="content">
            <ul class="locations">
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
            </ul>
          </div>
        </section>
        <section class="card">
          <div class="header">
            <div class="location-amount">6</div>
            <div class="episode-title">Pilot</div>
            <div class="episode-number">T01E01</div>
          </div>
          <div class="content">
            <ul class="locations">
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
            </ul>
          </div>
        </section>
        <section class="card">
          <div class="header">
            <div class="location-amount">6</div>
            <div class="episode-title">Pilot</div>
            <div class="episode-number">T01E01</div>
          </div>
          <div class="content">
            <ul class="locations">
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
            </ul>
          </div>
        </section>
        <section class="card">
          <div class="header">
            <div class="location-amount">6</div>
            <div class="episode-title">Pilot</div>
            <div class="episode-number">T01E01</div>
          </div>
          <div class="content">
            <ul class="locations">
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
            </ul>
          </div>
        </section>
        <section class="card">
          <div class="header">
            <div class="location-amount">6</div>
            <div class="episode-title">Pilot</div>
            <div class="episode-number">T01E01</div>
          </div>
          <div class="content">
            <ul class="locations">
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
            </ul>
          </div>
        </section>
        <section class="card">
          <div class="header">
            <div class="location-amount">6</div>
            <div class="episode-title">Pilot</div>
            <div class="episode-number">T01E01</div>
          </div>
          <div class="content">
            <ul class="locations">
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
            </ul>
          </div>
        </section>
        <section class="card">
          <div class="header">
            <div class="location-amount">6</div>
            <div class="episode-title">Pilot</div>
            <div class="episode-number">T01E01</div>
          </div>
          <div class="content">
            <ul class="locations">
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
            </ul>
          </div>
        </section>
        <section class="card">
          <div class="header">
            <div class="location-amount">6</div>
            <div class="episode-title">Pilot</div>
            <div class="episode-number">T01E01</div>
          </div>
          <div class="content">
            <ul class="locations">
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
              <li>Earth</li>
              <li>Mars</li>
              <li>Jupiter</li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import LetterCount from "./components/LetterCount.vue";

export default defineComponent({
  name: "App",
  components: {
    LetterCount,
  },
});
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

/* LETTER-COUNT */

.letter-count .card {
  background-color: var(--color-green-lighter);
  color: var(--color-green-dark);
}

.letter-count .card .header {
  background-color: var(--color-green-dark);
  color: var(--color-green-light);
  display: grid;
  grid-template-columns:
    1fr
    1fr;
  font-size: var(--font-l);
  font-weight: bold;
}
.letter-count .letter {
  color: var(--color-lighter);
  text-align: right;
  margin-right: var(--space-s);
}
.letter-count .amount {
  margin-left: var(--space-s);
}

.letter-count .content {
  text-align: center;
}

/* EP-CHAR-ORIGINS */

.ep-char-origins .card {
  background-color: var(--color-green-lighter);
  color: var(--color-green-dark);
}

.ep-char-origins .card .header {
  background-color: var(--color-green-light);
}
.ep-char-origins .episode-title {
  font-weight: bold;
}
.ep-char-origins .episode-number {
  font-size: var(--font-s);
}
.ep-char-origins .location-amount {
  border-radius: 1rem;
  background-color: var(--color-green-lighter);
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
}
.ep-char-origins .card ul {
  display: flex;
  flex-wrap: wrap;
}
.ep-char-origins .card li {
  list-style: none;
  display: block;
  margin-right: var(--space-s);
}
.ep-char-origins .card li:last-child {
  margin-right: 0;
}
</style>
