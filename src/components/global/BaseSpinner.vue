<template>

    <div class="base-spinner" v-if="visible">
<div class="spinner-border text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  },
  created () {
    this.$root.$on('Spinner::show', () => { this.visible = true })
    this.$root.$on('Spinner::hide', () => { this.visible = false })
  }
}
</script>

<style scoped>

.base-spinner {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: darkorange;
    background: blue;
    z-index: 10000;
    opacity: 50%;
}
</style>