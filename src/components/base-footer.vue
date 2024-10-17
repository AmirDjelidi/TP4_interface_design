<script>

export default {
  name: 'base-footer',
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 I'm Yu. Tout les droits sont louable ou achetable en bitcoin.</p>
      <p>
        <a href="#">Donation for a kebab</a> |
        <a href="#">The service is non-refundable under penalty of a ban on discord</a> |
        <a href="#">Don't contact me I said</a>
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer{
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;

  background-color: green;
  justify-content: space-around;
}
.container a{
  color: white;
  text-decoration: none;
}

.container a:hover{
  color: lightgrey;
}

</style>