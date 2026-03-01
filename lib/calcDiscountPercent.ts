export function calcDiscountPercent(price: number, discountedPrice: number): number {
  if (price <= 0) return 0
  if (discountedPrice >= price) return 0

  const percent = Math.round(((price - discountedPrice) / price) * 100)
  return percent
}