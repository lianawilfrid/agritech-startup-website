import { ShopClient } from '@/components/shop/shop-client'
import { products, categories } from '@/lib/products'

export const metadata = {
  title: 'Shop – Sproutwell',
  description:
    'Premium tissue culture plants, certified seedlings and sustainable agricultural inputs, delivered to your farm.',
}

export default function ShopPage() {
  return <ShopClient products={products} categories={categories} />
}
