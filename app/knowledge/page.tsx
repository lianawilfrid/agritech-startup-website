import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Sprout,
  Droplets,
  Bug,
  Wallet,
  Truck,
  ShieldCheck,
  ArrowRight,
  BookOpen,
} from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { categories } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Knowledge Center',
  description:
    'Growing guides, fertilizer schedules, pest management and farm advice from the Sproutwell agronomy team.',
}

type Guide = {
  title: string
  excerpt: string
  category: string
  readTime: string
  icon: keyof typeof iconMap
}

const iconMap = {
  sprout: Sprout,
  droplets: Droplets,
  bug: Bug,
  wallet: Wallet,
  truck: Truck,
  shield: ShieldCheck,
}

const guides: Guide[] = [
  {
    title: 'Transplanting tissue culture banana: a 30-day checklist',
    excerpt:
      'From pit preparation to the first irrigation cycle — everything you need for a high-survival transplant.',
    category: 'Tissue Culture Plants',
    readTime: '6 min read',
    icon: 'sprout',
  },
  {
    title: 'Drip irrigation schedules for fruit orchards',
    excerpt:
      'How to size your drip cycles by soil type and season so plants establish without water stress.',
    category: 'Irrigation',
    readTime: '5 min read',
    icon: 'droplets',
  },
  {
    title: 'Identifying and treating early blight in tomato',
    excerpt:
      'Spot the early signs of fungal disease in vegetable seedlings before it spreads across the field.',
    category: 'Vegetable Seedlings',
    readTime: '4 min read',
    icon: 'bug',
  },
  {
    title: 'Reading a soil test report: NPK, pH and micronutrients',
    excerpt:
      'A plain-language guide to your soil test so you buy the right biofertilizer or micronutrient mix.',
    category: 'Soil Health',
    readTime: '7 min read',
    icon: 'shield',
  },
  {
    title: 'Vermicompost vs. organic manure: which one and when',
    excerpt:
      'Compare nutrient release speed, cost per acre and application timing for both soil amendments.',
    category: 'Organic Manure',
    readTime: '5 min read',
    icon: 'sprout',
  },
  {
    title: 'Calculating cost per acre for a new plantation',
    excerpt:
      'A simple framework to budget planting material, inputs, labour and expected first-harvest returns.',
    category: 'Farm Economics',
    readTime: '6 min read',
    icon: 'wallet',
  },
  {
    title: 'What to expect on delivery day for live plants',
    excerpt:
      'How we pack tissue culture plants and seedlings for transit, and how to acclimatise them on arrival.',
    category: 'Delivery & Survival',
    readTime: '3 min read',
    icon: 'truck',
  },
  {
    title: 'Cocopeat vs. red soil for nursery raising',
    excerpt:
      'Drainage, water retention and root development compared across common nursery growing media.',
    category: 'Cocopeat',
    readTime: '5 min read',
    icon: 'sprout',
  },
]

export default function KnowledgePage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/60 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground">
              <BookOpen className="size-4 text-primary" /> Knowledge Center
            </span>
            <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Grow with confidence
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Practical growing guides, fertilizer schedules and farm advice
              from our agronomy team — written for real field conditions
              across South India.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-heading text-xl font-semibold text-foreground">
              Browse by category
            </h2>
          </Reveal>
          <div className="mt-5 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/shop/${c.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide, i) => {
              const Icon = iconMap[guide.icon]
              return (
                <Reveal key={guide.title} delay={i * 60}>
                  <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                      <Icon className="size-5" />
                    </span>
                    <p className="mt-5 text-xs font-medium text-muted-foreground">
                      {guide.category} · {guide.readTime}
                    </p>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                      {guide.title}
                    </h3>
                    <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {guide.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Read guide
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="rounded-3xl border border-border bg-secondary/60 p-8 text-center sm:p-12">
              <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                Have a question specific to your farm?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                Our team replies on WhatsApp within a day with guidance
                tailored to your crop, soil and district.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-leaf px-7 text-sm font-semibold text-leaf-foreground transition-transform hover:scale-[1.03]"
              >
                Ask our experts
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
