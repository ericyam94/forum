<template>
  <v-btn v-bind="$attrs" v-on="$listeners">
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
