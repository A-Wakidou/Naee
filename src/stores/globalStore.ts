import {defineStore} from "pinia"
import type { User, Lamp } from "@/types"

type StateShape = {
  user: User,
  cart: Lamp[]
}
export const useGlobalStore = defineStore('globalStore', {
  state: ():StateShape => ({
    user: {
      first_name: '',
      last_name: '',
      mail: '',
      password: '',
      address: '',
      phone_number: 0
    },
    cart: []
  }),
  getters: {
    fullName: (state) => {
      return state.user.first_name + state.user.last_name
    }
  },
  actions: {  
  }
})