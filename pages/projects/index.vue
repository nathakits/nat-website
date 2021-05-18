<template lang="pug">
  div
    div.pt-6.bg-gray-200
      div.container.mx-auto
        div.p-10
          h1.text-4xl Projects
    //- tab filter
    div.container.mx-auto
      div.px-10.py-6
        div.tab.flex.space-x-4.pb-2.text-sm
          div.flex.items-center.justify-center.p-2 All Projects
          //- div.flex.items-center.justify-center.p-2.cursor-pointer.rounded-md.select-none(
          //-   class=""
          //- ) Plugins
          //- div.flex.items-center.justify-center.p-2.cursor-pointer.rounded-md.select-none(
          //-   class="hover:bg-gray-200"
          //- ) Experiments
        div.border-b
    //- projects
    div.container.mx-auto
      div.px-10.pb-10.pt-2.grid.grid-cols-2.gap-8
        template(v-for="post in projects")
          div
            nuxt-link.cursor-pointer(:to="post.slug")
              img.object-cover.w-full.h-auto.rounded(
                :src="require(`~/assets/images/projects/${post.hero_img}`)"
              )
            h2.font-bold.text-lg.pt-3 {{ post.title }}
            p.text-sm.pb-2 {{ post.subtitle }}
            //- p.text-sm.pb-2 {{ post.date }}
            div.rounded-md.bg-gray-200.w-min
              div.flex.items-center.justify-center.px-2.py-1.text-sm
                | {{ capitalize(post.tag) }}
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content("projects", params.slug)
      .only(["title", "subtitle", "hero_img", "slug", "link", "tag", "date"])
      .sortBy("date", "desc")
      .fetch();
    return {
      projects
    };
  },
  methods: {
    capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }
  }
};
</script>
