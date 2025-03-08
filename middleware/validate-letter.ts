export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/sitemap/')) {
    const letter = to.params.letter
    const validLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0-9']
    if (letter && !validLetters.includes(letter.toString())) {
      return navigateTo('/sitemap/A')
    }
  }
}) 