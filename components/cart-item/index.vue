<script lang="ts" setup>
  const props = defineProps(['product', 'selectedArray'])

  const { product, selectedArray } = toRefs(props)

  const emit = defineEmits(['selectedRadio'])

  const isHover = ref(false)
  const isSelected = ref(false)
</script>

<template>
  <div class="flex justify-start my-2">

  </div>
</template>