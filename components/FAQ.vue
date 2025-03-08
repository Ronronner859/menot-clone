<template>
  <div class="w-full max-w-[1280px] mx-auto px-4 py-8 bg-white md:rounded-2xl">
    <h2 class="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
    
    <div class="space-y-4">
      <div 
        v-for="(item, index) in faqData" 
        :key="index"
        class="border-b border-gray-200 last:border-0 w-full"
      >
        <button
          class="w-full py-4 flex justify-between items-start text-left"
          @click="toggleItem(index)"
        >
          <span class="text-base md:text-lg font-medium flex-1 pr-4">{{ item.question }}</span>
          <span class="text-xl md:text-2xl transform transition-transform duration-200 flex-shrink-0" :class="{ 'rotate-0': activeIndex === index, '-rotate-90': activeIndex !== index }">
            {{ activeIndex === index ? '−' : '+' }}
          </span>
        </button>
        
        <div 
          v-show="activeIndex === index"
          class="pb-4 text-gray-600 text-sm md:text-base"
        >
          <p v-html="item.answer"></p>
        </div>
      </div>
    </div>

    <!-- Bottom text -->
    <div class="mt-8 text-gray-600 text-sm md:text-base">
      <p>
        RetailMeNot helps you save money while shopping online and in-store at your favorite retailers. Whether you're looking for a promo code, a coupon, a free shipping offer or the latest sales, we're constantly verifying and updating our best offers and deals. Plus, we provide you with 
        <a href="#" class="text-purple-700 hover:underline">cash back</a> offers to get a percentage of what you spend back in your pocket. For an even easier way to save, our 
        <a href="#" class="text-purple-700 hover:underline">browser extension</a> finds and automatically applies promo codes to your online shopping carts. Don't forget to check out our 
        <a href="#" class="text-purple-700 hover:underline">blog</a> for our editors' pro shopping tips, the hottest sales, and the best products to buy.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { faqData } from '~/mock/faqData'

const activeIndex = ref(0) // 默认展开第一个

const toggleItem = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped>
.rotate-0 {
  transform: rotate(0deg);
}

.-rotate-90 {
  transform: rotate(0deg);
}

/* 添加过渡效果 */
.transform {
  transition: transform 0.2s ease;
}

@media (max-width: 768px) {
  .rotate-0,
  .-rotate-90 {
    transition: transform 0.2s ease;
  }
}
</style> 