<template>
  <div class="w-[300px] shrink-0">
    <div class="mb-8">
      <h2 class="font-bold mb-4">TODAY'S TOP AMAZON OFFERS:</h2>
      <ul class="list-disc pl-4 space-y-2">
        <li v-for="offer in topOffers" :key="offer.title">
          {{ offer.title }}
        </li>
      </ul>
    </div>

    <div class="mb-8">
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div>Total Offers</div>
        <div class="text-right font-bold">{{ stats.totalOffers }}</div>
        <div>Coupon Codes</div>
        <div class="text-right font-bold">{{ stats.couponCodes }}</div>
        <div>In-Store Coupons</div>
        <div class="text-right font-bold">{{ stats.inStoreCoupons }}</div>
        <div>Free Shipping Deals</div>
        <div class="text-right font-bold">{{ stats.freeShippingDeals }}</div>
      </div>
    </div>

    <div class="bg-gray-50 p-4 rounded-lg">
      <h3 class="font-bold mb-4">THIS PAGE HAS BEEN UPDATED BY</h3>
      <div class="flex items-center gap-4 mb-4">
        <img :src="editor.avatar" :alt="editor.name" class="w-16 h-16 rounded-full" />
        <div>
          <div class="font-bold">{{ editor.name }}</div>
          <div class="text-sm text-gray-600">{{ editor.title }}</div>
        </div>
      </div>
      <p class="text-sm text-gray-600">{{ editor.bio }}</p>
    </div>

    <div class="mt-8">
      <!-- Amazon Featured Articles -->
      <p class="text-sm mb-4 text-black">AMAZON FEATURED ARTICLES</p>
      <img src="https://picsum.photos/id/20/100/100" alt="Amazon Featured Article"
        class="w-full h-48 object-cover rounded-lg mb-4">
      <div class="border-b border-gray-200 pb-4">
        <p class="text-sm mb-4 text-black">20 Ways to Save at Amazon Every Time You Shop</p>
        <p class="text-sm mb-4 text-black">Why settle for paying Amazon prices, as low as they may be? You can bring
          down your order total even further.</p>
        <p class="text-sm mb-4 text-black">By Maria Lalonde</p>
      </div>
      <div class="border-b border-gray-200 pb-4">
        <p class="text-sm mb-4 text-black">20 Ways to Save at Amazon Every Time You Shop</p>
        <p class="text-sm mb-4 text-black">Why settle for paying Amazon prices, as low as they may be? You can bring
          down your order total even further.</p>
        <p class="text-sm mb-4 text-black">By Maria Lalonde</p>
      </div>
      <div class="border-b border-gray-200 pb-4">
        <p class="text-sm mb-4 text-black">20 Ways to Save at Amazon Every Time You Shop</p>
        <p class="text-sm mb-4 text-black">Why settle for paying Amazon prices, as low as they may be? You can bring
          down your order total even further.</p>
        <p class="text-sm mb-4 text-black">By Maria Lalonde</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stats: {
    type: Object,
    required: true
  },
  editor: {
    type: Object,
    required: true
  },
  topOffers: {
    type: Array,
    required: true
  }
})
</script>