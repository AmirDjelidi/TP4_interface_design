
<template>
  <BaseLayout>
    <template #main>
      <HomePage :user="user" @user-signed-in="setUser"/>
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
  },
  methods: {
    setUser(user) {
      this.user = user;  // Met à jour l'utilisateur avec les informations reçues
    }
  }
}
</script>

<style>
/* Add your styles here */
</style>
