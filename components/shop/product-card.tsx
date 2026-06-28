'use client'

import Link from 'next/link'
import { Star, Plus } from 'lucide-react'
import { formatPrice, type Product } from '@/lib/products'
import { useCart } from '@/components/cart/cart-provider'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const lowest = product.sizes[0]

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5">
      <Link
        href={`/product/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-secondary"
      >
        <img
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
            {product.badge}
          </span>
        )}
        {product.bestSeller && (
          <span className="absolute right-3 top-3 rounded-full bg-leaf px-2.5 py-1 text-xs font-medium text-leaf-foreground">
            Best Seller
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium text-muted-foreground">
          {product.categoryName}
        </p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-1 line-clamp-1 font-medium text-foreground transition-colors group-hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
          <Star className="size-3.5 fill-leaf text-leaf" />
          <span className="font-medium text-foreground">{product.rating}</span>
          <span>({product.reviewCount})</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div>
            <p className="text-base font-semibold text-foreground">
              {formatPrice(lowest.price)}
            </p>
            <p className="text-xs text-muted-foreground">
              {lowest.label}
            </p>
          </div>
          <button
            onClick={() =>
              addItem({
                slug: product.slug,
                name: product.name,
                image: product.image,
                size: lowest.label,
                price: lowest.price,
                quantity: 1,
              })
            }
            aria-label={`Add ${product.name} to cart`}
            className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
          >
            <Plus className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
