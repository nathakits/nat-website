<template lang="pug">
  div.container.mx-auto.h-full
    article.pt-6
      h1 {{ page.title }}
      nuxt-content(:document="page")
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content("projects", params.slug).fetch();

    return { page };
  }
};
</script>
