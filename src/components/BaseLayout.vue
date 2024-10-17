<script setup>

import BaseHeader from './base-header.vue';
import BaseFooter from './base-footer.vue';
</script>

<template>
  <header>
    <slot name="header"><BaseHeader></BaseHeader></slot>
  </header>
  <main>
    <slot name="main"></slot>
  </main>
  <footer>
    <slot name="footer"><BaseFooter></BaseFooter></slot>
  </footer>
</template>

<style scoped>

</style>