<template>
  <article class="container">
    <h1>Hechos inútiles sobre <b>Rick and Morty</b></h1>
    <section class="box">
      <div class="description">
        ¿Cuántas veces se repiten letras en nombres?
      </div>
      <div class="items">
        <div class="card">L en lugares</div>
        <div class="card">E en episodios</div>
        <div class="card">C en personajes</div>
      </div>
    </section>
    <section class="ep-char-origins box">
      <div class="description">
        ¿De dónde vienen los personajes que aparecen en cada capítulo?
      </div>
      <div class="items">
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

export default defineComponent({
  name: "App",
  components: {},
});
</script>

<style>
:root {
  --color-back: hsl(0, 0%, 95%);
  --color-box: hsl(0, 0%, 98%);
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
  background-color: var(--color-back);
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

.container {
  font-family: Helvetica, Arial, sans-serif;
  max-width: 50rem;
  padding: var(--space-m);
  margin: 0 auto;
}
.box {
  padding: 1rem;
  margin: var(--space-m) 0;
  background-color: var(--color-box);
}
.box .description {
  padding-bottom: var(--space-m);
  font-size: var(--font-l);
}
.box .items {
  display: grid;
  grid-template-columns:
    1fr
    1fr
    1fr
    1fr;
  gap: var(--space-xs);
}

.card .header {
  padding: var(--space-s) var(--space-s) var(--space-xs) var(--space-s);
}
.card .content {
  padding: var(--space-s);
}

/* EP-CHAR-ORIGINS */

.ep-char-origins .card {
  --color-dark: var(--color-green-dark);
  background-color: var(--color-green-lighter);
  color: var(--color-dark);
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
