import { Item } from "./item.type";

export type DiscountRule = (items: Item[]) => number;