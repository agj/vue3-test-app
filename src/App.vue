<template>
  <article class="container">
    <h1>Hechos inútiles sobre Rick &amp; Morty</h1>
    <section class="box">
      <div class="description">
        Cuántas veces se repite una letra en el nombre de…
      </div>
      <div class="items">
        <div class="card">L en lugares</div>
        <div class="card">E en episodios</div>
        <div class="card">C en personajes</div>
      </div>
    </section>
    <section class="ep-char-origins box">
      <div class="description">
        Para cada capítulo, una lista con el origen de todos los personajes que
        aparecen en ese capítulo.
      </div>
      <div class="items">
        <section class="card">
          <div class="header">
            <div class="title">Pilot</div>
            <div class="number">T01E01</div>
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
            <div class="title">Pilot</div>
            <div class="number">T01E01</div>
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
            <div class="title">Pilot</div>
            <div class="number">T01E01</div>
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
            <div class="title">Pilot</div>
            <div class="number">T01E01</div>
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
            <div class="title">Pilot</div>
            <div class="number">T01E01</div>
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
            <div class="title">Pilot</div>
            <div class="number">T01E01</div>
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
            <div class="title">Pilot</div>
            <div class="number">T01E01</div>
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
            <div class="title">Pilot</div>
            <div class="number">T01E01</div>
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
            <div class="title">Pilot</div>
            <div class="number">T01E01</div>
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
  --color-back: hsl(0, 0%, 91.3%);
  --color-box: hsl(0, 0%, 94.8%);
  --space-l: 1.7rem;
  --space-m: 1rem;
  --space-s: 0.5rem;
  --space-xs: 0.2rem;
  --thickness-s: 0.01rem;
  --font-l: 22pt;
  --font-m: 14pt;
  --font-s: 10pt;

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
  font-size: var(--font-l);
  margin: 0;
  padding: 0;
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
.items {
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
  --color-dark: hsl(126.4, 9.6%, 42.3%);
  background-color: hsl(126.3, 72.7%, 88.3%);
  color: var(--color-dark);
}
.ep-char-origins .card .header {
  background-color: hsl(126.4, 49.3%, 83.7%);
}
.ep-char-origins .title {
  font-weight: bold;
}
.ep-char-origins .number {
  font-size: var(--font-s);
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
