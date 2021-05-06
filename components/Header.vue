<template lang="pug">
  div.bg-gray-200
    div.container.mx-auto.h-full
      div.px-10.py-6
        div.grid.gap-4.h-full.grid-cols-2
          div
            nuxt-link(to="/")
              h1.text-3xl.font-bold.inline-block Nat.
          div.d-flex.justify-end.text-right(class="sm:pt-2")
            nuxt-link(
              v-for="(link, index) in headLinks"
              :key="link.name"
              class="hover:underline hover:text-blue-500"
              :class="headLinks.length !== (index + 1) ? 'pr-6' : ''"
              :to="link.path"
            ) {{ link.name }}
          //- div.flex.items-center.justify-end(class="sm:pt-2 sm:hidden")
          //-   button.rounded-md.p-2.text-gray-500(class="hover:text-gray-700 hover:bg-gray-400 focus:outline-none")
          //-     svg.h-6.w-6(stroke="currentColor" fill="none" viewBox="0 0 24 24")
          //-       path(class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")
          //-       path(class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")

</template>

<script>
export default {
  data() {
    return {
      headLinks: [
        // { name: "Projects", path: "/projects/" },
        // { name: "Photo", path: "/photo/" },
        // { name: "Blog", path: "/blog/" },
        { name: "Info", path: "/info/" },
        { name: "CV", path: "/cv/" }
      ]
    };
  }
};
</script>
