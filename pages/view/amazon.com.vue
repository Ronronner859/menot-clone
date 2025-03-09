<template>
  <div class="bg-white min-h-screen">
    <div class="max-w-[1200px] mx-auto px-4 md:px-6 py-4 md:py-8">
      <!-- Mobile Header -->
      <div class="block md:hidden text-center mb-8">
        <p class="text-sm mb-4">
          When you buy through links on RetailMeNot
          <span class="underline">we may earn a commission.</span>
        </p>
        <div class="w-[120px] h-[120px] bg-[#232F3E] rounded-full mx-auto mb-4 flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon"
            class="w-[80px] invert">
        </div>
        <h1 class="text-2xl font-bold mb-2">Amazon Promo Codes & Coupons</h1>
        <p class="text-sm">50 VERIFIED OFFERS ON MARCH 6TH, 2025</p>
      </div>

      <!-- Desktop Layout -->
      <div class="flex flex-col md:flex-row md:gap-8">
        <!-- Sidebar -->
        <div class="w-full md:w-[280px] order-2 md:order-1">
          <!-- Desktop Header (Hidden on Mobile) -->
          <div class="hidden md:block">
            <div class="w-[200px] h-[200px] bg-[#232F3E] rounded-full flex items-center justify-center mb-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon"
                class="w-[140px] invert">
            </div>
            <p class="text-sm mb-6">
              When you buy through links on RetailMeNot
              <span class="underline">we may earn a commission.</span>
            </p>
          </div>

          <!-- Top Offers -->
          <div class="mb-8 hidden md:block">
            <h2 class="font-bold mb-4">TODAY'S TOP AMAZON OFFERS:</h2>
            <ul class="list-disc pl-4 space-y-2 text-sm">
              <li>10% Cash Back on Amazon Devices</li>
              <li>Up to 30% Off with Amazon Coupon</li>
            </ul>
          </div>

          <!-- Stats Grid -->
          <div class="mb-8 hidden md:block">
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

          <!-- Editor Info (Shown at bottom on mobile) -->
          <div class="bg-white shadow-lg rounded-lg p-6 mb-8 order-last md:order-none">
            <h3 class="font-bold mb-4">THIS PAGE HAS BEEN UPDATED BY</h3>
            <div class="flex items-center gap-4 mb-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ben Whitehead"
                class="w-16 h-16 rounded-full object-cover">
              <div>
                <div class="font-bold">Ben Whitehead</div>
                <div class="text-sm text-gray-600">Content Writer</div>
              </div>
            </div>
            <p class="text-sm text-gray-600 mb-4">
              Ben is a writer and editor with more than 25 years of insider shopping experience in retail
              and e-commerce. He thanks his deal-spotting ability to a grandfather who would buy
              anything at a good price, a mother who would buy everything just to own it, and
              his dogs, Pugly and Dorbs, who simply cost too much.
            </p>
            <button class="text-sm text-gray-600 hover:text-gray-900">See Bio</button>
          </div>

          <!-- Add this section after the editor info in the sidebar -->
          <div class="mt-8 space-y-8">
            <div>
              <h2 class="text-sm font-bold mb-6">AMAZON FEATURED ARTICLES</h2>

              <!-- Main Featured Article -->
              <div class="mb-8">
                <img src="https://picsum.photos/id/114/100/100" alt="Amazon delivery"
                  class="w-full aspect-video object-cover rounded-lg mb-4">
                <h3 class="text-sm font-bold mb-2">
                  20 Ways to Save at Amazon Every Time You Shop
                </h3>
                <p class="text-gray-600 mb-3">
                  Why settle for paying Amazon prices, as low as they may be? You can bring down your
                  order total even further.
                </p>
                <p class="text-sm">By Maria Lalonde</p>
              </div>

              <!-- Second Article -->
              <div class="border-t border-gray-200 pt-6 mb-8">
                <h3 class="text-sm font-bold mb-2">
                  Free Perks with Amazon Prime Membership
                </h3>
                <p class="text-gray-600 mb-3">
                  You can get so much more than free shipping at Amazon. There's free music,
                  memberships, books, apps and more for th...
                </p>
                <p class="text-sm">By Lisa Davis</p>
              </div>

              <!-- Third Article -->
              <div class="border-t border-gray-200 pt-6 mb-8">
                <h3 class="text-sm font-bold mb-2">
                  Amazon Prime Day Shopping Guide: Win Prime Day
                </h3>
                <p class="text-gray-600 mb-3">
                  Here's what you can expect for Amazon Prime Day — and how to shop strategically to
                  get the best deals.
                </p>
                <p class="text-sm">By Kristin McGrath</p>
              </div>
            </div>

            <!-- Trust Section -->
            <div class="border-t border-gray-200 pt-8">
              <h2 class="text-sm font-bold mb-4">WHY TRUST US?</h2>
              <p class="text-gray-600">
                RetailMeNot.com has a dedicated merchandising team sourcing and verifying the best Amazon coupons,
                promo codes and deals — so you can save money and time while shopping. Our deal hunters are
                constantly updating this page with the latest discounts, and our team verifies each code to
                ensure it works.
              </p>
            </div>
          </div>

          <!-- Add this after the Trust section -->
          <div class="space-y-8 mt-8">
            <!-- Submit Coupon -->
            <div class="border-t border-gray-200 pt-6">
              <a href="#" class="text-[#5C2D91] font-semibold flex items-center gap-2 hover:text-[#4A2475]">
                SUBMIT A COUPON
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </a>
            </div>

            <!-- About Amazon -->
            <div class="border-t border-gray-200 pt-6">
              <h2 class="text-sm font-bold mb-4">ABOUT AMAZON</h2>
              <div class="flex items-center gap-2 mb-4">
                <div class="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-300" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span class="font-bold">3.5 Rating</span>
                <span class="text-gray-600">(669)</span>
                <a href="#" class="text-[#5C2D91] hover:underline">Log In</a>
              </div>

              <div class="space-y-2 text-sm">
                <div class="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  206 266-1000
                </div>
                <div class="flex items-start gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  410 Terry Ave N, Seattle, WA 98109
                </div>
              </div>
            </div>

            <!-- Shipping Policy -->
            <div class="border-t border-gray-200 pt-6">
              <h2 class="text-sm font-bold mb-4">WHAT IS AMAZON'S SHIPPING AND DELIVERY POLICY?</h2>
              <p class="text-gray-600">
                Amazon has expanded its delivery options impressively, and its delivery benefits are especially sweet
                for
                Prime members. It offers same-day delivery (free for Prime members on orders over $25); free two-day
                shipping (unlimited for Prime members); fresh grocery delivery; pickup lockers; in-store pickup at its
                physical locations and more.
              </p>
              <p class="text-gray-600 mt-4">
                Shipping costs vary for each delivery option. It has tried a lot of delivery experiments over the years,
                including the ability to have your order dropped off in your car trunk, which it ended in 2021.
              </p>
            </div>

            <!-- Returns Policy -->
            <div class="border-t border-gray-200 pt-6">
              <h2 class="text-sm font-bold mb-4">WHAT IS AMAZON'S RETURNS AND REFUND POLICY?</h2>
              <p class="text-gray-600">
                Amazon's <a href="#" class="text-[#5C2D91] hover:underline">return policy</a> depends on the items that
                customers purchase,
                but most items sold and shipped by Amazon are eligible for free returns. Customized product returns are
                accepted within 14 days of purchase. Electronics can be returned within 30 days of purchase for a full
                refund.
              </p>
            </div>

            <!-- Similar Stores -->
            <div class="border-t border-gray-200 pt-6">
              <h2 class="text-sm font-bold mb-4">SIMILAR STORES</h2>
              <ul class="space-y-2">
                <li><a href="#" class="hover:text-[#5C2D91]">eBay</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">The Home Depot</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Best Buy</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Overstock</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Newegg</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">SHOP.COM</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Meeloog</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Beyond the Rack</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Forlest</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Northern Tool</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Lowe's</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Menards</a></li>
              </ul>
            </div>

            <div class="border-t border-gray-200 pt-6">
              <h2 class="text-sm font-bold mb-4">Popular Stores</h2>
              <ul class="space-y-2">
                <li><a href="#" class="hover:text-[#5C2D91]">eBay</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">The Home Depot</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Best Buy</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Overstock</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Newegg</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">SHOP.COM</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Meeloog</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Beyond the Rack</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Forlest</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Northern Tool</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Lowe's</a></li>
                <li><a href="#" class="hover:text-[#5C2D91]">Menards</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="flex-1 order-1 md:order-2">
          <!-- Desktop Header (Hidden on Mobile) -->
          <div class="hidden md:block mb-8">
            <h1 class="text-[32px] font-bold mb-1">Amazon Promo Codes & Coupons</h1>
            <p class="text-sm">50 VERIFIED OFFERS ON MARCH 6TH, 2025</p>
          </div>

          <!-- Offers -->
          <div class="space-y-4">
            <!-- Cash Back Offer -->
            <!-- Cash Back Offer -->
            <div class="border border-[#E5F7F9] bg-[#FAFEFE] rounded-lg p-4 md:p-6">
              <div class="flex flex-col md:flex-row items-start gap-6">
                <!-- Discount Section -->
                <div class="w-full md:w-[100px] md:shrink-0">
                  <div class="text-[#4DC1CF] text-center">
                    <div class="flex flex-col md:block">
                      <div class="text-[48px] md:text-[42px] font-bold leading-none">10%</div>
                      <div class="text-[36px] md:text-[32px] font-bold leading-none mt-1">BACK</div>
                    </div>
                  </div>
                  <div class="text-xs text-center mt-2 text-gray-600">ONLINE CASH BACK</div>
                </div>

                <!-- Details Section -->
                <div class="flex-1 min-w-0">
                  <div class="space-y-3">
                    <h3 class="text-2xl md:text-xl font-bold">10% Cash Back On Amazon Devices</h3>
                    <div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-600">
                      <div class="flex items-center gap-1">
                        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Expires Tomorrow
                      </div>
                      <span class="hidden md:inline text-gray-300">•</span>
                      <div class="flex items-center gap-1">
                        <span class="text-green-600">✓</span>
                        Verified
                      </div>
                      <span class="hidden md:inline text-gray-300">•</span>
                      <span>505 uses today</span>
                    </div>
                    <button class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      See Details
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                <!-- Action Button -->
                <div class="w-full md:w-auto mt-4 md:mt-0">
                  <button
                    class="w-full md:w-auto bg-[#5C2D91] text-white px-8 py-3 rounded-full hover:bg-[#4A2475] transition-colors text-base font-semibold">
                    Get Reward
                  </button>
                </div>
              </div>
            </div>

            <!-- Code Offer -->
            <div class="border rounded-lg p-4 md:p-6">
              <div class="flex flex-col md:flex-row items-start gap-6">
                <div class="w-full md:w-[100px] md:shrink-0">
                  <div class="text-[#5C2D91] text-center">
                    <div class="text-[32px] font-bold leading-none">UP TO</div>
                    <div class="text-[48px] md:text-[42px] font-bold leading-none mt-1">30%</div>
                    <div class="text-[32px] font-bold leading-none mt-1">OFF</div>
                  </div>
                  <div class="text-xs text-center mt-2 text-gray-600">CODE</div>
                </div>

                <div class="flex-1 min-w-0">
                  <div class="space-y-3">
                    <h3 class="text-2xl md:text-xl font-bold">Up To 30% Off With Amazon Coupon</h3>
                    <div class="text-sm text-gray-600">
                      2.3K uses today
                    </div>
                    <button class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      See Details
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="w-full md:w-auto mt-4 md:mt-0">
                  <button
                    class="relative w-full md:w-auto bg-[#5C2D91] text-white px-8 py-3 rounded-full hover:bg-[#4A2475] transition-colors text-base font-semibold group">
                    <span class="relative z-10">Show Code</span>
                    <div class="absolute right-0 top-0 h-full w-6 overflow-hidden rounded-r-full">
                      <div
                        class="absolute right-0 h-full w-8 translate-x-2 bg-white/20 transform skew-x-[20deg] group-hover:bg-white/30 transition-colors">
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
             <!-- Code Offer -->
             <div class="border rounded-lg p-4 md:p-6">
              <div class="flex flex-col md:flex-row items-start gap-6">
                <div class="w-full md:w-[100px] md:shrink-0">
                  <div class="text-[#5C2D91] text-center">
                    <div class="text-[32px] font-bold leading-none">UP TO</div>
                    <div class="text-[48px] md:text-[42px] font-bold leading-none mt-1">30%</div>
                    <div class="text-[32px] font-bold leading-none mt-1">OFF</div>
                  </div>
                  <div class="text-xs text-center mt-2 text-gray-600">CODE</div>
                </div>

                <div class="flex-1 min-w-0">
                  <div class="space-y-3">
                    <h3 class="text-2xl md:text-xl font-bold">Up To 30% Off With Amazon Coupon</h3>
                    <div class="text-sm text-gray-600">
                      2.3K uses today
                    </div>
                    <button class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      See Details
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="w-full md:w-auto mt-4 md:mt-0">
                  <button
                    class="relative w-full md:w-auto bg-[#5C2D91] text-white px-8 py-3 rounded-full hover:bg-[#4A2475] transition-colors text-base font-semibold group">
                    <span class="relative z-10">Show Code</span>
                    <div class="absolute right-0 top-0 h-full w-6 overflow-hidden rounded-r-full">
                      <div
                        class="absolute right-0 h-full w-8 translate-x-2 bg-white/20 transform skew-x-[20deg] group-hover:bg-white/30 transition-colors">
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
             <!-- Code Offer -->
             <div class="border rounded-lg p-4 md:p-6">
              <div class="flex flex-col md:flex-row items-start gap-6">
                <div class="w-full md:w-[100px] md:shrink-0">
                  <div class="text-[#5C2D91] text-center">
                    <div class="text-[32px] font-bold leading-none">UP TO</div>
                    <div class="text-[48px] md:text-[42px] font-bold leading-none mt-1">30%</div>
                    <div class="text-[32px] font-bold leading-none mt-1">OFF</div>
                  </div>
                  <div class="text-xs text-center mt-2 text-gray-600">CODE</div>
                </div>

                <div class="flex-1 min-w-0">
                  <div class="space-y-3">
                    <h3 class="text-2xl md:text-xl font-bold">Up To 30% Off With Amazon Coupon</h3>
                    <div class="text-sm text-gray-600">
                      2.3K uses today
                    </div>
                    <button class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      See Details
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="w-full md:w-auto mt-4 md:mt-0">
                  <button
                    class="relative w-full md:w-auto bg-[#5C2D91] text-white px-8 py-3 rounded-full hover:bg-[#4A2475] transition-colors text-base font-semibold group">
                    <span class="relative z-10">Show Code</span>
                    <div class="absolute right-0 top-0 h-full w-6 overflow-hidden rounded-r-full">
                      <div
                        class="absolute right-0 h-full w-8 translate-x-2 bg-white/20 transform skew-x-[20deg] group-hover:bg-white/30 transition-colors">
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
             <!-- Code Offer -->
             <div class="border rounded-lg p-4 md:p-6">
              <div class="flex flex-col md:flex-row items-start gap-6">
                <div class="w-full md:w-[100px] md:shrink-0">
                  <div class="text-[#5C2D91] text-center">
                    <div class="text-[32px] font-bold leading-none">UP TO</div>
                    <div class="text-[48px] md:text-[42px] font-bold leading-none mt-1">30%</div>
                    <div class="text-[32px] font-bold leading-none mt-1">OFF</div>
                  </div>
                  <div class="text-xs text-center mt-2 text-gray-600">CODE</div>
                </div>

                <div class="flex-1 min-w-0">
                  <div class="space-y-3">
                    <h3 class="text-2xl md:text-xl font-bold">Up To 30% Off With Amazon Coupon</h3>
                    <div class="text-sm text-gray-600">
                      2.3K uses today
                    </div>
                    <button class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      See Details
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="w-full md:w-auto mt-4 md:mt-0">
                  <button
                    class="relative w-full md:w-auto bg-[#5C2D91] text-white px-8 py-3 rounded-full hover:bg-[#4A2475] transition-colors text-base font-semibold group">
                    <span class="relative z-10">Show Code</span>
                    <div class="absolute right-0 top-0 h-full w-6 overflow-hidden rounded-r-full">
                      <div
                        class="absolute right-0 h-full w-8 translate-x-2 bg-white/20 transform skew-x-[20deg] group-hover:bg-white/30 transition-colors">
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
             <!-- Code Offer -->
             <div class="border rounded-lg p-4 md:p-6">
              <div class="flex flex-col md:flex-row items-start gap-6">
                <div class="w-full md:w-[100px] md:shrink-0">
                  <div class="text-[#5C2D91] text-center">
                    <div class="text-[32px] font-bold leading-none">UP TO</div>
                    <div class="text-[48px] md:text-[42px] font-bold leading-none mt-1">30%</div>
                    <div class="text-[32px] font-bold leading-none mt-1">OFF</div>
                  </div>
                  <div class="text-xs text-center mt-2 text-gray-600">CODE</div>
                </div>

                <div class="flex-1 min-w-0">
                  <div class="space-y-3">
                    <h3 class="text-2xl md:text-xl font-bold">Up To 30% Off With Amazon Coupon</h3>
                    <div class="text-sm text-gray-600">
                      2.3K uses today
                    </div>
                    <button class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                      See Details
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" stroke="currentColor" stroke-width="2"
                          stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="w-full md:w-auto mt-4 md:mt-0">
                  <button
                    class="relative w-full md:w-auto bg-[#5C2D91] text-white px-8 py-3 rounded-full hover:bg-[#4A2475] transition-colors text-base font-semibold group">
                    <span class="relative z-10">Show Code</span>
                    <div class="absolute right-0 top-0 h-full w-6 overflow-hidden rounded-r-full">
                      <div
                        class="absolute right-0 h-full w-8 translate-x-2 bg-white/20 transform skew-x-[20deg] group-hover:bg-white/30 transition-colors">
                      </div>
                    </div>
                  </button>
                </div>
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