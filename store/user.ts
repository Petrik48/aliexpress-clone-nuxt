interface IUserStore {
  isMenuOverlay: boolean,
  isLoading: boolean,
  cart: any[],
  checkout: any[],
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