'use client'

import Link from 'next/link'
import { ArrowRight, MessageCircle, ShieldCheck, Truck, Sprout } from 'lucide-react'
import { useLanguage } from '@/components/i18n/language-provider'

export function Hero() {
  const { t } = useLanguage()

  const badges = [
    { icon: ShieldCheck, label: t('hero.survivalWarranty') },
    { icon: Truck, label: t('hero.farmDelivery') },
    { icon: Sprout, label: t('hero.expertSupport') },
  ]

  const stats = [
    { value: '50,000+', label: t('hero.statsFarmers') },
    { value: '1.2M+', label: t('hero.statsPlants') },
    { value: '98%', label: t('hero.statsSurvival') },
    { value: '5 States', label: t('hero.statsStates') },
  ]

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
            <Sprout className="size-4" /> {t('hero.badge')}
          </span>
          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
            {t('hero.title1')}
            <br />
            {t('hero.title2')}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85">
            {t('hero.subtitle')}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-leaf px-7 py-3.5 text-base font-semibold text-leaf-foreground transition-transform hover:scale-[1.02]"
            >
              {t('common.shopPlants')} <ArrowRight className="size-5" />
            </Link>
            <a
              href="https://wa.me/919000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <MessageCircle className="size-5" /> {t('nav.expert')}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {badges.map((item) => (
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
          {stats.map((stat) => (
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
