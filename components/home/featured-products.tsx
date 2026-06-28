import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { products } from '@/lib/products'
import { ProductCard } from '@/components/shop/product-card'
import { Reveal } from '@/components/ui/reveal'

export function FeaturedProducts() {
  const featured = products.filter((p) => p.bestSeller).slice(0, 4)
  const list = featured.length ? featured : products.slice(0, 4)

  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-leaf">
              Best sellers
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              Loved by thousands of growers
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Shop all products <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 4) * 70}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
