import { getOnlineShopProducts } from "@/lib/api";
import type { ApiListResponse, Product } from "@/types/onlineShop";
import ProductGrid from "@/components/ProductGrid/ProductGrid";

export default async function HomePage() {
  try {
    const response = await getOnlineShopProducts<ApiListResponse<Product>>();
    const products = response.data;

    return (
      <main className="max-w-6xl mx-auto px-4 py-10">
        <section className="section-bg rounded-2xl p-8 sm:p-12 mb-10">
          <span className="text-sm text-black/60 font-medium">Online Shop</span>
          <div className="accent-bg h-1 w-14 rounded-full mb-6"></div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Discover everyday essentials
          </h1>

          <p className="mt-3 text-black/70 max-w-xl">
            Carefully selected products designed to make daily life simpler and
            better.
          </p>

          <div className="mt-6">
            <a href="#products" className="btn-primary inline-flex">
              Browse products
            </a>
          </div>
        </section>

        <ProductGrid products={products} />
      </main>
    );
  } catch (error) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Online Shop</h1>
        <p className="mt-2 text-red-600">
          Could not load products. Please try again.
        </p>
      </main>
    );
  }
}
