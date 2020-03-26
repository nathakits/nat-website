<template lang="pug">
  div
    div.bg-gray-200.h-screen
      div.container.mx-auto.h-full
        div.p-10.flex.flex-col.justify-between.h-full
          div
            div.grid.gap-4.h-full.grid-cols-2
              h1.text-3xl.font-bold Nat.
              div.grid-cols-4.gap-4.hidden(class="sm:pt-2 sm:grid")
                div.col-span-1(
                  class="md:pt-0 sm:text-left md:text-right"
                  v-for="link in headLinks"
                  :key="link.name"
                )
                  nuxt-link(class="hover:underline hover:text-blue-500" :to="link.path") {{ link.name }}
              div.flex.items-center.justify-end(class="sm:pt-2 sm:hidden")
                button.rounded-md.p-2.text-gray-500(class="hover:text-gray-700 hover:bg-gray-400 focus:outline-none")
                  svg.h-6.w-6(stroke="currentColor" fill="none" viewBox="0 0 24 24")
                    path(class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")
                    path(class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12")

          div(class="sm:h-full sm:pb-0 md:pb-8").calc-height
            div.grid.grid-rows-3.gap-4.h-full(class="sm:grid-cols-none md:grid-cols-8")
              div.row-span-1.col-span-4
                p Nathakit Sae-Tan
                h1.text-4xl.font-bold Product designer
                h1.text-4xl.font-bold.pb-2 Developer
                p.text-xs.text-gray-500 Currently @ Pupil Labs
              div.row-span-3.col-span-4
                div.bg-cover.bg-center.w-full.h-full.rounded.shadow-2xl(style="background-image: url('https://tailwindcss.com/img/card-top.jpg');")
              div.col-span-4(class="sm:row-span-1 md:row-span-2")
                div.flex.justify-end.flex-col.h-full
                  div.py-4
                    p.font-bold Social
                  div.grid.grid-cols-3.gap-4(class="sm:grid-cols-4")
                    div.col-span-1(
                      v-for="link in socialLinks"
                      :key="link.name"
                    )
                      a(
                        class="hover:underline hover:text-blue-500"
                        :href="link.path"
                        target="_blank"
                        rel="noopener noreferrer"
                      ) {{ link.name }}

    //- div.container.mx-auto
    //-   div.div.pt-6

</template>

<script>
import Logo from "~/components/Logo.vue";

console.log(
  "%c Designed and made by Nathakit Sae-Tan ",
  "background: #222; color: #fff; font-size: 15px; font-family: 'Inter'. sans-serif"
);

export default {
  components: {
    Logo
  },
  data() {
    return {
      headLinks: [
        { name: "Projects", path: "/projects/" },
        { name: "Photo", path: "/photo/" },
        { name: "Blog", path: "/blog/" },
        { name: "Info", path: "/info/" }
      ],
      socialLinks: [
        { name: "Twitter", path: "https://twitter.com/nathakit_tan" },
        { name: "Github", path: "https://github.com/nathakits" },
        {
          name: "LinkedIn",
          path: "https://linkedin.com/in/nathakit-sae-tan-b4ab8379/"
        }
      ]
    };
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.calc-height {
  height: 80%;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@media (max-width: 639px) {
  .calc-height {
    height: 85%;
  }
}
</style>
