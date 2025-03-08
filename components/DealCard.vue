<template>
  <div class="bg-white rounded-xl shadow-sm overflow-hidden">
    <div class="relative">
      <div class="absolute top-2 left-2 bg-white rounded-full px-2 py-1 flex items-center shadow-sm z-10">
        <img :src="dealIcon" alt="Hot" class="w-4 h-4 mr-1 rounded-full" />
        <span class="text-sm font-bold">{{ dealBadge }}</span>
      </div>
      <div :class="`h-48 ${backgroundColor}`">
        <div v-if="useImageContainer" class="w-full h-full flex items-center justify-center">
          <img :src="merchantLogo" :alt="merchantName" class="w-full h-full object-cover" />
        </div>
        <div v-else class="w-full h-full flex items-center justify-center">
          <img :src="merchantLogo" :alt="merchantName" class="h-12 w-auto" />
        </div>
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-xs font-bold uppercase mb-2">{{ merchantName }}</h3>
      <p class="text-sm font-medium mb-4 line-clamp-2">{{ dealDescription }}</p>
      <button class="bg-gray-100 hover:bg-gray-200 text-sm font-medium px-4 py-2 rounded-full w-full transition">
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  dealIcon: {
    type: String,
    required: true
  },
  dealBadge: {
    type: String,
    required: true
  },
  merchantLogo: {
    type: String,
    required: true
  },
  merchantName: {
    type: String,
    required: true
  },
  dealDescription: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'Get Deal'
  },
  backgroundColor: {
    type: String,
    default: 'bg-white'
  },
  useImageContainer: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
</style> 