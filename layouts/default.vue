<template>
  <div>
    <Header></Header>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
page-enter-active,
.page-leave-active {
  transition: all 300ms ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
