<template>
  <div>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>

<style>
page-enter-active,
.page-leave-active {
  transition: all 0.2s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}
</style>
