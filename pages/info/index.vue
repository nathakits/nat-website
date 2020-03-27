<template lang="pug">

  div.container.mx-auto
    div.div.pt-6
      div.p-10
        div.flex.justify-between.items-center.pb-10
          h1.text-4xl Info
          div
            nuxt-link.flex.items-center.text-green-500(
              class="hover:text-blue-500"
              to="/"
            )
              i.material-icons.mr-4 arrow_back
              span.text-sm Back home
        h2.pb-4
          | My creativity and innovation spans multiple platforms.
          | Utilizing many practices and disciplines to create something different and unique.
        h2.pb-4
          | My ethos is driven by my desire to always seek and explore new opportunities, to never stop learning.
          | Continously seeking to utilize my foundation in architecture and design to new mediums.
        h2.pb-4
          | This passion involves with multiple disciplinaries in design, technology and science that informs many types of interests ranging from human computer interaction, hyper realistic graphics and front-end development.
          | The results of these labours often take unexpected forms, be it commercials, title sequences, motion graphics, software, web development and user interface / user experience.

      div.p-10
        div.py-4
          div(id="articles")
            h3.font-bold Articles
            div.info-link-column
              a(
                class="hover:underline hover:text-blue-500"
                href="http://www.evolo.us/competition/return-to-nature-skyscraper/"
                target="_blank"
                rel="noopener noreferrer"
              ) eVolo - Babel Skyscraper
        div.py-4
          div(id="printPublications")
            h3.font-bold Print Publications
            div.info-link-column
              a(
                class="hover:underline hover:text-blue-500"
                href="http://www.evolo.us/magazine/evolo-skyscrapers-3-limited-edition-book/"
                target="_blank"
                rel="noopener noreferrer"
              ) eVolo Skyscrapers 3


</template>
