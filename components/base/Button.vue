<template>
  <v-btn v-bind="$attrs" v-on="$listeners" class="text-none">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  created() {
    console.log(this.$listeners)
  }
}
</script>

<style scoped></style>
