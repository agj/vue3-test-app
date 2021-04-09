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
