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
import { useHead } from '@vueuse/head'

const nuxtApp = useNuxtApp()
const loading = ref(false)

// Define your head meta data here
const head = useHead({
  title: 'SpotiGrade | Automated Spotify Upgrade Service',
  meta: [
    {
      name: 'Spotgrade',
      content: 'Spotgrade provides high-quality Spotify upgrades directly to your personal account, adding Lifetime Warranty with Auto-Renewal. Get to enjoy our service with the easy-to-use user interface and our cheap pricing.',
    },
    // ...more meta tags
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'https://i.imgur.com/uG1AGSR.png'
    },
  ],
})

addRouteMiddleware('global-loader', () => {
  loading.value = true
}, {
  global: true,
})

nuxtApp.hook('page:finish', () => {
  loading.value = false
})
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
