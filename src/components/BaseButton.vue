<template>
  <button
      :disabled="isDisabled"
  :style="buttonStyles"
  @click="handleClick"
  @mouseover="isHovered = true"
  @mouseleave="isHovered = false"
  >
  <slot></slot>
  </button>
</template>

<script>
const colorPalette = {
  primary: { bg: '#42b983', hoverBg: '#4cce93', focusBorder: '#47d696' },
  warn: { bg: '#ff5722', hoverBg: '#ff7043', focusBorder: '#ff8a65' },
  danger: { bg: '#e53935', hoverBg: '#ef5350', focusBorder: '#e57373' }
};

export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    isDisabled: {  // Prop pour désactiver le bouton
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isHovered: false
    };
  },
  computed: {
    buttonStyles() {
      const palette = colorPalette[this.color];
      return {
        backgroundColor: this.isHovered ? palette.hoverBg : palette.bg,
        color: 'white',
        border: `2px solid ${palette.focusBorder}`,
        borderRadius: '25px',
        width: '150px',
        height: '50px',
        cursor: this.isDisabled ? 'not-allowed' : 'pointer',
        opacity: this.isDisabled ? 0.6 : 1,
        transition: 'all 0.3s ease'
      };
    }
  },
  methods: {
    handleClick() {
      if (!this.isDisabled) {
        
        console.log("BaseButton clicked");
      }
    }
  }
};
</script>
