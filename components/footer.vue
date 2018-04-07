<template lang='pug'>
footer
	div.grid.justifyContent-between.footer-container.alignItems-center.icon-container
		div.grid.alignItems-center
			h2 Copyright
			i.material-icons copyright

		div
			a.grid.alignItems-center(href="mailto:nat@pupil-labs.com" title="Email")
				i.material-icons email
				h3.email nat@pupil-labs.com

		div.grid.alignItems-center.icon-container

			a(href="https://github.com/nathakits" title="Github")
				img.icon(src="~/assets/icons/github.svg")

			a(href="https://www.linkedin.com/in/nathakit-saetan-b4ab8379/" title="Linkedin")
				img.icon(src="~/assets/icons/linkedin.svg")

			a(href="https://www.pinterest.com/nathakit/" title="Pinterest")
				img.icon(src="~/assets/icons/pinterest.svg")

			a(href="https://twitter.com/nathakit_tan" title="Twitter")
				img.icon(src="~/assets/icons/twitter.svg")

			a(href="https://www.facebook.com/moonkkin/" title="Facebook")
				img.icon(src="~/assets/icons/facebook.svg")

		div
			div(title="UTC+7").grid.alignItems-center
				h2 Currently in 
				i.material-icons wb_sunny
				a(href="https://time.is/UTC+7").underline
					h2 Bangkok	
</template>
