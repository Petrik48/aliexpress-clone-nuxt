<script lang="ts" setup>
  import {products} from "~/components/product/product.data";
</script>

<template>
  <div class="max-w-[1200px] mx-auto px-2">
    <div v-if="false" class="h-[500px] flex items-center justify-center">
      <div>
        <img width="300" src="/cart-empty.png" alt="">
        <div class="text-xl text-center mt-4">No Items yet?</div>
        <div class="flex text-center">
          <NuxtLink
            to="/auth"
            class="
              bg-[#FD374F]
              w-full
              text-white
              text-[21px]
              font-semibold
              p-1.5
              rounded-full
              mt-4
            "
          >
            Sign in
          </NuxtLink>
        </div>
      </div>
    </div>

    <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
      <div class="md:w-[65%]">
        <div class="bg-white rounded-lg p-4">
          <div class="text-2xl font-bold mb-2">
            Shopping Cart (0)
          </div>
        </div>

        <div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
          <div class="text-red-500 font-bold">
            Welcome Deal applicable on 1 item only
          </div>
        </div>

        <div class="bg-white rounded-lg p-4 mt-4">
          <div v-for="product in products" :key="product.id">
            <CartItem
              :product="product"
              :selected-array="selectedArray"
              @selectedRadio="selectedRadioFunc"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
