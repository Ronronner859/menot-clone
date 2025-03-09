<template>
  <div class="bg-white min-h-screen">
    <div class="max-w-[1200px] mx-auto px-6 py-8">
      <!-- Top Section -->
      <div class="flex gap-8 mb-12">
        <!-- Logo and Left Content -->
        <div class="w-[280px]">
          <div class="w-[200px] h-[200px] bg-[#232F3E] rounded-full flex items-center justify-center mb-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                 alt="Amazon" 
                 class="w-[140px] invert">
          </div>
          <p class="text-sm mb-6">
            When you buy through links on RetailMeNot 
            <span class="underline">we may earn a commission.</span>
          </p>
          
          <div class="mb-8">
            <h2 class="font-bold mb-4">TODAY'S TOP AMAZON OFFERS:</h2>
            <ul class="list-disc pl-4 space-y-2 text-sm">
              <li>10% Cash Back on Amazon Devices</li>
              <li>Up to 30% Off with Amazon Coupon</li>
            </ul>
          </div>

          <div class="grid grid-cols-2 gap-y-2 text-sm">
            <div>Total Offers</div>
            <div class="text-right font-bold">50</div>
            <div>Coupon Codes</div>
            <div class="text-right font-bold">11</div>
            <div>In-Store Coupons</div>
            <div class="text-right font-bold">0</div>
            <div>Free Shipping Deals</div>
            <div class="text-right font-bold">1</div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1">
          <div class="mb-8">
            <h1 class="text-[32px] font-bold mb-1">Amazon Promo Codes & Coupons</h1>
            <p class="text-sm">50 VERIFIED OFFERS ON MARCH 6TH, 2025</p>
          </div>

          <!-- Offers -->
          <div class="space-y-4">
            <!-- Cash Back Offer -->
            <div class="border border-[#E5F7F9] rounded-lg p-6 bg-[#FAFEFE]">
              <div class="flex items-start gap-6">
                <div class="w-[180px] shrink-0">
                  <div class="text-[#4DC1CF] text-center">
                    <div class="text-[42px] font-bold leading-tight">10%</div>
                    <div class="text-[32px] font-bold leading-tight">BACK</div>
                  </div>
                  <div class="text-xs text-center mt-1 text-gray-600">ONLINE CASH BACK</div>
                </div>

                <div class="flex-1 min-w-0">
                  <h3 class="text-xl font-bold mb-2">10% Cash Back On Amazon Devices</h3>
                  <div class="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <div class="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Expires Tomorrow
                    </div>
                    <span class="text-gray-300">•</span>
                    <div class="flex items-center gap-1">
                      <span class="text-green-600">✓</span>
                      Verified
                    </div>
                    <span class="text-gray-300">•</span>
                    <span>505 uses today</span>
                  </div>
                  <button class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    See Details
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>

                <button class="bg-[#5C2D91] text-white px-8 py-3 rounded-full hover:bg-[#4A2475] transition-colors">
                  Get Reward
                </button>
              </div>
            </div>

            <!-- Code Offer -->
            <div class="border rounded-lg p-6">
              <div class="flex items-start gap-6">
                <div class="w-[180px] shrink-0">
                  <div class="text-[#5C2D91] text-center">
                    <div class="text-[32px] font-bold leading-tight">UP TO</div>
                    <div class="text-[42px] font-bold leading-tight">30%</div>
                    <div class="text-[32px] font-bold leading-tight">OFF</div>
                  </div>
                  <div class="text-xs text-center mt-1 text-gray-600">CODE</div>
                </div>

                <div class="flex-1 min-w-0">
                  <h3 class="text-xl font-bold mb-2">Up To 30% Off With Amazon Coupon</h3>
                  <div class="text-sm text-gray-600 mb-3">
                    2.3K uses today
                  </div>
                  <button class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                    See Details
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>

                <button class="bg-[#5C2D91] text-white px-8 py-3 rounded-full hover:bg-[#4A2475] transition-colors">
                  Show Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { amazonData } from '~/mock/merchantData'
import MerchantHeader from '~/components/MerchantHeader.vue'
import MerchantSidebar from '~/components/MerchantSidebar.vue'
import MerchantOffer from '~/components/MerchantOffer.vue'
</script>