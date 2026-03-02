'use client'

import type { Product } from '@/types/onlineShop'
import type { CartItem } from '@/types/cart'
import { useCart } from '@/context/CartContext'

type AddToCartButtonProps = {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { dispatch } = useCart()

  function handleAddToCart() {
    const item: CartItem = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      discountedPrice: product.discountedPrice,
      quantity: 1,
    }
    dispatch({ type: 'ADD_ITEM', payload: item })
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