<template>
  <section class="card">
    <div class="header">
      <div class="letter">{{ data?.letter ?? "…" }}</div>
      <div class="amount">{{ data?.amount ?? "…" }}</div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { LetterCountData as Data } from "./types";

export default {
  props: {
    data: {
      type: Object as () => Data,
    },
  },
};
</script>

<style>
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
</style>
