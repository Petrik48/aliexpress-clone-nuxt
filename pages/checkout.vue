<script setup lang="ts">
  import {useUserStore} from "~/store/user";
  import {products} from "~/components/product/product.data";

  let { store: userStore } = useUserStore()
  const route = useRoute()

  let stripe = null
  let elements = null
  let card = null
  let form = null
  let total = ref(0)
  let clientSecret = null
  let currentAddress = ref(null)
  let isProcessing = ref(false)

  onMounted(() => {
    isProcessing.value = true

    userStore.checkout.forEach(item => {
      total.value += item.price
    })
  })

  watch(() => total.value, () => {
    if (total.value > 0) {
      stripeInit()
    }
  })

  const stripeInit = async () => {

  }

  const pay = async () => {

  }

  const createOrder = async () => {

  }

  const showError = (errorMsgText: string) => {

  }
</script>

<template>
  <div class="mt-4 max-w-[1200px] mx-auto px-2">
    <div class="md:flex gap-4 justify-between mx-auto w-full">
      <div class="md:w-[65%]">
        <div class="bg-white rounded-lg p-4">
          <div class="text-xl font-semibold mb-2">Shipping Address</div>
          <div v-if="false">
            <NuxtLink
              to="/address"
              class="flex items-center pb-2 text-blue-500 hover:text-red-400"
            >
              <Icon name="mdi:plus" size="18" class="mr-2" />
              Update address
            </NuxtLink>

            <div class="pt-2 border-t">
              <div class="underline pb-1">Delivery Address</div>

              <ul class="text-xs">
                <li class="flex items-center gap-2">
                  <div>Contact name:</div>
                  <div class="font-bold">Test</div>
                </li>
                <li class="flex items-center gap-2">
                  <div>Address:</div>
                  <div class="font-bold">Test</div>
                </li>
                <li class="flex items-center gap-2">
                  <div>Zip Code:</div>
                  <div class="font-bold">Test</div>
                </li>
                <li class="flex items-center gap-2">
                  <div>City:</div>
                  <div class="font-bold">Test</div>
                </li>
                <li class="flex items-center gap-2">
                  <div>Country:</div>
                  <div class="font-bold">Test</div>
                </li>
              </ul>
            </div>
          </div>

          <NuxtLink
            v-else
            to="/address"
            class="flex items-center text-blue-500 hover:text-red-400"
          >
            <Icon name="mdi:plus" size="18" class="mr-2" />
            Add New Address
          </NuxtLink>
        </div>

        <div class="bg-white rounded-lg p-4 mt-4">
          <div v-for="product in products">
            <CheckoutItem :product="product"/>
          </div>
        </div>
      </div>

      <div class="md:hidden block my-4" />

      <div class="md:w-[35%]">
        <div class="bg-white rounded-lg p-4">
          <div class="text-2xl font-extrabold mb-2">Summary</div>
          <div class="flex items-center justify-between my-4">
            <div>Total Shipping</div>
            <div>Free</div>
          </div>

          <div class="border-t" />

          <div class="flex items-center justify-between my-4">
            <div class="font-semibold">Total</div>
            <div class="text-2xl font-semibold">
              $ <span class="font-extrabold">{{ total / 100 }}</span>
            </div>
          </div>

          <form @submit.prevent="pay()">
            <div class="border border-gray-500 p-2 rounded-sm" />

            <p role="alert" class="text-red-700 text-center font-semibold"/>

            <button
              type="submit"
              class="
                mt-4
                bg-gradient-to-r
                from-[#FE630C]
                to-[#FF3200]
                w-full
                text-white
                text-[21px]
                font-semibold
                p-1.5
                rounded-full
              "
              :class="isProcessing ? 'opacity-70' : 'opacity-100'"
              :disabled="isProcessing"
            >
              <Icon v-if="isProcessing" name="eos-icons:loading" />
              <span v-else>Place order</span>
            </button>
          </form>
        </div>

        <div class="bg-white rounded-lg p-4 mt-4">
          <div class="text-lg font-semibold mb-2 mt-2">AliExpress</div>
          <p class="my-2">
            AliExpress keeps your information and payment safe
          </p>
        </div>
      </div>
    </div>
  </div>
</template>