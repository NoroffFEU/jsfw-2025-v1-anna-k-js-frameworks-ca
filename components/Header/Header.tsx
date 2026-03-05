"use client";

import Link from "next/link";
import Container from "@/components/Layout/Container";
import { useCart } from "@/context/CartContext";
import NavLink from "@/components/NavLink/NavLink";


export default function Header() {
  const { state } = useCart();
  const cartCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="section-bg relative">
      <Container className="max-w-6xl mx-auto px-4 pt-4 pb-0 flex items-center justify-between">
        <Link href="/" className="text-lg sm:text-xl font-bold accent-text">
          MyShop
        </Link>

        <nav className="flex items-end gap-2 sm:gap-6 relative z-10">
          <NavLink href="/">Home</NavLink>

          <NavLink href="/cart">
            Cart
            <span className="ml-2 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 py-0.5 text-xs">
              {cartCount}
            </span>
          </NavLink>

          <NavLink href="/contact">Contact</NavLink>
        </nav>
      </Container>
    </header>
  );
}
