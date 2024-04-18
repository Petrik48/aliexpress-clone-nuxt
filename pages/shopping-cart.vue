<script lang="ts" setup>
  import {products} from "~/components/product/product.data";
  import {PAYMENTS_DATA} from "~/pages/payments.data";
  import {useUserStore} from "~/store/user";
  import type {IProduct} from "~/components/product/product.types";

  const { store: userStore } = useUserStore()

  let selectedArray = ref([] as IProduct[])

  onMounted(() => {
    setTimeout(() => userStore.isLoading = false, 200)
  })

  const totalPriceComputed = computed(() => {
    const price = userStore.cart.reduce((accumulator, currentValue) => {
      return accumulator += currentValue.price
    }, 0)
    return price / 100
  })

  const selectedRadioFunc = (product: IProduct) => {
    if (!selectedArray.value.length) {
      selectedArray.value.push(product)
      return
    }

    selectedArray.value.forEach((item, index) => {
      if (product.id != item.id) {
        selectedArray.value.push(product)
      } else {
        selectedArray.value.splice(index, 1)
      }
    })
  }

  const goToCheckout = () => {
    let ids:number[] = []
    userStore.checkout = []

    selectedArray.value.forEach(item => ids.push(item.id))

    let res = userStore.cart.filter((item) => {
      return ids.indexOf(item.id) != -1
    })

    res.forEach(item => userStore.checkout.push(toRaw(item)))

    return navigateTo('/checkout')
  }
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

      <div class="md:hidden block my-4" />

      <div class="md:w-[35%]">
        <div class="bg-white rounded-lg p-4">
          <div class="text-2xl font-extrabold mb-2">Summary</div>
          <div class="flex items-center justify-between my-4">
            <div class="font-semibold">Total</div>
            <div class="text-2xl font-semibold">
              $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
            </div>
          </div>

          <button
            class="
              flex
              items-center
              justify-center
              bg-[#FD374F]
              w-full
              text-white
              text-[21px]
              font-semibold
              p-1.5
              rounded-full
              mt-4
            "
            @click="goToCheckout"
          >
            Checkout
          </button>
        </div>

        <div class="bg-white rounded-lg p-4 mt-4">
          <div class="text-lg font-semibold mb-2">Payment methods</div>
          <div class="flex items-center justify-start gap-8 my-4">
            <div v-for="payment in PAYMENTS_DATA">
              <img alt="" class="h-6" :src="payment">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
