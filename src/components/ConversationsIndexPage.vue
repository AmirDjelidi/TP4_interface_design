<template>
  <div>
    <h1>Liste des conversations</h1>
    <p>Veuillez entrer l'ID d'une conversation pour y accéder :</p>
    <input v-model="conversationId" type="text" placeholder="Entrez l'ID de la conversation" />
    <button @click="goToConversation">Aller à la conversation</button>
  </div>
</template>

<script>
export default {
  name: 'ConversationsIndexPage',
  data() {
    return {
      conversationId: ''
    };
  },
  methods: {
    goToConversation() {

      if (this.conversationId) {

        this.$router.push(`/conversations/${this.conversationId}`);
      } else {
        alert("Veuillez entrer un ID de conversation.");
      }
    }
  }
};
</script>

<style scoped>

</style>
