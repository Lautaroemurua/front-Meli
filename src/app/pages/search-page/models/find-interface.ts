// import { Items } from ./search-interface;

export interface FindInterface {
  author: {
    name: string,
    lastname: string
  },
  picture: string,
  item: {
    id: string, title: string,
    price: {
      currency: string,
      amount: number,
      decimals: number,
    },
    condition: string,
    free_shipping: Boolean,
    sold_quantity: number
    description: string
  }
}

