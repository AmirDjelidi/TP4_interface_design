
<template>
  <BaseLayout>
    <template #main>
      <HomePage/>
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
  data() {
    return {
      user: null  // Stocke l'utilisateur ici
    };
  }
}
</script>

<style>
/* Add your styles here */
</style>
