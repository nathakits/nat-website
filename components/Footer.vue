<template lang="pug">

  div.container.mx-auto.h-full
    div.div.pt-6
      div.p-10
        div.grid.grid-cols-8.gap-4
          div.col-start-1.col-end-3
            p.font-bold.text-gray-800 Copyright
            p.text-gray-700.text-sm © {{ setCurrentYear }} Nathakit Sae-Tan
          div.col-start-4.col-end-6
            p.font-bold.text-gray-800 Contact
            a.text-gray-700.text-sm(
              class="hover:underline hover:text-blue-500"
              href="mailto:nathakit.tan@gmail.com"
              title="email"
            ) nathakit.tan@gmail.com
          div.col-start-7.col-end-9
            p.font-bold.text-gray-800 Currently in
            a.text-gray-700.text-sm(
              class="hover:underline hover:text-blue-500"
              href="https://time.is/UTC+7"
              target="_blank"
              rel="noopener noreferrer"
            ) Bangkok

</template>

<script>
export default {
  computed: {
    setCurrentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>
