<template>
  <div>
    <!-- Cash Back Section -->
    <div class="max-w-[1280px] mx-auto px-4 py-8">
      <div class="max-w-7xl mx-auto">
        <!-- Header Section -->
        <div class="mb-8">
          <!-- 字体大小0.875rem  font-bold 700-->
          <h2 class="cha-ching-text text-0.175rem font-bold mb-2">CHA-CHING</h2>
          <div class="flex justify-between items-center">
            <!-- 字体大小1.25rem font-bold 700-->
            <h2 class="cash-back-text text-1.5rem font-bold">Cash Back At Stores We Love</h2>
            <!-- 字体大小0.75rem font-semibold 600-->
            <a href="#" class="text-[gray] font-semibold underline">
              <span class="cash-back-all-text text-0.75rem">ALL CASH BACK</span>
            </a>
          </div>
        </div>

        <!-- Store Cards Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <!-- Hotels.com -->
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white mb-2">
              <img
                src="https://www.retailmenot.com/imagery/merchants/00s6XeqiyAHQrbR0zRpzU6F.fit_limit.quality_80.size_86x86.v1740799743.png.webp"
                alt="Hotels.com" class="w-16 h-16 object-contain" />
            </div>
            <div class="text-center">
              <p class="flex items-center justify-center text-lg font-bold text-[#741FA2]">
                <img src="/dollar-sign.svg" alt="$" class="w-4 h-4 mr-1" /> 15%
              </p>
              <p class="text-sm">Cash Back</p>
            </div>
          </div>

          <!-- H&R Block -->
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 rounded-full bg-[#00A344] flex items-center justify-center mb-2">
              <img
                src="https://www.retailmenot.com/imagery/merchants/03oOPgOLEEMd88nznfhGWCN-color.fit_limit.quality_80.size_86x86.v1740799767.png.webp"
                alt="H&R Block" class="w-16 h-16 object-contain" />
            </div>
            <div class="text-center">
              <p class="flex items-center justify-center text-lg font-bold text-[#741FA2]">
                <img
                  src="https://www.retailmenot.com/imagery/merchants/02RGwAdnXnoxI2rPZTySLqq-color.fit_limit.quality_80.size_86x86.v1740776251.png.webps"
                  alt="$" class="w-4 h-4 mr-1" /> $25
              </p>
              <p class="text-sm underline">Cash Back</p>
            </div>
          </div>

          <!-- Macy's -->
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 rounded-full bg-[#E21A2C] flex items-center justify-center mb-2">
              <img
                src="https://www.retailmenot.com/imagery/merchants/00pSUwoel3qOuyKmEoowlWl-color.fit_limit.quality_80.size_86x86.v1740776514.png.webp"
                alt="Macy's" class="w-16 h-16 object-contain" />
            </div>
            <div class="text-center">
              <p class="flex items-center justify-center text-lg font-bold text-[#741FA2]">
                <img
                  src="https://www.retailmenot.com/imagery/merchants/01cICT0Lq6YJALYH1P9Hk0N-color.fit_limit.quality_80.size_86x86.v1740799711.png.webp"
                  alt="$" class="w-4 h-4 mr-1" /> 12%
              </p>
              <p class="text-sm">Cash Back</p>
            </div>
          </div>

          <!-- AT&T -->
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 rounded-full bg-[#00A8E0] flex items-center justify-center mb-2">
              <img
                src="https://www.retailmenot.com/imagery/merchants/04dAc7n7dh6y2pzuUkF1aye-color.fit_limit.quality_80.size_86x86.v1741296412.png.webp"
                alt="AT&T" class="w-16 h-16 object-contain" />
            </div>
            <div class="text-center">
              <p class="flex items-center justify-center text-lg font-bold text-[#741FA2]">
                <img
                  src="https://www.retailmenot.com/imagery/merchants/00PdyjRpqcbuGvEnK1Ylabm-color.fit_limit.quality_80.size_86x86.v1740791681.png.webp"
                  alt="$" class="w-4 h-4 mr-1" /> $125
              </p>
              <p class="text-sm">Cash Back</p>
            </div>
          </div>

          <!-- GAP -->
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white mb-2">
              <img
                src="https://www.retailmenot.com/imagery/merchants/07ds9QoZmzOeHIdfFHUqRvo.fit_limit.quality_80.size_86x86.v1740776528.png.webp"
                alt="GAP" class="w-16 h-16 object-contain" />
            </div>
            <div class="text-center">
              <p class="flex items-center justify-center text-lg font-bold text-[#741FA2]">
                <img
                  src="https://www.retailmenot.com/imagery/merchants/00PdyjRpqcbuGvEnK1Ylabm-color.fit_limit.quality_80.size_86x86.v1740791681.png.webp"
                  alt="$" class="w-4 h-4 mr-1" /> 3%
              </p>
              <p class="text-sm">Cash Back</p>
            </div>
          </div>

          <!-- CVS -->
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white mb-2">
              <img
                src="https://www.retailmenot.com/imagery/merchants/00PdyjRpqcbuGvEnK1Ylabm-color.fit_limit.quality_80.size_86x86.v1740791681.png.webp"
                alt="CVS" class="w-16 h-16 object-contain" />
            </div>
            <div class="text-center">
              <p class="flex items-center justify-center text-lg font-bold text-[#741FA2]">
                <img
                  src="https://www.retailmenot.com/imagery/merchants/00PdyjRpqcbuGvEnK1Ylabm-color.fit_limit.quality_80.size_86x86.v1740791681.png.webp"
                  alt="$" class="w-4 h-4 mr-1" /> 20%
              </p>
              <p class="text-sm">Cash Back</p>
            </div>
          </div>

          <!-- Home Depot -->
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 rounded-full bg-[#F96302] flex items-center justify-center mb-2">
              <img
                src="https://www.retailmenot.com/imagery/merchants/00PdyjRpqcbuGvEnK1Ylabm-color.fit_limit.quality_80.size_86x86.v1740791681.png.webp"
                alt="Home Depot" class="w-16 h-16 object-contain" />
            </div>
            <div class="text-center">
              <p class="flex items-center justify-center text-lg font-bold text-[#741FA2]">
                <img
                  src="https://www.retailmenot.com/imagery/merchants/00PdyjRpqcbuGvEnK1Ylabm-color.fit_limit.quality_80.size_86x86.v1740791681.png.webp"
                  alt="$" class="w-4 h-4 mr-1" /> 12%
              </p>
              <p class="text-sm">Cash Back</p>
            </div>
          </div>

          <!-- eBay -->
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white mb-2">
              <img
                src="https://www.retailmenot.com/imagery/merchants/00PdyjRpqcbuGvEnK1Ylabm-color.fit_limit.quality_80.size_86x86.v1740791681.png.webp"
                alt="eBay" class="w-16 h-16 object-contain" />
            </div>
            <div class="text-center">
              <p class="flex items-center justify-center text-lg font-bold text-[#741FA2]">
                <img
                  src="https://www.retailmenot.com/imagery/merchants/00PdyjRpqcbuGvEnK1Ylabm-color.fit_limit.quality_80.size_86x86.v1740791681.png.webp"
                  alt="$" class="w-4 h-4 mr-1" /> 3%
              </p>
              <p class="text-sm">Cash Back</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Spring Savecation Deals Section -->
    <div class="max-w-[1280px] mx-auto px-4 py-8">
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
    <div class="max-w-[1280px] mx-auto px-4 py-8">
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