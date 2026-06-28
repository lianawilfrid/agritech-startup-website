import { Hero } from '@/components/home/hero'
import { TrustSection } from '@/components/home/trust-section'
import { FeaturedCategories } from '@/components/home/featured-categories'
import { FeaturedProducts } from '@/components/home/featured-products'
import { SuccessStories } from '@/components/home/success-stories'
import { CtaBanner } from '@/components/home/cta-banner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <FeaturedCategories />
      <FeaturedProducts />
      <SuccessStories />
      <CtaBanner />
    </>
  )
}
