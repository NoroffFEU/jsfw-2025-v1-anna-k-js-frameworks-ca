import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/types/onlineShop'
import { formatCurrency } from '@/lib/formatCurrency'
import { calcDiscountPercent } from '@/lib/calcDiscountPercent'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasDiscount = product.discountedPrice < product.price
  const discountPercent = calcDiscountPercent(product.price, product.discountedPrice)

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block rounded-xl bg-white shadow-sm border border-black/10 overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
      aria-label={`View details for ${product.title}`}
    >
      <div className="relative aspect-square bg-gray-100">
        {hasDiscount && discountPercent > 0 && (
          <div className="absolute left-3 top-3 z-10 rounded-full accent-bg text-white text-xs px-3 py-1">
            -{discountPercent}%
          </div>
        )}

        <Image
          src={product.image?.url || '/placeholder.png'}
          alt={product.image?.alt || product.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
        />
      </div>

      <div className="p-4">
        <h2 className="font-semibold leading-snug line-clamp-2">{product.title}</h2>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-semibold">{formatCurrency(product.discountedPrice)}</span>

          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through">
              {formatCurrency(product.price)}
            </span>
          )}
        </div>

        <div className="mt-2 text-sm text-gray-600">
          Rating: <span className="font-medium">{product.rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  )
}