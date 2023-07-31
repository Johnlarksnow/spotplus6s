<template>
  <main class="bg-green-100 dark:text-white text-gray-900 font-inter min-h-screen dark:bg-[#050505]">
    <NuxtLoadingIndicator v-if="loading" />
    <NuxtLayout class="h-full">
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>

<script setup lang="ts">
import { defineComponent, watch, ref } from 'vue'
const nuxtApp = useNuxtApp()
const loading = ref(false)

addRouteMiddleware('global-loader', () => {
  loading.value = true
}, {
  global: true,
})

nuxtApp.hook('page:finish', () => {
  loading.value = false
})
</script>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  head() {
    return {
      title: 'Your App Title', // Set your desired title here
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'description', name: 'description', content: 'Your app description' },
        { hid: 'og:title', property: 'og:title', content: 'Open Graph Title' }, // Open Graph Title (for social media)
        { hid: 'og:description', property: 'og:description', content: 'Open Graph Description' }, // Open Graph Description (for social media)
        { hid: 'og:image', property: 'og:image', content: 'https://your-app-url.com/icon.png' }, // Open Graph Image (for social media)
        { name: 'twitter:card', content: 'summary_large_image' }, // Twitter card type (for social media)
        { name: 'twitter:title', content: 'Twitter Title' }, // Twitter Title (for social media)
        { name: 'twitter:description', content: 'Twitter Description' }, // Twitter Description (for social media)
        { name: 'twitter:image', content: 'https://your-app-url.com/icon.png' }, // Twitter Image (for social media)
        // Add any other meta tags you need
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: 'https://your-app-url.com/icon.png' }, // Set your app icon URL here
        // Add any other link tags you need
      ],
    }
  },
});
</script>




<style>
html {
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
