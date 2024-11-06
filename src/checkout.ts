import { Item } from "./item.type";
import { DiscountRule } from "./discountRule.type";

export class Checkout {
    private items: Item[] = [];
    private discountRules: DiscountRule[];
  
    constructor(discountRules: DiscountRule[]) {
        this.discountRules = discountRules;
    }
  
    scan(item: Item): void {
        this.items.push(item);
    }
  
    total(): number {
        let total = 0;

        for (const item of this.items) {
            total += item.price;
        }

        for (const rule of this.discountRules) {
            total -= rule(this.items);
        }

        return total;
    }
}