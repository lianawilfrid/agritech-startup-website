'use client'

import Link from 'next/link'
import { ArrowRight, MessageCircle, ShieldCheck, Truck, Sprout } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-plantation.png"
          alt="Healthy banana plantation at golden hour"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06160e]/85 via-[#06160e]/55 to-[#06160e]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06160e]/70 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <Sprout className="size-4" /> Certified planting material since 2016
          </span>
          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
            Growing Prosperity,
            <br />
            One Plant at a Time.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85">
            Premium Tissue Culture Plants, Certified Nursery Seedlings and
            Sustainable Agricultural Inputs delivered directly to your farm.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-leaf px-7 py-3.5 text-base font-semibold text-leaf-foreground transition-transform hover:scale-[1.02]"
            >
              Shop Plants <ArrowRight className="size-5" />
            </Link>
            <a
              href="https://wa.me/918088192674"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <MessageCircle className="size-5" /> Talk to an Expert
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {[
              { icon: ShieldCheck, label: 'Survival Guaranteed' },
              { icon: Truck, label: 'Farm Delivery' },
              { icon: Sprout, label: 'Expert Support' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 text-white/90"
              >
                <item.icon className="size-5 text-leaf" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-[#06160e]/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {[
            { value: 'Multitudes', label: 'Farmers served' },
            { value: 'Healthy', label: 'Plants delivered' },
            { value: '98%', label: 'Survival rate' },
            { value: '3 States', label: 'Across South India' },
          ].map((stat) => (
            <div key={stat.label} className="px-4 py-6 text-center sm:py-8">
              <p className="font-heading text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-white/70 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
