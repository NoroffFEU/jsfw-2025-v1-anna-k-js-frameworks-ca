"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/lib/formatCurrency";
import { useToast } from "@/context/ToastContext";

export default function CartPage() {
  const { state, dispatch } = useCart();
  const { showToast } = useToast();

  const total = state.items.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0,
  );

  if (state.items.length === 0) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <p className="mt-2 text-gray-600">Your cart is currently empty.</p>
        <Link
          href="/"
          className="mt-6 inline-block text-blue-600 hover:underline"
        >
          Continue shopping →
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <section className="lg:col-span-2 space-y-4">
          {state.items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-xl border bg-white p-4"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-gray-100 border">
                <Image
                  src={item.image?.url || "/placeholder.png"}
                  alt={item.image?.alt || item.title}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>

              <div className="flex-1">
                <Link
                  href={`/product/${item.id}`}
                  className="font-semibold hover:underline"
                >
                  {item.title}
                </Link>

                <p className="mt-1 text-sm text-gray-600">
                  Price: {formatCurrency(item.discountedPrice)}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: { id: item.id, quantity: item.quantity - 1 },
                      })
                    }
                    className="h-9 w-9 rounded-lg border transition hover:bg-gray-100 active:scale-95 active:bg-gray-200"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>

                  <span className="min-w-8 text-center">{item.quantity}</span>

                  <button
                    type="button"
                    onClick={() =>
                      dispatch({
                        type: "UPDATE_QUANTITY",
                        payload: { id: item.id, quantity: item.quantity + 1 },
                      })
                    }
                    className="h-9 w-9 rounded-lg border transition hover:bg-gray-100 active:scale-95 active:bg-gray-200"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_ITEM",
                        payload: { id: item.id },
                      });
                      showToast("Item removed", "info");
                    }}
                    className="ml-4 text-sm text-red-600 hover:text-red-700 hover:underline transition"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  {formatCurrency(item.discountedPrice * item.quantity)}
                </p>
                <p className="text-xs text-gray-500 mt-1">Subtotal</p>
              </div>
            </div>
          ))}
        </section>

        <aside className="rounded-xl border bg-white p-5 h-fit">
          <h2 className="font-semibold">Order summary</h2>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-gray-600">Total</span>
            <span className="text-lg font-bold">{formatCurrency(total)}</span>
          </div>

          <Link
            href="/checkout-success"
            className="btn-primary mt-4 inline-flex items-center justify-center"
          >
            Checkout
          </Link>
        </aside>
      </div>
    </main>
  );
}
