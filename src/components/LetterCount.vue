<template>
  <section class="card">
    <div class="header">
      <div class="letter">{{ letter }}</div>
      <div class="amount">{{ amount }}</div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default {
  props: {
    letter: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  setup() {},
};
</script>
