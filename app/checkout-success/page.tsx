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
      <section className="section-bg rounded-2xl p-10 sm:p-12 max-w-2xl mx-auto">
    <div className="accent-bg h-1 w-14 rounded-full mb-6" />

    <h1 className="text-3xl font-bold">Checkout complete!</h1>
    <p className="mt-3 text-black/70 text-lg">
      Thank you for your purchase. Your order has been confirmed.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-3">
      <a href="/" className="btn-primary inline-flex justify-center">
        Back to shop
      </a>

      <a
        href="/contact"
        className="inline-flex justify-center rounded-xl border border-black/10 bg-white px-4 py-2 font-medium transition hover:bg-black/5"
      >
        Need help?
      </a>
    </div>
  </section>
    </main>
  )
}