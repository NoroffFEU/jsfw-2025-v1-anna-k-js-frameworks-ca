'use client'

import type { Product } from '@/types/onlineShop'

type AddToCartButtonProps = {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  function handleAddToCart() {
    alert(`Added to cart: ${product.title}`)
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="w-full sm:w-auto rounded-lg bg-black text-white px-5 py-3 font-semibold hover:bg-black/90 transition"
    >
      Add to Cart
    </button>
  )
}