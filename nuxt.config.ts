// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', "nuxt-viewport"],
  css: [
    "~/assets/scss/main.scss"
  ],


  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/base/_variables.scss" as *;
          `,
        },
      },
    },
  },

  // viewport: {
  //   breakpoints: {
  //     desktop: 1024,
  //     tablet: 768,
  //   }
  // }
})