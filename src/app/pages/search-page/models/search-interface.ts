import { Items } from "./items-interface";

export interface Search {
    author: {
      name: string;
      lastname: string;
    },
    categories: string[];
    item: Items[];
  }