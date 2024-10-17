<template>
  <BaseButton
      :isDisabled="isPending"
      :color="color"
      @click="handleClick"
  >
    <span v-if="isPending">Loading...</span>
    <slot v-else></slot>
  </BaseButton>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  name: 'AsyncButton',
  components: { BaseButton },
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    delay: {
      type: Number,
      default: 1 // Délai par défaut de 1 seconde
    }
  },
  data() {
    return {
      isPending: false // Gère l'état de chargement
    };
  },
  methods: {
    handleClick() {
      if (!this.isPending) { // Empêche le clic si déjà en attente
        this.isPending = true; // Active l'état de chargement
        console.log(`Attente de ${this.delay} secondes...`);

        // Simule une action asynchrone avec un délai variable
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, this.delay * 1000); // Utilise la prop delay pour définir le délai en millisecondes
        }).finally(() => {
          this.isPending = false; // Réactive le bouton après le délai
          console.log("Chargement terminé");
        });
      }
    }
  }
};
</script>
