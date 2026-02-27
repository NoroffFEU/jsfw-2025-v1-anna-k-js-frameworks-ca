'use client'

import Link from 'next/link'
import Container from '@/components/Layout/Container'

export default function Header() {
  return (
    <header className="bg-white border-b">
      <Container className="py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          MyShop
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/cart" className="hover:text-blue-600">
            Cart
            <span className="ml-2 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 py-0.5 text-xs">
              0
            </span>
          </Link>

          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  )
}