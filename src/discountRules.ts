import { Item } from "./item.type";

export function bulkIpadDiscount(items: Item[]): number {
    const ipads: Item[] = [];
    let ipadPrice = 0;
  
    for (const item of items) {
        if (item.sku === "ipd") {
            ipads.push(item);
            if (!ipadPrice) {
                ipadPrice = item.price;
            }
        }
    }
  
    const discountableIpads = Math.max(0, ipads.length - 4);
    return discountableIpads * (549.99 - ipadPrice);
}
  
export function appleTvBundleDiscount(items: Item[]): number {
    let atvCount = 0;
    let atvPrice = 0;
  
    for (const item of items) {
        if (item.sku === "atv") {
            atvCount++;
            if (!atvPrice) {
                atvPrice = item.price;
            }
        }
    }
  
    const discountedAtvs = Math.floor(atvCount / 3);
    return discountedAtvs * atvPrice;
}