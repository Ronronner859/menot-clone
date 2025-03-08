<template>
  <div class="bg-gray-50">
    <AlphabetNav />
    <StoreList />
  </div>
</template>

<script setup>
import AlphabetNav from '~/components/AlphabetNav.vue'
import StoreList from '~/components/StoreList.vue'

// 验证路由参数
const route = useRoute()
const router = useRouter()
const { letter } = route.params

onMounted(() => {
  // 如果不是有效的字母或数字范围，重定向到 A
  const validLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0-9']
  if (!validLetters.includes(letter)) {
    router.replace('/sitemap/A')
  }
})
</script> 