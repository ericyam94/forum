<template>
  <div>
    <v-btn @click="login" color="primary">Login</v-btn>
  </div>
</template>

<script>
export default {
  layout: 'unauth',
  data() {
    return {}
  },
  methods: {
    login() {
      sessionStorage.setItem('dataStored', 1)
      this.$router.push('/admin/newstory')
    }
  }
}
</script>

<style></style>
