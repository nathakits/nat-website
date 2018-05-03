<template lang='pug'>

main(id='home')
	div.bg-image
		figure
			no-ssr
				//- TODO
				//- update background image with new render
				//- remove rings and change sky color
				div.bg-full-wh
					progressive-background(:src="require('~/assets/imgs/bucky_lv220.jpg')")

		div.bg-content-container
			div.grid.column.bold
				h1 Designer 
				h1 Coder
				h1 Entrepreneur
			div.grid.column.intro-container.bold
				h1  Currently at
					a(
						href="https://pupil-labs.com"
						title=" Accessible open source eye tracking platform"
						)
						|	pupil labs

</template>

<script>
	console.log('%c Designed and made by Nathakit Sae-Tan ', 'background: #222; color: #fff; font-size: 15px;')
</script>