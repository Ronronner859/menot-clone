<template>
  <div class="max-w-[1280px] mx-auto px-4 py-8 bg-white rounded-xl">
    <!-- Header with Amazon logo -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-4">
        <img 
          src="https://picsum.photos/id/10/200/200" 
          alt="Amazon" 
          class="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 class="text-[1.25rem] font-bold">Today's Top Deals</h2>
          <p class="text-xs text-gray-600 uppercase">PRESENTED BY AMAZON</p>
          <div class="flex items-center">
            <!-- <img src="/lightning-bolt.svg" alt="lightning" class="w-4 h-4 mr-1" /> -->
            <a href="#" class="text-xs font-semibold hover:underline">
              <span class="underline">10% CASH BACK ON AMAZON DEVICES</span>
              <span class="ml-1">→</span>
            </a>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-4">

        <button class="px-6 py-2 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50">
          View more deals
        </button>
      </div>
    </div>

    <!-- Swiper -->
    <div class="relative">
      <swiper :slides-per-view="4" :space-between="16" :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }" :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }" :loop="true" :modules="modules" class="mySwiper" :breakpoints="{
          '320': {
            slidesPerView: 1,
            spaceBetween: 12
          },
          '640': {
            slidesPerView: 2,
            spaceBetween: 14
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 16
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 16
          }
        }" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide v-for="(deal, index) in topDealsSlider" :key="index">
          <div class="bg-white rounded-lg overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.06)] transition-shadow duration-300">
            <div class="flex h-[180px]">
              <!-- 左侧图片区域 -->
              <div class="w-[200px] bg-[#F8F8F8] flex items-center justify-center">
                <div class="w-full h-full flex items-center justify-center">
                  <img 
                    :src="deal.image" 
                    :alt="deal.name"
                    class="w-[100%] h-[100%] object-contain rounded-lg" 
                  />
                </div>
              </div>

              <!-- 右侧内容区域 -->
              <div class="flex-1 p-4 flex flex-col justify-between">
                <!-- 折扣标签 -->
                <div class="mb-2">
                  <span class="bg-[#DE3618] text-white px-1.5 py-0.5 rounded text-[11px] font-medium flex items-center gap-0.5 w-fit">
                    ⚡ {{ deal.discount }}
                  </span>
                </div>

                <!-- 标题和价格 -->
                <div class="flex-grow">
                  <h3 class="text-[13px] font-medium line-clamp-2 text-left leading-tight mb-2">{{ deal.name }}</h3>
                  <div class="flex items-center gap-2">
                    <span class="text-gray-500 line-through text-xs">{{ deal.originalPrice }}</span>
                    <span class="text-[#DE3618] font-bold text-sm">{{ deal.currentPrice }}</span>
                  </div>
                </div>

                <!-- 按钮 -->
                <button class="w-full bg-[#F4F4F4] text-gray-800 py-1.5 rounded text-xs font-medium hover:bg-gray-200 transition-colors duration-200">
                  Check price
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>

        <!-- Custom navigation buttons -->
        <div class="swiper-button-prev !hidden md:!flex"></div>
        <div class="swiper-button-next !hidden md:!flex"></div>
      </swiper>

      <!-- Navigation arrows -->
      <button
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-white rounded-full p-2 shadow-md hidden md:block">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-white rounded-full p-2 shadow-md hidden md:block">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Pagination dots -->
    <div class="flex justify-center mt-4 gap-1.5">
      <button v-for="n in 5" :key="n" class="w-1.5 h-1.5 rounded-full transition-all duration-300"
        :class="currentSlide === n - 1 ? 'bg-black' : 'bg-gray-300'" @click="goToSlide(n - 1)"></button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { topDealsSlider } from '~/mock/dealData'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination, Autoplay]
const currentSlide = ref(0)
let swiperInstance = null

const onSwiper = (swiper) => {
  swiperInstance = swiper
}

const onSlideChange = () => {
  if (swiperInstance) {
    currentSlide.value = swiperInstance.realIndex
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
  if (swiperInstance) {
    swiperInstance.slideToLoop(index)
  }
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  padding: 0.5rem !important;
}

.swiper-slide {
  height: auto;
}

.swiper-slide>div {
  height: auto;
}

/* Custom navigation buttons */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

:deep(.swiper-button-prev) {
  left: -16px;
}

:deep(.swiper-button-next) {
  right: -16px;
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
  font-size: 14px;
  color: #000;
  font-weight: bold;
}

:deep(.swiper-button-disabled) {
  opacity: 0;
  cursor: not-allowed;
}

/* Hover effects */
:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  background-color: #f8f9fa;
}

@media (max-width: 768px) {
  .swiper {
    padding: 0 !important;
  }

  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    display: none;
  }
}

/* 移除所有图片相关的过渡效果 */
.swiper-slide img {
  transition: none;
}

.swiper-slide:hover img {
  transform: none;
}
</style>