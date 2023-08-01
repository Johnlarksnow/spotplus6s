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
export default {
  head() {
    return {
      title: 'Spotigrade',
      meta: [
        // Your meta tags...
      ]
    };
  },
  // Your other Vue options...
};
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
