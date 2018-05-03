<template lang="pug">

header.grid.justifyContent-between.header-container.alignItems-center
	nuxt-link.logo-link(to="/")
		h1.logotype(title="Nathakit Sae-Tan") NST

	//- add width to nav-links for multiple links
	div.grid.justifyContent-between.nav-links
		nuxt-link.logo-link(to="/info")
			h4 Info
		//- placeholder
		//- nuxt-link.logo-link(to="/info")
		//- 	h4 Info
		//- nuxt-link.logo-link(to="/info")
		//- 	h4 Info
		//- nuxt-link.logo-link(to="/info")
		//- 	h4 Info

</template>