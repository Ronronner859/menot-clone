<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" @click="closeModal">
        <div class="flex min-h-screen items-center justify-center p-4">
          <!-- Modal Content -->
          <div class="relative w-full max-w-[760px] rounded-[20px] bg-white p-8" @click.stop>
            <!-- Close Button -->
            <button 
              @click="closeModal"
              class="absolute right-6 top-6 text-black hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Logo -->
            <div class="mb-8 flex justify-center">
              <div class="h-[96px] w-[96px] rounded-full bg-[#232F3E] flex items-center justify-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                  alt="Amazon" 
                  class="w-[64px] invert"
                >
              </div>
            </div>

            <!-- Title -->
            <h2 class="mb-8 text-center text-2xl font-bold text-[#333333]">Up to 30% Off with Amazon Coupon</h2>

            <!-- Code Section -->
            <div class="mb-8">
              <div class="relative">
                <div class="flex items-center justify-between bg-[#F4F4F4] rounded-full py-4 px-6">
                  <span class="text-base text-gray-600">Code Provided at Checkout</span>
                  <button class="bg-[#5C2D91] text-white px-8 py-2.5 rounded-full hover:bg-[#4A2475] transition-colors text-base font-semibold">
                    COPY
                  </button>
                </div>
              </div>
            </div>

            <!-- Instructions -->
            <div class="text-center text-base text-gray-600 mb-8">
              Copy and paste this code at <a href="#" class="text-[#5C2D91] hover:underline">Amazon</a>
            </div>

            <!-- Browser Extension Promotion -->
            <div class="bg-[#F9F9F9] rounded-2xl p-8 mb-8">
              <div class="flex items-start gap-6">
                <div class="flex-1">
                  <h3 class="font-bold text-lg mb-2">BROWSER EXTENSION</h3>
                  <p class="text-base leading-tight mb-6">Apply nearly 3,800 cash back offers on top of thousands of codes with one-tap.</p>
                  <a href="#" class="inline-block bg-black text-white text-base font-semibold px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
                    Add to Chrome
                  </a>
                </div>
                <div class="flex-shrink-0">
                  <img src="https://picsum.photos/id/117/100/100" alt="Browser Extension" class="w-20 h-20 rounded-lg">
                </div>
              </div>
            </div>

            <!-- Additional Info -->
            <!-- <div class="space-y-5">
              <div>
                <button class="w-full flex items-center justify-between text-left font-bold text-base hover:text-[#5C2D91] transition-colors">
                  <span>How does it work?</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>

              <div class="py-5 border-t border-gray-200">
                <p class="font-bold text-base">Ends soon.</p>
              </div>

              <div class="border-t border-gray-200 pt-5">
                <button class="w-full flex items-center justify-between text-left font-bold text-base hover:text-[#5C2D91] transition-colors">
                  <span>Details & Exclusions</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* Add backdrop blur when modal is open */
.fixed {
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.5);
}
</style> 