export default{
  head: {
    title: 'Spotigrade', 
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Your app description' },
      { hid: 'og:title', property: 'og:title', content: 'Spotigrade | Premium Spotify Accounts' }, // Open Graph Title (for social media)
      { hid: 'og:description', property: 'og:description', content: 'SpotiGrade provides high-quality Spotify upgrades directly to your personal account, adding Lifetime Warranty with Auto-Renewal. Get to enjoy our service with the easy-to-use user interface and our cheap pricing.      ' }, // Open Graph Description (for social media)
      { hid: 'og:image', property: 'og:image', content: 'https://i.imgur.com/uG1AGSR.png' }, // Open Graph Image (for social media)
      { name: 'twitter:card', content: 'summary_large_image' }, // Twitter card type (for social media)
      { name: 'twitter:title', content: 'Twitter Title' }, // Twitter Title (for social media)
      { name: 'twitter:description', content: 'Twitter Description' }, // Twitter Description (for social media)
      { name: 'twitter:image', content: 'https://i.imgur.com/uG1AGSR.png' }, // Twitter Image (for social media)
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'https://i.imgur.com/uG1AGSR.png' }, // Set your app icon URL here
    ],
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-font-loader',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
  ],
  colorMode: {
    classSuffix: '',
    preference: 'dark', // default value of $colorMode.preference
  },
  fontLoader: {
    external: [
      {
        src: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
        family: 'Poppins',
        class: 'font-poppin',
      },
      {
        src: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
        family: 'Inter',
        class: 'font-inter',
      },
    ],
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'in-out',
    },
    layoutTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
};
