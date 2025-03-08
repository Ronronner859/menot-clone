<script setup>
// 默认重定向到 /sitemap/A
const router = useRouter()
onMounted(() => {
  router.replace('/sitemap/A')
})
</script> 