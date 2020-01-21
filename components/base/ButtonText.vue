<template>
  <span
    v-bind="$attrs"
    v-on="$listeners"
    @click="$attrs.to ? $router.push($attrs.to) : null"
    class="button-text text-none"
  >
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
