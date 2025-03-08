<template>
  <div class="min-h-screen flex flex-col bg-[#F4F4F4]">
    <!-- 导航栏 -->
     <!--导航栏背景色 rgb(116 31 162 / var(--tw-bg-opacity, 1)) -->
    <nav class="bg-[#741FA2]">
      <div class="max-w-[1280px] mx-auto px-4">
        <!-- Desktop Navigation -->
        <div class="hidden md:flex justify-between items-center h-16">
          <!-- Logo and Nav Items -->
          <div class="flex items-center space-x-6">
            <NuxtLink to="/" class="text-4xl font-bold text-white">
              <span class="font-script">RetailMeNot</span>
            </NuxtLink>
            <div class="flex items-center space-x-6">
              <NuxtLink to="/spring-savecation" class="text-white hover:text-gray-200 text-sm font-medium">
                Spring Savecation
              </NuxtLink>
              <div class="relative group">
                <NuxtLink to="/stores" class="text-white hover:text-gray-200 text-sm font-medium flex items-center">
                  Stores
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </NuxtLink>
              </div>
              <NuxtLink to="/cash-back" class="text-white hover:text-gray-200 text-sm font-medium">
                Cash Back
              </NuxtLink>
              <div class="relative group">
                <NuxtLink to="/blog" class="text-white hover:text-gray-200 text-sm font-medium flex items-center">
                  Blog
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Search Bar -->
          <div class="flex-1 max-w-2xl mx-8">
            <div class="relative">
              <div class="absolute inset-y-0 left-3 flex items-center">
                <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for stores, coupons, and deals"
                class="w-full bg-[#8B2CBF] text-white pl-10 pr-4 py-2 rounded-full border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300 text-sm"
              />
            </div>
          </div>

          <!-- Right Side - Sign In & Cash -->
          <div class="flex items-center space-x-4">
            <button class="text-white hover:text-gray-200 text-sm font-medium">
              Sign In
            </button>
            <div class="bg-white rounded-full px-4 py-1.5 flex items-center">
              <img src="/dollar-sign.svg" alt="Dollar" class="w-4 h-4 mr-1" />
              <span class="text-[#741FA2] font-bold text-sm">$5.00</span>
            </div>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div class="md:hidden flex justify-between items-center h-16">
          <!-- Mobile Logo -->
          <NuxtLink to="/" class="text-2xl font-bold text-white">
            <span class="font-script text-3xl">R</span>
          </NuxtLink>

          <!-- Mobile Search -->
          <div class="flex-1 mx-4">
            <div class="relative">
              <div class="absolute inset-y-0 left-3 flex items-center">
                <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search"
                class="w-full bg-[#8B2CBF] text-white pl-10 pr-4 py-2 rounded-full border-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-300 text-sm"
              />
            </div>
          </div>

          <!-- Mobile Right Side -->
          <div class="flex items-center space-x-3">
            <div class="bg-white rounded-full px-3 py-1 flex items-center">
              <img src="/dollar-sign.svg" alt="Dollar" class="w-3 h-3 mr-1" />
              <span class="text-[#741FA2] font-bold text-sm">$5.00</span>
            </div>
            <button class="text-white p-2" @click="toggleMobileMenu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu (Hidden by default) -->
        <div v-if="isMobileMenuOpen" class="md:hidden bg-[#741FA2] pb-4">
          <div class="px-4 space-y-3">
            <NuxtLink to="/spring-savecation" class="block text-white py-2 text-sm">
              Spring Savecation
            </NuxtLink>
            <NuxtLink to="/stores" class="block text-white py-2 text-sm">
              Stores
            </NuxtLink>
            <NuxtLink to="/cash-back" class="block text-white py-2 text-sm">
              Cash Back
            </NuxtLink>
            <NuxtLink to="/blog" class="block text-white py-2 text-sm">
              Blog
            </NuxtLink>
            <NuxtLink to="/sign-in" class="block text-white py-2 text-sm">
              Sign In
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
    <!-- Personalized Offers Banner -->
    <PersonalizedOffers />
    <!-- Main Content -->
    <main class="flex-1 bg-white">
      <div class="max-w-[1280px] mx-auto">
        <NuxtPage />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-[#741FA2] text-white py-8">
      <div class="max-w-[1280px] mx-auto px-4">
        <!-- Top Section -->
        <div class="flex flex-wrap justify-between items-center mb-8">
          <!-- Social Media Links -->
          <div class="flex items-center space-x-6">
            <a href="#" class="hover:opacity-80">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="hover:opacity-80">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
            </a>
            <a href="#" class="hover:opacity-80">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
              </svg>
            </a>
            <a href="#" class="hover:opacity-80">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>

          <!-- Right Side Links -->
          <div class="flex items-center space-x-6 text-sm">
            <a href="#" class="hover:underline">RetailMeNot Canada</a>
            <a href="#" class="flex items-center hover:underline">
              <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              AdChoices
            </a>
            <a href="#" class="hover:underline">Terms of Service</a>
            <a href="#" class="hover:underline">Privacy Policy</a>
            <a href="#" class="hover:underline">Do Not Sell My Personal Information</a>
            <a href="#" class="hover:underline">Accessibility</a>
            <a href="#" class="hover:underline">Sitemap</a>
          </div>
        </div>

        <!-- Copyright Section -->
        <div class="text-sm opacity-90">
          <p class="mb-4">©2006-2025 RetailMeNot, Inc., a Ziff Davis company. All rights reserved. RetailMeNot and RMN are registered trademarks of RetailMeNot, Inc. Third-party trademarks are the property of their respective third-party owners. Presence of a third-party trademark does not mean that RetailMeNot has any relationship with that third-party or that the third-party endorses RetailMeNot or its services.</p>
        </div>
      </div>
    </footer>
    <!-- Privacy Policy Banner -->
    <PrivacyBanner />
  </div>
</template>

<script setup>
import PersonalizedOffers from '@/components/PersonalizedOffers.vue'
import PrivacyBanner from '@/components/PrivacyBanner.vue'
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

</script> 
<style>
.font-script {
  font-family: 'Brush Script MT', cursive;
}

body {
  background-color: #F4F4F4;
}
</style>

