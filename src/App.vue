
<template>
  <BaseLayout>
    <template #main>
      <router-view />
    </template>
  </BaseLayout>
</template>


<script>
import BaseLayout from "@/components/BaseLayout.vue";


export default {
  name: 'App',
  components: {
    BaseLayout
  },
  data() {
    return {
      user: null
    };
  }
}
</script>

<style>
/* Add your styles here */
</style>
