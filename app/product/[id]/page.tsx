import Image from "next/image";
import { notFound } from "next/navigation";
import { getOnlineShopProductById } from "@/lib/api";
import { formatCurrency } from "@/lib/formatCurrency";
import { calcDiscountPercent } from "@/lib/calcDiscountPercent";
import type { ApiItemResponse, Product } from "@/types/onlineShop";
import AddToCartButton from "@/components/AddToCartButton/AddToCartButton";
import Link from "next/link";

type ProductDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  try {
    const { id } = await params;

    const response =
      await getOnlineShopProductById<ApiItemResponse<Product>>(id);
    const product = response.data;

    const hasDiscount = product.discountedPrice < product.price;
    const discountPercent = calcDiscountPercent(
      product.price,
      product.discountedPrice,
    );

    return (
      <main className="max-w-6xl mx-auto px-4 py-10">
        <Link
          href="/#products"
          className="inline-block mb-6 text-sm text-black/70 hover:text-black transition"
        >
          ← Back to products
        </Link>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-sm border border-black/10">
            {hasDiscount && discountPercent > 0 && (
              <div className="absolute left-3 top-3 z-10 rounded-full accent-bg text-white text-xs px-3 py-1">
                -{discountPercent}%
              </div>
            )}

            <Image
              src={product.image?.url || "/placeholder.png"}
              alt={product.image?.alt || product.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-2xl font-bold">
                {formatCurrency(product.discountedPrice)}
              </span>

              {hasDiscount && (
                <span className="text-gray-500 line-through">
                  {formatCurrency(product.price)}
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-gray-600">
              Rating:{" "}
              <span className="font-medium">{product.rating.toFixed(1)}</span>
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-6">
              {}
              <AddToCartButton product={product} />
            </div>

            {product.tags && product.tags.length > 0 && (
              <div className="mt-8">
                <h2 className="font-semibold">Tags</h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.reviews && product.reviews.length > 0 && (
              <div className="mt-10">
                <h2 className="font-semibold">Reviews</h2>
                <ul className="mt-3 space-y-3">
                  {product.reviews.map((review) => (
                    <li
                      key={review.id}
                      className="rounded-xl border bg-white p-4"
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{review.username}</p>
                        <p className="text-sm text-gray-600">
                          Rating: {review.rating}
                        </p>
                      </div>
                      <p className="mt-2 text-gray-700">{review.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    notFound();
  }
}
