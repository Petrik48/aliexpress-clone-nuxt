<template>
  <div class="mt-4 max-w-[1200px] mx-auto px-2">
    <div class="md:flex gap-4 justify-between mx-auto w-full">
      <div class="md:w-[40%]">
        <img v-if="currentImage" class="rounded-lg object-fit" :src="currentImage">
        <div v-if="images[0] !== ''" class="flex items-center justify-center mt-2">
          <div v-for="image in images">
            <img
                width="70"
                class="rounded-md object-fit border-[3px] cursor-pointer"
                :class="currentImage === image ? 'border-[#FF5353]' : ''"
                :src="image"
                @mouseover="currentImage = image"
                @click="currentImage = image"
            >
          </div>
        </div>
      </div>

      <div class="md:w-[60%] bg-white p-3 rounded-lg">
        <div v-if="true">
          <p class="mb-2">Title</p>
          <p class="font-light text-[12px] mb-2">Description Section</p>
        </div>

        <div class="flex items-center pt-1.5">
          <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
            <Icon name="material-symbols:star-rounded" class="-mt-[17px]" size="12" />
          </span>
          <p class="text-[#FF5353]">
            Extra 5% off
          </p>
        </div>

        <div class="flex items-center justify-start my-2">
          <Icon name="ic:baseline-star" color="#FF5353" />
          <Icon name="ic:baseline-star" color="#FF5353" />
          <Icon name="ic:baseline-star" color="#FF5353" />
          <Icon name="ic:baseline-star" color="#FF5353" />
          <Icon name="ic:baseline-star" color="#FF5353" />
          <span class="text-[13px] font-light ml-2">
            5 213 Reviews 1,000+ orders
          </span>
        </div>

        <div class="border-b" />

        <div class="flex items-center justify-start gap-2 my-2">
          <div class="text-xl font-bold">$ {{ priceComputed }}</div>
          <span class="bg-[#F5F5F5] border text-[#C08562] text-[9px] font-semibold px-1">
            70% off
          </span>
        </div>

        <p class="text-[#009A66] text-xs font-semibold pt-1">
          Free 11-day delivery over $8.28
        </p>
        <p class="text-[#009A66] text-xs font-semibold pt-1">
          Free Shipping
        </p>

        <div class="py-2" />

        <button
          class="
            px-6
            py-2
            rounded-lg
            text-white
            text-lg
            font-semibold
            bg-gradient-to-r
            from-[#FF851A]
            to-[#FFAC2C]
          "
          :disabled="isInCart"
          @click="addToCart()"
        >
          <span v-if="isInCart">Is Added</span>
          <span v-else>Add to Cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {useUserStore} from "~/store/user";

  let currentImage = ref<string | null>(null)
  const {store: userStore} = useUserStore()
  const route = useRoute()

  onMounted(() => {
    watchEffect(() => {
      currentImage.value = 'https://ae04.alicdn.com/kf/S9aea7083b5894222ab96a20d1dd61bf4j.jpg_480x480.jpg_.webp'
      images.value[0] = 'https://ae04.alicdn.com/kf/S9aea7083b5894222ab96a20d1dd61bf4j.jpg_480x480.jpg_.webp'
    })
  })

  const isInCart = computed(() => {
    userStore.cart.forEach(prod => {
      if (route.params.id === prod.id) {
        return true
      }
    })
    return false
  })

  const images = ref([
      '',
      'https://ae04.alicdn.com/kf/Seff3d8a598944413be64fdb31170eaf1i.jpg_480x480.jpg_.webp',
      'https://ae04.alicdn.com/kf/S369c4bc5128d47b99813568505f6d497Q.jpg_480x480.jpg_.webp',
      'https://ae04.alicdn.com/kf/H0f77f1a2f4bd4c0f9c909dd25e7303ff6.jpg_480x480.jpg_.webp',
  ])

  const priceComputed = computed(() => {
    return '26.40'
  })

  const addToCart = () => {
    alert('ADDED')
  }
</script>