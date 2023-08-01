<script setup lang="ts">
import VueMeta from 'vue-meta'

import { onMounted, ref } from 'vue';



onMounted(() => {
  document.body.style.paddingLeft = '0px';
});
</script>

<script lang="ts">
export default {
  meta: {
    title: 'SpotiGrade | Premium',
    link: [
      { rel: 'icon', type: 'image/png', href: 'https://i.imgur.com/fRdn9yq.png' }
    ]
  }
}

</script>


<template>
  
  <div class="grid">
    <Hero />
    <ClientOnly>
      <Features />
      <Pricing />
    </ClientOnly>
    <Steps />
  </div>
</template>

