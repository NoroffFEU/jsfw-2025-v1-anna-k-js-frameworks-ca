"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/onlineShop";
import SearchBar from "@/components/SearchBar/SearchBar";
import ProductCard from "@/components/ProductCard/ProductCard";

type SortOption =
  | "default"
  | "price-asc"
  | "price-desc"
  | "rating-desc"
  | "discount-desc"
  | "title-asc";

  

function getEffectivePrice(product: Product) {
  return product.discountedPrice ?? product.price;
}

function getDiscountPercent(product: Product) {
  const original = product.price;
  const discounted = product.discountedPrice ?? product.price;
  if (original <= 0) return 0;
  const diff = original - discounted;
  if (diff <= 0) return 0;
  return (diff / original) * 100;
}

export default function ProductGrid({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<SortOption>("default");

  const sortedProducts = useMemo(() => {
    const list = [...products];

    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b));
      case "price-desc":
        return list.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a));
      case "rating-desc":
        return list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      case "discount-desc":
        return list.sort(
          (a, b) => getDiscountPercent(b) - getDiscountPercent(a),
        );
      case "title-asc":
        return list.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return list;
    }
  }, [products, sort]);

  return (
    <>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="sm:w-105">
          <SearchBar products={products} />
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm text-black/70" htmlFor="sort">
            Sort by
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-(--accent)"
          >
            <option value="default">All</option>
            <option value="price-asc">Price: low → high</option>
            <option value="price-desc">Price: high → low</option>
            <option value="rating-desc">Rating: high → low</option>
            <option value="discount-desc">Biggest discount</option>
            <option value="title-asc">Title: A → Z</option>
          </select>
        </div>
      </div>

      <section
        id="products"
        className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10"
      >
        {sortedProducts.map((product, index) => (
          <div key={product.id} className={index === 0 ? "lg:col-span-2" : ""}>
            <ProductCard product={product} featured={index === 0}/>
          </div>
        ))}
      </section>
    </>
  );
}
