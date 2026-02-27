import { getOnlineShopProducts } from '@/lib/api'
import type { ApiListResponse, Product } from '@/types/onlineShop'

export default async function HomePage() {
  const response = await getOnlineShopProducts<ApiListResponse<Product>>()
  const products = response.data

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Online Shop</h1>
      <p className="mt-2 text-gray-600">
        Products loaded: <span className="font-semibold">{products.length}</span>
      </p>
    </main>
  )
}