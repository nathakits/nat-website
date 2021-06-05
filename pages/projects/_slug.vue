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
              span.date {{ formatDate(page.date) }}
              //- todo: link back to projects with plugin filter
              nuxt-link(to="/projects/")
                span.text-blue-500 {{ capitalize(page.tag) }}
          div.flex-initial
            a(:href="page.link" target="_blank" rel="noopener noreferrer")
              div.rounded-md.bg-blue-400
                div.flex.items-center.justify-center.px-2.py-1.text-sm.font-bold.text-gray-800
                  | {{ actionText(page.tag) }}
        div.border-b.pt-6
    div.container.mx-auto
      div.px-10(
        class="sm:px-16 md:px-24 lg:px-40 xl:px-60"
      )
        img.object-cover.w-full.h-auto.rounded(
          loading="lazy"
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
    div.container.mx-auto.flex.justify-between.items-center(
      class="sm:px-16 md:px-24 lg:px-60 xl:px-80"
    )
      nuxt-link(to="/projects/")
        div.rounded-md.bg-blue-200.w-min
          div.flex.items-center.justify-center.px-4.py-2.text-sm.font-bold.text-gray-800
            | Back
      div
        | Updated at {{ formatDate(page.updatedAt) }}
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content("projects", params.slug).fetch();
    return { page };
  },
  methods: {
    capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    },
    formatDate(date) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      const d = new Date(date).toLocaleString("en-US", options);
      return d;
    },
    actionText(tag) {
      switch (tag) {
        case "plugin":
          return `Install in Figma`;
        case "bot":
          return `Website`;
        default:
          break;
      }
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

.line-numbers,
video {
  border-radius: 8px;
}

.nuxt-content h2:hover > a:before,
.nuxt-content h3:hover > a:before {
  opacity: 1;
}

.nuxt-content h2 > a:before,
.nuxt-content h3 > a:before {
  content: "#";
  --text-opacity: 1;
  color: #00cd81;
  color: rgba(0, 205, 129, var(--text-opacity));
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.75rem;
  line-height: 2rem;
  margin-left: -1.25rem;
  padding-right: 0.5rem;
  position: absolute;
  opacity: 1;
}

@media (min-width: 1024px) {
  .nuxt-content h2 > a:before,
  .nuxt-content h3 > a:before {
    opacity: 0;
  }
}

.nuxt-content-highlight {
  @apply pb-3;
}

article {
  h2 {
    @apply text-3xl;
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
    @apply pb-4;
  }
  p {
    @apply pb-4;
  }
  a {
    @apply text-blue-600;
  }
  ul {
    @apply pb-5;
  }
  p + h4,
  p + h3,
  figure + h3,
  figure + p {
    @apply pt-5;
  }
  p + h2,
  ul + h2,
  figure + h2 {
    @apply pt-6;
  }
  video + p,
  .nuxt-content-highlight + p {
    @apply pt-4;
  }
}

ul {
  @apply list-inside;
  @apply list-disc;
}

figure {
  @apply py-4;
}

video {
  @apply my-4;
}
</style>
