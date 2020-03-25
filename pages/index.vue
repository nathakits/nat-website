<template lang="pug">
  div
    div.bg-gray-200.h-screen
      div.container.mx-auto.h-full
        div.p-10.flex.flex-col.justify-between.h-full
          div
            div.grid.grid-cols-2.grid-flow-row.gap-4.h-full
              h1.text-3xl.font-bold Nat.
              div.grid.grid-cols-4.gap-4
                div.col-span-1.text-right(
                  v-for="link in headLinks"
                  :key="link"
                )
                  a(href="#" class="hover:underline hover:text-blue-500") {{ link }}
          div.calc-height.pb-8
            div.grid.grid-rows-3.gap-4.h-full(class="sm:grid-cols-none md:grid-cols-8")
              div.row-span-1.col-span-4
                p Nathakit Sae-Tan
                h1.text-4xl.font-bold Product designer
                h1.text-4xl.font-bold Developer
              div.row-span-3.col-span-4
                img.w-full.h-full.rounded.shadow-2xl(
                  src="https://tailwindcss.com/img/card-top.jpg"
                  alt="Sunset in the mountains"
                )
              div.row-span-2.col-span-4
                div.flex.justify-end.flex-col.h-full
                  div.py-4
                    p.font-bold Social
                  div.grid.grid-cols-4.gap-4
                    div.col-span-1(
                      v-for="link in socialLinks"
                      :key="link"
                    )
                      a(href="#" class="hover:underline hover:text-blue-500") {{ link }}

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
      headLinks: ["Projects", "Photo", "Blog", "Info"],
      socialLinks: ["Twitter", "Github", "Dribbble", "LinkedIn"]
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
  height: calc(100vh - 250px);
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
</style>
