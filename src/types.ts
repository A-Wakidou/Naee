// import type { restaurantStatusList, dietList } from "./constants"
export type User = {
  first_name: string,
  last_name: string,
  mail: string,
  password: string,
  address: string,
  phone_number: number
}

export type Lamp = {
  name: string,
  image: string
  price: number,
  quantity: number
}

// type Diet = typeof dietList[number]
// type Status = typeof restaurantStatusList[number]