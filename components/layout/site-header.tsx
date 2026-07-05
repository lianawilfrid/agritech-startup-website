'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Leaf, ShoppingBag, Menu, X, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LanguageSwitcher } from '@/components/i18n/language-switcher'
import { useLanguage } from '@/components/i18n/language-provider'
import { useCart } from '@/components/cart/cart-provider'
import { categories } from '@/lib/products'

const WHATSAPP_URL = 'https://wa.me/918088192674'

export function SiteHeader() {
  const { totalItems, openCart } = useCart()
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [catOpen, setCatOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/shop', label: t('nav.shop') },
    { href: '/knowledge', label: t('nav.knowledge') },
    { href: '/about', label: t('nav.about') },
    { href: '/why-us', label: t('nav.why') },
    { href: '/contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setCatOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-background/40 backdrop-blur-sm',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Leaf className="size-5" />
          </span>
          <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
            Sproutwell
          </span>
        </Link>

        <nav className="ml-6 hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setCatOpen(true)}
            onMouseLeave={() => setCatOpen(false)}
          >
            <button className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground">
              {t('nav.categories')}
            </button>
            {catOpen && (
              <div className="absolute left-0 top-full w-[34rem] pt-2">
                <div className="grid grid-cols-2 gap-1 rounded-3xl border border-border bg-popover p-3 shadow-xl shadow-foreground/5">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/shop/${c.slug}`}
                      className="flex items-center gap-3 rounded-2xl p-2 transition-colors hover:bg-secondary"
                    >
                      <img
                        src={c.image || '/placeholder.svg'}
                        alt=""
                        className="size-11 rounded-xl object-cover"
                      />
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">
                          {c.name}
                        </span>
                        <span className="line-clamp-1 text-xs text-muted-foreground">
                          {c.tagline}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground',
                pathname === link.href
                  ? 'text-foreground'
                  : 'text-foreground/80',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center justify-center rounded-full bg-leaf px-4 text-sm font-medium text-leaf-foreground transition-colors hover:bg-leaf/90 xl:inline-flex"
          >
            {t('nav.expert')}
          </a>
          <LanguageSwitcher />
          <Link
            href="/account"
            aria-label={t('nav.account')}
            className="hidden size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary sm:flex"
          >
            <User className="size-4" />
          </Link>
          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
          >
            <ShoppingBag className="size-4" />
            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-leaf text-[10px] font-semibold text-leaf-foreground">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            <Link
              href="/shop"
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              {t('header.shopAll')}
            </Link>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/account"
              className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              {t('nav.account')}
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex h-11 items-center justify-center rounded-full bg-leaf text-sm font-medium text-leaf-foreground transition-colors hover:bg-leaf/90"
            >
              {t('nav.expert')}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
