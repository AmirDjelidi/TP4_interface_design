<template>
  <div>
    <h1>Détails de la conversation</h1>
    <p>ID de la conversation : {{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'ConversationShowPage',
  props: ['id'],
};
</script>



<style scoped>

</style>