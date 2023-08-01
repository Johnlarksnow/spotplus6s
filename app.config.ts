export default defineAppConfig({
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
  name: 'Spotigrade',
  description: 'Upgrade your spotify with on-the-go.',
  social: {
    discord: 'https://discord.gg/upgrade',
    twitter: 'https://twitter.com/upgrade',
  },
})
