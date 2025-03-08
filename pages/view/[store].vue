<template>
  <div class="bg-gray-50">
    <!-- 商家详情页内容 -->
    <div class="max-w-[1280px] mx-auto px-4 py-8">
      <h1 class="text-2xl font-bold mb-6">{{ storeName }}</h1>
      <!-- 其他内容 -->
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const storeName = computed(() => {
  // 将 URL 格式转换回商家名称
  return route.params.store.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')
})
</script> 