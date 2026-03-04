"use client";

import Link from "next/link";
import Container from "@/components/Layout/Container";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { state } = useCart();
  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="section-bg ">
      <Container className="max-w-6xl mx-auto px-4 pt-4 pb-0 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          MyShop
        </Link>

        <nav className="relative z-10 flex items-center gap-6 self-end">
          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/cart" className="nav-link">
            Cart
            <span className="ml-2 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 py-0.5 text-xs">
              {cartCount}
            </span>
          </Link>

          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}
