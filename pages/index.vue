<template lang='pug'>
div(id='home')

	div.container
		div.grid.justifyContent-between.header-container
			a.logo-link(href="/")
				h1.logotype NST
		div.content-container
			div.grid.column.intro-container.bold
				h1 Designer 
				h1 Coder
				h1 Entrepeneur
			div.grid.column.intro-container.bold
				h1 Currently at 
					a(href="https://pupil-labs.com") Pupil Labs


				//- div.grid.column.intro-container.bold
				//- 	h1 I am currently 
				//- 		a(href="https://time.is/UTC+7") UTC+7. Bangkok, Thailand.

				
	div.bg-image
		no-ssr
			progressive-background(:src="require('~/assets/imgs/bucky_lv220.jpg')")

	footer
		div.grid.justifyContent-between.footer-container.alignItems-center.icon-container
			div.grid.alignItems-center
				h2 Copyright
				i.material-icons copyright

			div
				a.grid.alignItems-center(href="mailto:nat@pupil-labs.com")
					i.material-icons email
					h3.email nat@pupil-labs.com

			div.grid.alignItems-center
				a(href="https://github.com/nathakits" title="Github")
					img.icon(src="~/assets/icons/github.svg")
				a(href="https://www.linkedin.com/in/nathakit-saetan-b4ab8379/" title="Linkedin")
					img.icon(src="~/assets/icons/linkedin.svg")

			div
				div(title="UTC+7").grid.alignItems-center
					h2 Made in 
					i.material-icons wb_sunny
					h2 Bangkok
</template>