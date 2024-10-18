<script>

export default {
  name: 'base-header',
}
</script>

<template>
  <nav>
    <router-link to="/">Accueil</router-link> |
    <router-link to="/conversations">Conversations</router-link>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  position: fixed;
  width: 100%;
  height: 30px;
  left: 0;
  top: 0;
  background-color: green;
  justify-content: space-around;

}
nav a{
  color: white;
  text-decoration: none;
}

nav a:hover{
  color: lightgrey;
}

</style>