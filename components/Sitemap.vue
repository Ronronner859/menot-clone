<template>
  <div class="max-w-[1280px] mx-auto px-4 py-8">
    <div>
      <!-- 标题 -->
      <h1 class="text-2xl font-bold mb-6">Browse Stores Starting with {{ currentLetter }}</h1>

      <!-- 字母导航 -->
      <div class="flex flex-wrap gap-2 mb-8 border-b">
        <button v-for="letter in alphabetNav" :key="letter" @click="currentLetter = letter"
          class="px-3 py-2 hover:text-purple-600 transition-colors" :class="{
            'border-b-2 border-purple-600 font-bold': currentLetter === letter,
            'text-gray-600': currentLetter !== letter
          }">
          {{ letter }}
        </button>
      </div>
    </div>

    <!-- 商家列表 -->
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
import { ref, computed } from 'vue'
import { alphabetNav, storesByLetter } from '~/mock/sitemapData'

// 当前选中的字母，默认为 A
const currentLetter = ref('A')

// 根据当前字母获取对应的商家列表
const currentStores = computed(() => {
  return storesByLetter[currentLetter.value] || null
})
</script>

<style scoped>
/* 确保最后一行左对齐 */
.grid {
  grid-auto-flow: dense;
}
</style>