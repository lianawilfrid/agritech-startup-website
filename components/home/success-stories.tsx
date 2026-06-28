'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

type Story = {
  name: string
  location: string
  crop: string
  image: string
  quote: string
  yieldIncrease: string
  incomeIncrease: string
}

const stories: Story[] = [
  {
    name: 'Ramesh Gowda',
    location: 'Tumkur, Karnataka',
    crop: 'G9 Banana — 4 acres',
    image: '/images/farmer-1.png',
    quote:
      'Switching to certified tissue culture plants transformed my farm. Uniform growth and a single harvest window made selling so much easier.',
    yieldIncrease: '+32% yield',
    incomeIncrease: '+₹2.4L / season',
  },
  {
    name: 'Lakshmi Narayanan',
    location: 'Erode, Tamil Nadu',
    crop: 'Hybrid Vegetables — 2 acres',
    image: '/images/farmer-2.png',
    quote:
      'The seedlings were strong and the WhatsApp support guided me through every stage. My vegetable income has never been this stable.',
    yieldIncrease: '+28% yield',
    incomeIncrease: '+₹1.6L / season',
  },
]

export function SuccessStories() {
  const [index, setIndex] = useState(0)
  const story = stories[index]

  const go = (dir: number) =>
    setIndex((prev) => (prev + dir + stories.length) % stories.length)

  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-leaf">
            Success stories
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Real farms. Real growth.
          </h2>
        </Reveal>

        <Reveal className="mt-14 overflow-hidden rounded-4xl bg-primary-foreground/5 ring-1 ring-primary-foreground/10">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-72 lg:min-h-full">
              <img
                src={story.image || '/placeholder.svg'}
                alt={story.name}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent lg:bg-gradient-to-r" />
            </div>

            <div className="flex flex-col justify-center gap-6 p-8 sm:p-12">
              <Quote className="size-9 text-leaf" />
              <p className="text-pretty text-xl leading-relaxed sm:text-2xl">
                {story.quote}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-leaf px-4 py-2 text-sm font-semibold text-leaf-foreground">
                  <TrendingUp className="size-4" /> {story.yieldIncrease}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-semibold">
                  {story.incomeIncrease}
                </span>
              </div>
              <div className="border-t border-primary-foreground/15 pt-5">
                <p className="font-semibold">{story.name}</p>
                <p className="text-sm text-primary-foreground/70">
                  {story.location} · {story.crop}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous story"
                  className="flex size-11 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next story"
                  className="flex size-11 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
                >
                  <ChevronRight className="size-5" />
                </button>
                <span className="ml-2 text-sm text-primary-foreground/60">
                  {index + 1} / {stories.length}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
