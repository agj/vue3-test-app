<template>
  <article class="container">
    <h1>Hechos inútiles sobre Rick &amp; Morty</h1>
    <section class="box">
      <h2>Cuántas veces se repite una letra en el nombre de…</h2>
      <div class="card">L en lugares</div>
      <div class="card">E en episodios</div>
      <div class="card">C en personajes</div>
    </section>
    <section class="box">
      <p>
        Para cada capítulo, una lista con el origen de todos los personajes que
        aparecen en ese capítulo.
      </p>
      <section class="card">
        <h3>S01E01 Pilot</h3>
        <ul>
          <li>Earth</li>
          <li>Mars</li>
          <li>Jupiter</li>
        </ul>
      </section>
      <section class="card">
        <h3>S01E01 Pilot</h3>
        <ul>
          <li>Earth</li>
          <li>Mars</li>
          <li>Jupiter</li>
        </ul>
      </section>
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
  --color-back: hsl(43, 100%, 61.5%);
  --color-border: hsl(42.8, 64.2%, 50.6%);
  font-size: 14pt;
}
html,
body {
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
}
.container {
  font-family: Helvetica, Arial, sans-serif;
  max-width: 50rem;
  padding: 1rem;
  margin: 0 auto;
}
.box {
  padding: 1rem;
  margin: 1rem 0;
  background-color: var(--color-back);
  border-width: 5px;
  border-color: var(--color-border);
  border-style: solid;
}
</style>
