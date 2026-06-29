import { notFound } from 'next/navigation'
import { ShopClient } from '@/components/shop/shop-client'
import { products, categories, getProductsByCategory, getCategory } from '@/lib/products'

type Props = { params: { category: string } }

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

export async function generateMetadata({ params }: Props) {
  const cat = getCategory(params.category)
  if (!cat) return {}
  return {
    title: `${cat.name} – Sproutwell`,
    description: cat.tagline,
  }
}

export default function CategoryPage({ params }: Props) {
  const cat = getCategory(params.category)
  if (!cat) notFound()

  const categoryProducts = getProductsByCategory(params.category)

  return (
    <ShopClient
      products={products}
      categories={categories}
      initialCategory={params.category}
    />
  )
}
