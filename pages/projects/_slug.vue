<template lang="pug">
  div
    div.pt-6.container.mx-auto
      div.py-10.px-10(
        class="sm:px-16 md:px-24 lg:px-40 xl:px-60"
      )
        div.flex.justify-between.items-center
          div.flex-initial
            h1.text-4xl.pb-2.font-bold {{ page.title }}
            p.text-md.pb-2 {{ page.subtitle }}
            div.text-sm
              span.date {{ formatDate }}
              //- todo: link back to projects with plugin filter
              nuxt-link(to="/projects/")
                span.text-blue-500 {{ capitalize(page.tag) }}
          div.flex-initial
            a(href="https://www.figma.com/community/plugin/963138214942646066/QR-Coder" target="_blank" rel="noopener noreferrer")
              div.rounded-md.bg-blue-400
                div.flex.items-center.justify-center.px-2.py-1.text-sm.font-bold.text-gray-800
                  | Install in Figma
        div.border-b.pt-6
    div.container.mx-auto
      div.px-10(
        class="sm:px-16 md:px-24 lg:px-40 xl:px-60"
      )
        img.object-cover.w-full.h-auto.rounded(
          :src="require(`~/assets/images/projects/${page.hero_img}`)"
        )
    div.container.mx-auto
      div.py-10.px-10(
        class="sm:px-16 md:px-24 lg:px-60 xl:px-80"
      )
        article.pt-6.px-0(
          class="2xl:px-10"
        )
          nuxt-content(:document="page")
    div.container.mx-auto.flex.justify-center.items-center
      nuxt-link(to="/projects/")
        div.rounded-md.bg-blue-200.w-min
          div.flex.items-center.justify-center.px-4.py-2.text-sm.font-bold.text-gray-800
            | Back
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content("projects", params.slug).fetch();
    return { page };
  },
  computed: {
    formatDate() {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      const d = new Date(this.page.date).toLocaleString("en-US", options);
      return d;
    }
  },
  methods: {
    capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  }
};
</script>

<style lang="scss" scoped>
.date::after {
  font-size: 14px;
  content: "•";
  margin: 0 5px;
  color: #5f6368;
}

article {
  h2 {
    @apply text-2xl;
    @apply font-bold;
    @apply pb-6;
  }
  h3 {
    @apply text-xl;
    @apply font-bold;
    @apply pb-4;
  }
  h4 {
    @apply font-bold;
    @apply pb-3;
  }
  p {
    @apply pb-3;
  }
  a {
    @apply text-blue-600;
  }
  ul {
    @apply pb-4;
  }
  p + h4,
  p + h3,
  p + h2 {
    @apply pt-3;
  }
}

ul {
  @apply list-inside;
  @apply list-disc;
}
</style>
