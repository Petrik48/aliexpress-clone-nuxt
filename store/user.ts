import type {IProduct} from "~/components/product/product.types";

interface IUserStore {
  isMenuOverlay: boolean,
  isLoading: boolean,
  cart: IProduct[],
  checkout: IProduct[],
}

const defaultValue: {store: IUserStore} = {
  store: {
    isMenuOverlay: false,
    isLoading: false,
    cart: [],
    checkout: [],
  },
}

export const useUserStore = defineStore('user', {
  state: () => defaultValue,
  persist: true,
})