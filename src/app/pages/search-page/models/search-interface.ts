import { Item } from "./item-interface";

export interface Search {
    author: {
      name: string;
      lastname: string;
    },
    categories: string[];
    item: Item[];
  }