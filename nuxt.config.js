export default {
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
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Inter&display=swap"
      }
    ]
  },
  loading: {
    color: "#fff"
  },
  pageTransition: {
    name: "page",
    mode: "out-in"
  },
  css: [],
  components: true,
  plugins: [
    {
      src: "~plugins/ga.js",
      mode: "client"
    }
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  modules: ["@nuxtjs/pwa", "@nuxt/content"],
  content: {
    apiPrefix: "api"
  },
  hooks: {
    "content:file:beforeInsert": document => {
      if (document.extension === ".md") {
        document.body = document.text;
      }
    }
  },
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
