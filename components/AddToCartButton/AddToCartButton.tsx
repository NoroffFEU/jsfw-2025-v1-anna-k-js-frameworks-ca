'use client'

import type { Product } from '@/types/onlineShop'
import type { CartItem } from '@/types/cart'
import { useCart } from '@/context/CartContext'
import { useToast } from '@/context/ToastContext'

type AddToCartButtonProps = {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { dispatch } = useCart()
  const { showToast } = useToast()

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
    showToast('Added to cart', 'success')
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="btn-primary"
    >
      Add to Cart
    </button>
  )
}