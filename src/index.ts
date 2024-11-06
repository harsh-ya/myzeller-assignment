import { Item } from "./item.type";
import { DiscountRule } from "./discountRule.type";
import { bulkIpadDiscount, appleTvBundleDiscount } from "./discountRules";
import { Checkout } from "./checkout";


const items: Item[] = [
    { sku: "atv", price: 109.5 },
    { sku: "atv", price: 109.5 },
    { sku: "atv", price: 109.5 },
    { sku: "vga", price: 30 },
];
  
const discountRules: DiscountRule[] = [bulkIpadDiscount, appleTvBundleDiscount];
  
const co = new Checkout(discountRules);
  
items.forEach((item) => co.scan(item));
  
const total = co.total();
  
console.log(`Total: $${total.toFixed(2)}`);