v<template lang='pug'>
div(id='home')

	div.container
		div.grid.justifyContent-between.header-container
			a.logo-link(href="/")
				h1.logotype(title="Nathakit Sae-Tan") NST
		div.content-container
			div.grid.column.intro-container.bold
				h1 Designer 
				h1 Coder
				h1 Entrepreneur
			div.grid.column.intro-container.bold
				h1 Currently at 
					a(href="https://pupil-labs.com" title=" Accessible open source eye tracking platform").underline Pupil Labs

	div.bg-image(style="filter:brightness(0.9);")
		no-ssr
			//- TODO
			//- update background image with new render
			//- remove rings and change sjy color
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

			div.grid.alignItems-center.icon-container

				a(href="https://www.pinterest.com/nathakit/" title="Pinterest")
					img.icon(src="~/assets/icons/pinterest.svg")

				a(href="https://github.com/nathakits" title="Github")
					img.icon(src="~/assets/icons/github.svg")

				a(href="https://www.linkedin.com/in/nathakit-saetan-b4ab8379/" title="Linkedin")
					img.icon(src="~/assets/icons/linkedin.svg")

				a(href="https://www.facebook.com/moonkkin/" title="Facebook")
					img.icon(src="~/assets/icons/facebook.svg")

			div
				div(title="UTC+7").grid.alignItems-center
					h2 Currently in 
					i.material-icons wb_sunny
					a(href="https://time.is/UTC+7").underline
						h2 Bangkok
</template>

<script>
	console.log('%c Designed and made by Nathakit Sae-Tan ', 'background: #222; color: #fff; font-size: 15px;')
</script>