
<template>
  <BaseLayout>
    <template #main>
      <HomePage />
    </template>
  </BaseLayout>
</template>


<script>
import HomePage from './pages/HomePage.vue';
import BaseLayout from "@/components/BaseLayout.vue";


export default {
  name: 'App',
  components: {
    BaseLayout, HomePage
  },
}
</script>

<style>
/* Add your styles here */
</style>
