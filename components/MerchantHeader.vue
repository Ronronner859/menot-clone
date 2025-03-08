<template>
  <div class="flex items-start gap-8 mb-8">
    <!-- Logo -->
    <div class="w-48 h-48 bg-[#232F3E] rounded-full flex items-center justify-center overflow-hidden">
      <img :src="merchant.logo" :alt="merchant.name" class="w-32 h-32 object-contain" />
    </div>

    <!-- Info -->
    <div class="flex-1">
      <h1 class="text-3xl font-bold mb-2">{{ merchant.name }}</h1>
      <p class="text-sm text-gray-600 mb-4">{{ merchant.verifiedOffers }}</p>
      <p class="text-sm text-gray-600">{{ merchant.disclaimer }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  merchant: {
    type: Object,
    required: true
  }
})
</script> 