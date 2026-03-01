import { getOnlineShopProducts } from '@/lib/api'
import type { ApiListResponse, Product } from '@/types/onlineShop'
import ProductCard from '@/components/ProductCard/ProductCard'

export default async function HomePage() {
  try{
  const response = await getOnlineShopProducts<ApiListResponse<Product>>()
  const products = response.data

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Online Shop</h1>
      <p className="mt-2 text-gray-600">Browse products</p>
       <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
    </main>
  )
}  catch (error) {
    return (
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Online Shop</h1>
        <p className="mt-2 text-red-600">
          Could not load products. Please try again.
        </p>
      </main>
    )
  }
}