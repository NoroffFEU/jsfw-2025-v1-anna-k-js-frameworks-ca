'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useCart } from '@/context/CartContext'

export default function CheckoutSuccessPage() {
  const { dispatch } = useCart()

  useEffect(() => {
    dispatch({ type: 'CLEAR_CART' })
  }, [dispatch])

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold">Checkout complete!</h1>
      <p className="mt-2 text-gray-600">
        Thank you for your purchase. Your order has been confirmed.
      </p>

      <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
        Back to shop →
      </Link>
    </main>
  )
}