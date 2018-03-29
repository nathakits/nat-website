<template lang='pug'>
div(id='home')

	div(style="position:absolute;z-index:10;")
		h1 NST
		<p></br></p>
		<p>I am a designer, coder, and entrepeneur.</p>
		<p></br></p>
		<p>I am a designer at <a href="https://pupil-labs.com">Pupil Labs</a>.</p>
		<p></br></p>
		<p>I am currently <a href="https://time.is/UTC+7">UTC+7</a>.</p><p>(Bangkok, Thailand).</p>
		<p></br></p>
		<p><a href="https://github.com/nathakits">Github</a> <a href="https://www.linkedin.com/in/nathakit-saetan-b4ab8379/">Linkedin</a> <a href="mailto:nat@pupil-labs.com">Email</a> <a href="https://www.facebook.com/moonkkin/">Facebook</a> </p>

	div.bg-image
		no-ssr
			progressive-background(:src="require('~/assets/imgs/bucky_lv220.jpg')")
</template>