<template>
  <div class="border rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow">
    <div class="flex items-start gap-4">
      <!-- Discount Badge -->
      <div class="w-32 text-center">
        <div :class="[
          'text-2xl font-bold mb-1',
          offer.type === 'ONLINE CASH BACK' ? 'text-cyan-400' : 
          offer.type === 'CODE' ? 'text-purple-600' : 'text-purple-600'
        ]">
          {{ offer.discount }}
        </div>
        <div class="text-xs text-gray-500">{{ offer.type }}</div>
      </div>

      <!-- Offer Details -->
      <div class="flex-1">
        <h3 class="text-xl font-bold mb-2">{{ offer.title }}</h3>
        <div class="flex items-center gap-4 text-sm text-gray-600 mb-2">
          <span v-if="offer.expiry">{{ offer.expiry }}</span>
          <span v-if="offer.verified" class="flex items-center gap-1">
            <span class="text-green-600">✓</span> Verified
          </span>
          <span>{{ offer.usesToday }} uses today</span>
        </div>
        <button class="text-sm text-gray-600 hover:underline" @click="toggleDetails">
          See Details
          <span class="ml-1">{{ showDetails ? '−' : '+' }}</span>
        </button>
        <div v-show="showDetails" class="mt-2 text-sm text-gray-600">
          {{ offer.details }}
        </div>
      </div>

      <!-- Action Button -->
      <button class="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
        {{ offer.buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  offer: {
    type: Object,
    required: true
  }
})

const showDetails = ref(false)

const toggleDetails = () => {
  showDetails.value = !showDetails.value
}
</script> 