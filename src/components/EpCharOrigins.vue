<template>
  <section class="card">
    <div class="header">
      <div class="location-amount">{{ episode.origins.length }}</div>
      <div class="episode-title">{{ episode.title }}</div>
      <div class="episode-number">
        T{{ episode.number.season }} E{{ episode.number.episode }}
      </div>
    </div>
    <div class="content">
      <ul class="locations">
        <li v-for="origin in episode.origins">{{ origin }}</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { EpisodeWithOrigins } from "./types";

export default {
  props: {
    episode: {
      type: Object as () => EpisodeWithOrigins,
      required: true,
    },
  },
};
</script>

<style>
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
