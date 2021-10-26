export default {
  target: "static",
  head: {
    title: "Nathakit Sae-Tan",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Nathakit Sae-Tan's personal website"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
      }
    ]
  },
  css: [],
  components: true,
  plugins: [
    {
      src: "~plugins/ga.js",
      mode: "client"
    },
    "~/plugins/medium-zoom"
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    // Doc: https://image.nuxtjs.org/
    "@nuxt/image"
  ],
  modules: ["@nuxtjs/pwa", "@nuxt/content"],
  content: {
    apiPrefix: "api",
    liveEdit: false,
    markdown: {
      prism: {
        theme: "prism-themes/themes/prism-night-owl.css"
      }
    }
  },
  // image: {
  //   // Generate images to `/_nuxt/image/file.png`
  //   staticFilename: "[publicPath]/images/[name]-[hash][ext]"
  // },
  build: {
    filenames: {
      font: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "fonts/[name].[hash:7].[ext]",
      video: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "videos/[name].[hash:7].[ext]"
    },
    quiet: false,
    babel: {
      plugins: [
        [
          "@babel/plugin-proposal-private-methods",
          {
            loose: true
          }
        ]
      ]
    }
    /*
     ** You can extend webpack config here
     */
    // extend() { }
  }
};
