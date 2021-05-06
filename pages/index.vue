<template lang="pug">
div
  div.bg-gray-200
    div.container.mx-auto.h-full
      div.p-10.flex.flex-col.justify-between.h-full
        div(class="sm:h-full sm:pb-0 md:pb-8 sm:pt-0").h-full.pt-4
          div.grid.grid-rows-3.gap-4.h-full(class="sm:grid-cols-none md:grid-cols-8 sm:grid-rows-3")
            div.row-span-1.col-span-4
              h1.text-5xl.font-bold.pb-2(class="sm:text-4xl") Product designer
              h2.text-2xl.font-bold.pb-4.text-gray-700
                div Crafting rich interfaces and experiences
                div And helping the environment
              div.text-sm
                p.text-gray-600 Currently @ Pupil Labs 🕶
                p.text-gray-600 Front-end developer 💻
                p.text-gray-600 Environmentalist 🌏
                p.text-gray-600 Rescue Diver 🌊
            div.row-span-2.col-span-4.block
            //-   div.bg-cover.bg-center.w-full.h-full.rounded.shadow-2xl(style="background-image: url('https://tailwindcss.com/img/card-top.jpg');")
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
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data() {
    return {
      socialLinks: [
        { name: "Twitter", path: "https://twitter.com/nathakit_tan" },
        { name: "Github", path: "https://github.com/nathakits" },
        {
          name: "LinkedIn",
          path: "https://linkedin.com/in/nathakit-sae-tan-b4ab8379/"
        }
      ]
    };
  },
  mounted() {
    console.log(
      "%c Designed and made by Nathakit Sae-Tan ",
      "background: #222; color: #fff; font-size: 15px; font-family: 'Inter'. sans-serif"
    );
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
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
</style>
