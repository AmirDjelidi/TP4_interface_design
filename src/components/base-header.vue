<script>

export default {
  name: 'base-header',
}
</script>

<template>
  <nav>
    <div class="menu-item"><a href="#">Home</a> </div>
    <div class="menu-item"><a href="#">I'm Yu</a> </div>
    <div class="menu-item"><a href="#">He's me</a> </div>
    <div class="menu-item"><a href="#">Don't contact me</a> </div>
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