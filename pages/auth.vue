<script lang="ts" setup>
  definePageMeta({
    layout: 'auth'
  })

  const client = useSupabaseClient()
  const user = useSupabaseUser()

  watchEffect(() => {
    if (user.value) {
      return navigateTo('/')
    }
  })

  const login = async (prov) => {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: prov
    })
  }
</script>

<template>
  <div class="w-full h-[100vh] bg-white">
    <div class="w-full flex items-center justify-center p-5 border-b border-b-gray-300">
      <NuxtLink to="/" class="min-w-[170px]">
        <img src="/AliExpress-logo.png" width="170" alt="">
      </NuxtLink>
    </div>

    <div class="max-w-[400px] mx-auto px-2">
      <div class="text-center my-6">Login / Register</div>

      <button
        class="
          flex
          items-center
          justify-center
          gap-3
          p-1.5
          w-full
          border
          rounded-full
          text-lg
          font-semibold
          hover:bg-gray-100
        "
        @click="login('google')"
      >
        <img src="/google-logo.png" class="w-full max-w-[30px]" alt="">
        <span>Google</span>
      </button>
      <button
        class="
          mt-4
          flex
          items-center
          justify-center
          gap-3
          p-1.5
          w-full
          border
          rounded-full
          text-lg
          font-semibold
          hover:bg-gray-100
        "
        @click="login('github')"
      >
        <img src="/github-logo.png" class="w-full max-w-[30px]" alt="">
        <span>Github</span>
      </button>
    </div>
  </div>
</template>