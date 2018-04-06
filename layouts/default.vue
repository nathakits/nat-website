<template lang="pug">
  div
    //- add navbar
    my-header
    <nuxt/>
    my-footer
</template>

<script>
import MyFooter from '~/components/footer.vue'
import MyHeader from '~/components/header.vue'

export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>