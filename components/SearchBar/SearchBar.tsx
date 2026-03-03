"use client";

import { useState } from "react";
import type { Product } from "@/types/onlineShop";
import Link from "next/link";

type SearchBarProps = {
  products: Product[];
};

export default function SearchBar({ products }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="relative mt-6">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/30"
      />

      {query.length > 0 && (
        <div className="absolute z-20 mt-2 w-full rounded-lg border bg-white shadow-lg max-h-64 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 5).map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="block px-4 py-2 hover:bg-gray-100 transition"
                onClick={() => setQuery("")}
              >
                {product.title}
              </Link>
            ))
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
