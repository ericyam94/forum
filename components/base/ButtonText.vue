<template>
  <span v-bind="$attrs" v-on="$listeners" class="button-text mx-1 text-none">
    <slot></slot>
  </span>
</template>

<script>
export default {}
</script>

<style scoped>
.button-text {
  cursor: pointer;
}

.button-text:hover {
  text-decoration: underline;
}
</style>
