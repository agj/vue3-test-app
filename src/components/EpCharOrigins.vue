<template>
  <section class="card">
    <div class="header">
      <div class="location-amount">{{ origins?.length }}</div>
      <div class="episode-title">{{ episodeTitle }}</div>
      <div class="episode-number">{{ episodeNumber }}</div>
    </div>
    <div class="content">
      <ul class="locations">
        <li v-for="origin in origins">{{ origin }}</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  props: {
    episodeTitle: {
      type: String,
      required: true,
    },
    episodeNumber: {
      type: String,
      required: true,
    },
    origins: {
      type: Array,
      required: true,
    },
  },
};
</script>
