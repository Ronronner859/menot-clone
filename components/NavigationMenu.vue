<template>
  <div class="bg-white">
    <!-- Popular Categories Section -->
    <CollapsiblePanel title="POPULAR CATEGORIES">
      <a 
        v-for="category in popularCategories" 
        :key="category"
        href="#" 
        class="text-gray-600 hover:text-gray-900 hover:underline"
      >
        {{ category }}
      </a>
    </CollapsiblePanel>

    <!-- Popular Stores Section -->
    <CollapsiblePanel title="POPULAR STORES">
      <a 
        v-for="store in popularCategoriesStores" 
        :key="store"
        href="#" 
        class="text-gray-600 hover:text-gray-900 hover:underline"
      >
        {{ store }}
      </a>
    </CollapsiblePanel>

    <!-- Ways to Save Section -->
    <div class="max-w-[1280px] mx-auto px-4 py-8">
      <h2 class="text-2xl font-bold mb-8">3 Ways To Save With RetailMeNot</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="way in savingWays" :key="way.title" class="flex items-start gap-4">
          <img :src="way.icon" :alt="way.title" class="w-24 h-24 rounded-full" />
          <div>
            <h3 class="font-bold mb-2">{{ way.title }}</h3>
            <p class="text-gray-600 mb-2">{{ way.description }}</p>
            <!-- Single link -->
            <a 
              v-if="way.link" 
              :href="way.link.url"
              class="inline-block font-semibold underline hover:no-underline"
            >
              {{ way.link.text }}
            </a>
            <!-- Multiple links -->
            <div v-else-if="way.links" class="flex gap-4">
              <a 
                v-for="link in way.links" 
                :key="link.text"
                :href="link.url"
                class="font-semibold hover:underline"
              >
                {{ link.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { popularCategories, popularCategoriesStores, savingWays } from '~/mock/menuData'
import CollapsiblePanel from './CollapsiblePanel.vue'
</script>

<style scoped>
.grid {
  transition: all 0.3s ease;
}
</style> 