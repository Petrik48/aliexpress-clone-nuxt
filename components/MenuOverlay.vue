<script lang="ts" setup>
  import {useUserStore} from "~/store/user";

  const { store: userStore } = useUserStore()
  const client = useSupabaseClient()

  const goTo = (url:string) => {
    userStore.isMenuOverlay = false
    return navigateTo(`/${url}`)
  }

  const signOut = () => {
    client.auth.signOut()
    userStore.isMenuOverlay = false
    return navigateTo('/')
  }

  const signIn = () => {
    userStore.isMenuOverlay = false
    return navigateTo('/auth')
  }
</script>

<template>
  <div class="fixed z-50 bottom-0 h-full w-full bg-white px-3">
    <div class="flex items-center justify-between py-5">
      <NuxtLink to="/" @click="userStore.isMenuOverlay = false">
        <img src="/AliExpress-logo.png" width="170" alt="">
      </NuxtLink>

      <button class="rounded-full p-1 hover:bg-gray-200" @click="userStore.isMenuOverlay = false">
        <Icon name="mdi:close" size="30" />
      </button>
    </div>

    <div class="flex items-center justify-between pt-5">
      <ul class="w-full">
        <li
          class="
            relative
            flex
            items-center
            justify-between
            py-2.5
            border-b
            px-3
            cursor-pointer
            hover:bg-gray-100
          "
          @click="goTo('orders')"
        >
          <div class="flex items-center text-[20px] font-semibold">
            <Icon name="ph:pen-light" size="33" />
            <span class="pl-4">My Orders</span>
          </div>
        </li>
        <li
            class="
            relative
            flex
            items-center
            justify-between
            py-2.5
            border-b
            px-3
            cursor-pointer
            hover:bg-gray-100
          "
            @click="goTo('shopping-cart')"
        >
          <div class="flex items-center text-[20px] font-semibold">
            <Icon name="ph:shopping-cart-simple-light" size="33" />
            <span class="pl-4">Cart</span>
          </div>
          <div
            class="
              flex
              items-center
              justify-center
              bg-[#FF4646]
              h-[35px]
              min-w-[35px]
              text-lg
              text-white
              rounded-full
            "
          >
            {{ userStore.cart.length }}
          </div>
        </li>
        <li
          v-if="false"
          class="
            relative
            flex
            items-center
            justify-between
            py-2.5
            border-b
            px-3
            cursor-pointer
            hover:bg-gray-100
          "
          @click="signOut()"
        >
          <div class="flex items-center text-[20px] font-semibold">
            <Icon name="ph:sign-out-light" size="33" />
            <span class="pl-4">Sign Out</span>
          </div>
        </li>
        <li
          v-else
          class="
            relative
            flex
            items-center
            justify-between
            py-2.5
            border-b
            px-3
            cursor-pointer
            hover:bg-gray-100
          "
          @click="signIn()"
        >
          <div class="flex items-center text-[20px] font-semibold">
            <Icon name="ph:sign-in-light" size="33" />
            <span class="pl-4">Sign In / Register </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>