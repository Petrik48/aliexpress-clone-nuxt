<script lang="ts" setup>
import {useUserStore} from "~/store/user";
import type {Ref} from "vue";
import {EnumErrorType, type IError} from "~/types/addres.types";

const {store: userStore} = useUserStore()

  let contactName = ref('')
  let address = ref('')
  let zipCode = ref('')
  let city = ref('')
  let country = ref('')

  let currentAddress = ref('')
  let isUpdate = ref(false)
  let isWorking = ref(false)
  let error: Ref<IError | null> = ref(null)

  watchEffect(() => {
    userStore.isLoading = false
  })

  const submit = async () => {
    isWorking.value = true
    error.value = null

    if (!contactName.value) {
      error.value = {
        type: EnumErrorType.contactName,
        message: 'A contact name is required',
      }
    }
    else if (!address.value) {
      error.value = {
        type: EnumErrorType.address,
        message: 'An address is required',
      }
    } else if (!zipCode.value) {
      error.value = {
        type: EnumErrorType.zipCode,
        message: 'A zip code is required',
      }
    } else if (!city.value) {
      error.value = {
        type: EnumErrorType.city,
        message: 'A city is required',
      }
    } else if (!country.value) {
      error.value = {
        type: EnumErrorType.country,
        message: 'A country is required',
      }
    }

    if (error.value) {
      isWorking.value = false
      return
    }
  }
</script>

<template>
  <div class="mt-4 max-w-[500px] mx-auto px-2">
    <div class="mx-auto bg-white rounded-lg p-3">
      <div class="text-xl text-bold mb-2">Address Details</div>

      <form @submit.prevent="submit()">
        <UiInput
          class="w-full"
          placeholder="Contact Name"
          v-model:input="contactName"
          inputType="text"
          :error="error && error.type === EnumErrorType.contactName ? error?.message : ''"
        />
        <UiInput
          class="w-full mt-2"
          placeholder="Address"
          v-model:input="address"
          inputType="text"
          :error="error && error.type === EnumErrorType.address ? error?.message : ''"
        />
        <UiInput
          class="w-full mt-2"
          placeholder="Zip Code"
          v-model:input="zipCode"
          inputType="text"
          :error="error && error.type === EnumErrorType.zipCode ? error?.message : ''"
        />
        <UiInput
          class="w-full mt-2"
          placeholder="City"
          v-model:input="city"
          inputType="text"
          :error="error && error.type === EnumErrorType.city ? error?.message : ''"
        />
        <UiInput
          class="w-full mt-2"
          placeholder="Country"
          v-model:input="country"
          inputType="text"
          :error="error && error.type === EnumErrorType.country ? error?.message : ''"
        />

        <button
          class="
            mt-6
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
          type="submit"
          :disabled="isWorking"
        >
          <span v-if="!isWorking">Update Address</span>
          <Icon
            v-else
            name="eos-icons:loading"
            size="25"
            class="mr-2"
          />
        </button>
      </form>
    </div>
  </div>
</template>