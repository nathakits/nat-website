<template lang="pug">
div.grid.column.justifyContent-center.alignItems-center.container
  h1(v-if="error.statusCode === 404") 404 not found
  nuxt-link(to="/")
    h2 Homepage
</template>

<script>
export default {
  props: ['error'],
  layout: 'empty'
}
</script>

<style lang="stylus" scoped>
.container
  width 100%
  height 100vh
  background-color #333
  
  h1, a
    color white

h2 
  padding-bottom 5px 

a
  border-bottom 1px solid white

</style>