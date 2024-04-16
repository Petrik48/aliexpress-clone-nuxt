<script lang="ts" setup>
  import {products} from "~/components/product/product.data";

  const product = products
</script>

<template>
  <div class="relative">
    <div class="absolute -inset-y-5 inset-x-0 bg-[#F2F2F2] z-[-1]" />
    <div class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <div v-if="products" v-for="product in products" :key="product">
          <Product :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>