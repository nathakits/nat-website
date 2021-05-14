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
          div.flex.items-center.justify-center.p-2.cursor-pointer.rounded-md.select-none(
            class="hover:bg-gray-200"
          ) All Projects
          div.flex.items-center.justify-center.p-2.cursor-pointer.rounded-md.select-none(
            class="hover:bg-gray-200"
          ) Plugins
          div.flex.items-center.justify-center.p-2.cursor-pointer.rounded-md.select-none(
            class="hover:bg-gray-200"
          ) Experiments
        div.border-b
    //- projects
    div.container.mx-auto
      div.px-10.pb-10.pt-2.grid.grid-cols-2.gap-8
        template(v-for="post in projects")
          div
            img.pb-4.object-cover.w-full.h-auto(
              src="https://via.placeholder.com/720x405"
            )
            h2.font-bold.text-lg {{ post.title }}
            p.text-sm {{ post.subtitle }}
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content("projects", params.slug)
      .only(["title", "subtitle", "img", "slug"])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      projects
    };
  }
};
</script>
