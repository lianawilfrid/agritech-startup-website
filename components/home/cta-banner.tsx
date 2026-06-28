'use client'

import Link from 'next/link'
import { Reveal } from '@/components/ui/reveal'
import { useLanguage } from '@/components/i18n/language-provider'

const WHATSAPP_URL = 'https://wa.me/919900000000'

export function CtaBanner() {
  const { t } = useLanguage()

  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-leaf px-6 py-14 text-center text-leaf-foreground md:px-16 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[var(--color-leaf-foreground)]/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[var(--color-leaf-foreground)]/10"
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-serif text-3xl font-semibold text-balance md:text-4xl">
                {t('cta.title')}
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-leaf-foreground/85 md:text-lg">
                {t('cta.subtitle')}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/shop"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-leaf-foreground)] px-8 text-sm font-semibold text-leaf transition-transform hover:scale-[1.03]"
                >
                  {t('cta.shop')}
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--color-leaf-foreground)]/40 px-8 text-sm font-semibold text-leaf-foreground transition-colors hover:bg-[var(--color-leaf-foreground)]/10"
                >
                  {t('cta.expert')}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
