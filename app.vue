<script setup lang="ts">
import { watch } from 'vue'
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

// watching the loading ref, and using the value to control nuxtApp's loading status
watch(loading, (newVal) => {
  nuxtApp.$nuxt.$loading.start()
  if (!newVal) {
    nuxtApp.$nuxt.$loading.finish()
  }
})
</script>

<template>
  <main class="bg-green-100 dark:text-white text-gray-900 font-inter min-h-screen dark:bg-[#050505]">
    <NuxtLoadingIndicator v-if="loading" />

    <NuxtLayout class="h-full">
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>

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
