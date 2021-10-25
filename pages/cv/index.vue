<template lang="pug">

div
  div.container.mx-auto
    div.pt-6
      div.p-10
        div.flex.justify-between.items-center.pb-10
          h1.text-4xl CV
          div
            nuxt-link.flex.items-center.text-green-500(
              class="hover:text-blue-500"
              to="/"
            )
              i.material-icons.mr-4 arrow_back
              span.text-sm(class="hover:underline") Back home
        div.pb-8(id="sumamry")
          h2.font-bold.text-2xl.pb-4 Summary
          div
            p
              | I'm a Product Designer @ Pupil Labs.
            p
              | Crafting interfaces and user experiences for eye tracking.
            p
              | I come from an architectural design background with an emphasis on complex problem solving in different scales.
            p
              | Skills: Product design, Motion graphics, UI/UX, Front-End development
            p
              | Tech Stack: Javascript / Vue.js / Node.js
        div.pb-8(id="experience")
          h2.font-bold.text-2xl.pb-4 Experience
          div.pb-4
            p.font-bold Product Designer
            a.text-blue-500(
              href="https://pupil-labs.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline"
            )
              | Pupil Labs GmbH
            p.pb-2 2018-Present
            ul.pb-2.list-inside.list-disc
              li Contributed to overall strategy and decision-making about product direction
              li Helped deliver and refine clear storytelling around product needs and opportunities
              li Worked cross-functionally with product management, engineering, and design peers
              li Created, collaborated, and iterated on flows, prototypes, and high-fidelity visuals
              li Design and ship high quality product improvements
          div.pb-4
            p.font-bold Designer & Developer
            a.text-blue-500(
              href="https://pupil-labs.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline"
            )
              | Pupil Labs GmbH
            p.pb-2 2016-2018
            ul.pb-2.list-inside.list-disc
              li Designer and developer for all of Pupil Labs online and offline content.
              li Contributed to overall strategy and decision-making about product direction
              li Front-end development of Pupil Labs websites using latest web technologies
              li Maintaining Internal and external documentation
              li Created 3D render of Pupil products
              li Created 3D and 2D animations
          div
            p.font-bold Moonkin (Freelance)
            p.pb-2 2016-2019
            ul.pb-2.list-inside.list-disc
              li Front-End Developer
              li UX/UI Design
              li Graphics and motion design
              li 3D Modeling & 2D/3D renders
            a.text-blue-500(
              href="https://www.facebook.com/moonkkin"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:underline"
            )
              | Moonkin FB page
        div.pb-8(id="education")
          h2.font-bold.text-2xl.pb-4 Education
          div.pb-4
            p.font-bold Chulalongkorn University
            p Bachelor of Applied Science - BASc, Architectural Design
            p 2011 – 2015
          div
            p.font-bold British International School, Phuket
            p International Baccalaureate
            p 1999 - 2011

</template>
