<template>
  <NuxtLayout>
    <NuxtPage />

    <MenuOverlay
      :class="[
          {'max-h-[100vh] transition-all duration-200 ease-in visible': userStore.isMenuOverlay},
          {'max-h-0  transition-all duration-200 ease-out invisible': !userStore.isMenuOverlay}
      ]"
    />
  </NuxtLayout>
</template>
<script setup lang="ts">
  import {useUserStore} from "~/store/user";

  const {store: userStore} = useUserStore()

  const route = useRoute()

  let windowWidth = ref(process.client ? window.innerWidth : 0)

  onMounted(() => {
    userStore.isLoading = false
    window.addEventListener('resize', function () {
      windowWidth.value =  window.innerWidth
    })
  })

  watch(() => windowWidth.value, () => {
    if (windowWidth.value >= 767) {
      userStore.isMenuOverlay = false
    }
  })

  watch(() => route.fullPath, () => {
    userStore.isLoading = true
  })
</script>