<template>
  <div class="border-b">
    <div class="max-w-[1280px] mx-auto px-4 py-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold">{{ title }}</h2>
        <button class="text-2xl transition-transform" @click="toggleExpand">
          <span v-if="isExpanded">−</span>
          <span v-else>+</span>
        </button>
      </div>
      
      <!-- Content -->
      <div v-show="isExpanded" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-4 transition-all duration-300">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  initialExpanded: {
    type: Boolean,
    default: true
  }
})

const isExpanded = ref(props.initialExpanded)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
.grid {
  transition: all 0.3s ease;
}
</style> 