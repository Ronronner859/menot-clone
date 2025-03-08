<template>
  <div class="max-w-[1280px] mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">Browse Stores Starting with {{ currentLetter }}</h1>

    <div v-if="currentStores" class="grid grid-cols-3 gap-x-8 gap-y-4">
      <template v-for="(storeGroup, groupIndex) in currentStores" :key="groupIndex">
        <template v-for="(store, storeIndex) in storeGroup" :key="storeIndex">
          <a :href="`/view/${store.toLowerCase().replace(/\s+/g, '-')}`"
            class="text-gray-600 hover:text-purple-600 hover:underline transition-colors">
            <li>{{ store }}</li>
          </a>
        </template>
      </template>
    </div>
    <div v-else class="text-gray-600">
      No stores found starting with {{ currentLetter }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storesByLetter } from '~/mock/sitemapData'

const route = useRoute()
const currentLetter = computed(() => route.params.letter || 'A')

const currentStores = computed(() => {
  return storesByLetter[currentLetter.value] || null
})
</script>

<style scoped>
.grid {
  grid-auto-flow: dense;
}
</style> 