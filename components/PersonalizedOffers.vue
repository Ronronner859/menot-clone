<template>
  <div class="glide__slide overflow-hidden font-bold lg:font-semibold glide__slide--active">
    <div class="max-w-[1280px] mx-auto">
      <div class="flex items-center justify-between">
        <!-- Previous Button -->
        <button class="p-2 hover:bg-gray-100 rounded-full" @click="previousSlide">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Offers Content -->
        <div class="flex items-center justify-center flex-1">
          <img src="@/assets/images/new-tag.svg" alt="New" class="w-4 h-4 mr-2" />
          <span class="font-medium mr-2">Personalized Offers</span>
          <span class="text-[#741FA2] font-medium">Just For You</span>
        </div>

        <!-- Next Button -->
        <button class="p-2 hover:bg-gray-100 rounded-full" @click="nextSlide">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const offers = ref([
  {
    id: 1,
    text: "Personalized Offers Just For You"
  },
  {
    id: 2,
    text: "Special Deals Selected For You"
  },
  {
    id: 3,
    text: "Exclusive Savings For Members"
  }
])

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % offers.value.length
}

const previousSlide = () => {
  currentIndex.value = currentIndex.value === 0 
    ? offers.value.length - 1 
    : currentIndex.value - 1
}
</script> 