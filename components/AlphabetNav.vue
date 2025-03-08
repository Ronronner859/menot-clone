<template>
  <div class="border-b bg-white">
    <div class="max-w-[1280px] mx-auto px-4">
      <div class="flex flex-wrap gap-2">
        <NuxtLink
          v-for="letter in alphabetNav"
          :key="letter"
          :to="`/sitemap/${letter}`"
          class="px-3 py-2 hover:text-purple-600 transition-colors"
          :class="{ 
            'border-b-2 border-purple-600 font-bold': currentLetter === letter,
            'text-gray-600': currentLetter !== letter
          }"
        >
          {{ letter }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { alphabetNav } from '~/mock/sitemapData'

const route = useRoute()
const currentLetter = computed(() => route.params.letter || 'A')
</script> 