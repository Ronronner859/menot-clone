<template>
  <div>
    <!-- Cash Back Section -->
    <div class="max-w-[1280px] mx-auto px-4 py-8 w-full"> 
      <div class="max-w-7xl mx-auto">
        <!-- Header Section -->
        <div class="mb-8">
          <h2 :style="{ fontSize: pageText.chaChing.fontSize }" :class="[pageText.chaChing.fontWeight, 'mb-2']">
            {{ pageText.chaChing.title }}
          </h2>
          <div class="flex justify-between items-center">
            <h2 :style="{ fontSize: pageText.cashBack.fontSize }" :class="[pageText.cashBack.fontWeight]">
              {{ pageText.cashBack.title }}
            </h2>
            <a href="#" class="text-[gray] font-semibold underline">
              <span :style="{ fontSize: pageText.allCashBack.fontSize }" :class="[pageText.allCashBack.fontWeight]">
                {{ pageText.allCashBack.text }}
              </span>
            </a>
          </div>
        </div>

        <!-- Store Cards Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <div v-for="store in cashBackStores" 
               :key="store.id" 
               class="flex flex-col items-center group cursor-pointer">
            <div :class="[
              'w-24 h-24 rounded-full flex items-center justify-center mb-2 transition-shadow duration-200',
              store.background,
              store.hasBorder ? 'border-2 border-gray-200' : '',
              'group-hover:shadow-[0_8px_20px_-3px_rgba(0,0,0,0.2)]'
            ]">
              <img :src="store.logo" 
                   :alt="store.name" 
                   class="w-full h-full object-contain rounded-full" />
            </div>
            <div class="text-center">
              <p class="flex items-center justify-center text-lg font-bold text-[#741FA2] group-hover:underline">
                <img :src="store.dollarIcon" 
                     alt="$" 
                     class="w-4 h-4 mr-1 rounded-full transform transition-transform duration-200 group-hover:-translate-y-0.5 hover:scale-110" /> 
                {{ store.cashBack }}
              </p>
              <p class="text-sm group-hover:underline">Cash Back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Spring Savecation Deals Section -->
    <div class="max-w-[1280px] mx-auto px-4 py-8 w-full">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-[1.25rem] font-bold">Spring Savecation Deals</h2>
        <a href="#" class="text-[#741FA2] font-semibold underline">
          <span class="text-[0.75rem]">ALL SPRING SAVECATION DEALS</span>
        </a>
      </div>

      <!-- Deals Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <DealCard v-for="(deal, index) in springDeals" :key="index" v-bind="deal" />
      </div>
    </div>

    <!-- Add the slider component -->
    <TopDealsSlider />

    <!-- Top Deals -->
    <div class="max-w-[1280px] mx-auto px-4 py-8 w-full">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-[1.25rem] font-bold">Top Deals</h2>
        <a href="#" class="text-[#741FA2] font-semibold underline">
          <span class="text-[0.75rem]">ALL TOP DEALS</span>
        </a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <DealCard v-for="(deal, index) in springDeals" :key="index" v-bind="deal" />
      </div>
    </div>
    <!-- Navigation Menu -->
    <NavigationMenu />
    <!-- FAQ -->
    <FAQ />
  </div>
</template>

<script setup>
import DealCard from '~/components/DealCard.vue'
import { springDeals } from '~/mock/dealData'
import TopDealsSlider from '~/components/TopDealsSlider.vue'
import NavigationMenu from '~/components/NavigationMenu.vue'
import FAQ from '~/components/FAQ.vue'
import { cashBackStores, pageText } from '~/mock/homeData'

</script>

<style scoped>
.cha-ching-text {
  font-size: 0.875rem;
}

.cash-back-text {
  font-size: 1.25rem;
}

.cash-back-all-text {
  font-size: 0.75rem;
}

.image-size {
  width: 80%;
  height: 80%;
  /* 居中 */
  margin: 0 auto;
}
</style>