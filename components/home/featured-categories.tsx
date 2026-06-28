import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { categories } from '@/lib/products'
import { Reveal } from '@/components/ui/reveal'

export function FeaturedCategories() {
  return (
    <section className="bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-leaf">
              Shop by category
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
              Everything your farm needs, in one place
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
          >
            View all categories <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={(i % 5) * 60}>
              <Link
                href={`/shop/${cat.slug}`}
                className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl border border-border"
              >
                <img
                  src={cat.image || '/placeholder.svg'}
                  alt={cat.name}
                  className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06160e]/90 via-[#06160e]/20 to-transparent" />
                <div className="relative p-4">
                  <h3 className="font-medium text-white">{cat.name}</h3>
                  <p className="mt-0.5 line-clamp-1 text-xs text-white/75">
                    {cat.tagline}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
