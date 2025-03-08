<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="max-w-[1280px] mx-auto px-4 py-8">
      <!-- Merchant Header -->
      <MerchantHeader :merchant="amazonData.merchant" />

      <!-- Main Content -->
      <div class="flex gap-8">
        <!-- Sidebar -->
        <MerchantSidebar :stats="amazonData.stats" :editor="amazonData.editor" :topOffers="amazonData.topOffers" />

        <!-- Offers Section -->
        <div class="flex-1">
          <div class="space-y-4">
            <MerchantOffer v-for="offer in amazonData.topOffers" :key="offer.title" :offer="offer" />
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