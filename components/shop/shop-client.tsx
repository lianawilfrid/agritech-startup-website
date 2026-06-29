'use client'

import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ProductCard } from '@/components/shop/product-card'
import { Reveal } from '@/components/ui/reveal'
import type { Product, Category } from '@/lib/products'

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'

const SORT_LABELS: Record<SortOption, string> = {
  featured: 'Featured',
  'price-asc': 'Price: Low to High',
  'price-desc': 'Price: High to Low',
  rating: 'Highest Rated',
  newest: 'Newest',
}

export function ShopClient({
  products,
  categories,
  initialCategory = null,
}: {
  products: Product[]
  categories: Category[]
  initialCategory?: string | null
}) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory)
  const [sort, setSort] = useState<SortOption>('featured')
  const [showFilters, setShowFilters] = useState(false)
  const [showSortMenu, setShowSortMenu] = useState(false)
  const [onlyBestSeller, setOnlyBestSeller] = useState(false)

  const filtered = useMemo(() => {
    let list = [...products]

    // Search
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.categoryName.toLowerCase().includes(q) ||
          p.localName.toLowerCase().includes(q),
      )
    }

    // Category
    if (activeCategory) {
      list = list.filter((p) => p.category === activeCategory)
    }

    // Best seller filter
    if (onlyBestSeller) {
      list = list.filter((p) => p.bestSeller)
    }

    // Sort
    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.sizes[0].price - b.sizes[0].price)
        break
      case 'price-desc':
        list.sort((a, b) => b.sizes[0].price - a.sizes[0].price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      case 'featured':
        list.sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0))
        break
      default:
        break
    }

    return list
  }, [products, search, activeCategory, sort, onlyBestSeller])

  const activeCount = (activeCategory ? 1 : 0) + (onlyBestSeller ? 1 : 0)

  function clearFilters() {
    setActiveCategory(null)
    setOnlyBestSeller(false)
    setSearch('')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* ── Page Header ── */}
      <div className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-leaf">
              Our collection
            </p>
            <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Shop All Products
            </h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Premium tissue culture plants, certified nursery seedlings and
              sustainable agricultural inputs — delivered directly to your farm.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── Toolbar ── */}
      <div className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 py-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search plants, inputs…"
                className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            {/* Filter toggle (mobile) */}
            <button
              onClick={() => setShowFilters((v) => !v)}
              className="relative flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary lg:hidden"
            >
              <SlidersHorizontal className="size-4" />
              Filters
              {activeCount > 0 && (
                <span className="flex size-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  {activeCount}
                </span>
              )}
            </button>

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowSortMenu((v) => !v)}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {SORT_LABELS[sort]}
                <ChevronDown className="size-4 text-muted-foreground" />
              </button>
              {showSortMenu && (
                <div className="absolute right-0 top-full z-40 mt-2 w-52 rounded-2xl border border-border bg-card py-1 shadow-lg">
                  {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setSort(key)
                        setShowSortMenu(false)
                      }}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors hover:bg-secondary ${
                        sort === key
                          ? 'font-medium text-primary'
                          : 'text-foreground'
                      }`}
                    >
                      {SORT_LABELS[key]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Layout ── */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* ── Sidebar ── */}
          <aside
            className={`w-64 shrink-0 ${
              showFilters
                ? 'fixed inset-0 z-50 flex w-80 flex-col overflow-y-auto bg-background p-6 shadow-2xl lg:static lg:shadow-none'
                : 'hidden lg:block'
            }`}
          >
            {/* Mobile close */}
            {showFilters && (
              <div className="mb-6 flex items-center justify-between lg:hidden">
                <span className="text-base font-semibold text-foreground">
                  Filters
                </span>
                <button
                  onClick={() => setShowFilters(false)}
                  className="rounded-full p-1.5 hover:bg-secondary"
                >
                  <X className="size-5" />
                </button>
              </div>
            )}

            {/* Active filters summary */}
            {activeCount > 0 && (
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                  {activeCount} filter{activeCount > 1 ? 's' : ''} active
                </span>
                <button
                  onClick={clearFilters}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Best seller toggle */}
            <div className="mb-6">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Quick filter
              </h3>
              <label className="flex cursor-pointer items-center gap-3">
                <div
                  onClick={() => setOnlyBestSeller((v) => !v)}
                  className={`relative h-5 w-9 rounded-full transition-colors ${
                    onlyBestSeller ? 'bg-primary' : 'bg-border'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 size-4 rounded-full bg-white shadow transition-transform ${
                      onlyBestSeller ? 'translate-x-4' : 'translate-x-0.5'
                    }`}
                  />
                </div>
                <span className="text-sm text-foreground">Best sellers only</span>
              </label>
            </div>

            {/* Categories */}
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Category
              </h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setActiveCategory(null)}
                    className={`w-full rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                      activeCategory === null
                        ? 'bg-primary/10 font-medium text-primary'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    All products
                    <span className="ml-2 text-xs text-muted-foreground">
                      ({products.length})
                    </span>
                  </button>
                </li>
                {categories.map((cat) => {
                  const count = products.filter(
                    (p) => p.category === cat.slug,
                  ).length
                  if (count === 0) return null
                  return (
                    <li key={cat.slug}>
                      <button
                        onClick={() =>
                          setActiveCategory(
                            activeCategory === cat.slug ? null : cat.slug,
                          )
                        }
                        className={`w-full rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                          activeCategory === cat.slug
                            ? 'bg-primary/10 font-medium text-primary'
                            : 'text-foreground hover:bg-secondary'
                        }`}
                      >
                        {cat.name}
                        <span className="ml-2 text-xs text-muted-foreground">
                          ({count})
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>

          {/* ── Mobile sidebar backdrop ── */}
          {showFilters && (
            <div
              className="fixed inset-0 z-40 bg-foreground/20 lg:hidden"
              onClick={() => setShowFilters(false)}
            />
          )}

          {/* ── Product grid ── */}
          <div className="min-w-0 flex-1">
            {/* Result count */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {filtered.length === 0
                  ? 'No products found'
                  : `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`}
                {activeCategory &&
                  ` in ${categories.find((c) => c.slug === activeCategory)?.name}`}
              </p>
              {(search || activeCount > 0) && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="mb-4 text-5xl">🌱</div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  No products found
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Try adjusting your search or clearing the filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((product, i) => (
                  <Reveal key={product.slug} delay={(i % 3) * 60}>
                    <ProductCard product={product} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
