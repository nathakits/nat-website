<template lang="pug">
div.container
    h1(v-if="error.statusCode === 404") Page not found
    nuxt-link(to="/").underline Homepage
</template>

<script>
export default {
  props: ['error'],
  layout: 'error'
}
</script>

<style scoped>
.container {
  padding-top: 10%;
  text-align: center;
}
h1 {
  font-size: 20px;
}
</style>