import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    info: {
      id: '',
      name: '',
    },
  }),
  getters: {
    isLogin: state => !!state.info.id,
  },
  actions: {
    login(info: any) {
      this.info = info
    },
    logout() {
      this.info = {
        id: '',
        name: '',
      }
    },
  },
})
