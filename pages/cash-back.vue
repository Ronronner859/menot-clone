<script setup>
import DealCard from '~/components/DealCard.vue'
import { cashBackDeals } from '~/mock/dealData'
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold">Cash Back</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
      <DealCard
        v-for="(deal, index) in cashBackDeals"
        :key="index"
        v-bind="deal"
      />
    </div>
  </div>
</template> 