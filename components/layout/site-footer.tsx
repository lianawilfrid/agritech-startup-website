import Link from 'next/link'
import { Leaf, MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { categories } from '@/lib/products'

const footerNav = [
  {
    title: 'Shop',
    links: categories.slice(0, 6).map((c) => ({
      label: c.name,
      href: `/shop/${c.slug}`,
    })),
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Why Choose Us', href: '/why-us' },
      { label: 'Plant Warranty', href: '/warranty' },
      { label: 'Knowledge Center', href: '/knowledge' },
      { label: 'Become a Dealer', href: '/dealers' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Track Order', href: '/track' },
      { label: 'Contact', href: '/contact' },
      { label: 'My Account', href: '/account' },
      { label: 'Calculators', href: '/calculators' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Leaf className="size-5" />
              </span>
              <span className="font-heading text-xl font-semibold text-foreground">
                Sproutwell
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Premium tissue culture plants, certified seedlings and sustainable
              farm inputs delivered directly to your farm across South India.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              <p className="flex items-center gap-2.5">
                <MapPin className="size-4 text-primary" /> Hebbal, Bengaluru,
                Karnataka 560024
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="size-4 text-primary" /> +91 90000 00000
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="size-4 text-primary" /> hello@sproutwell.in
              </p>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sproutwell AgriTech Pvt. Ltd. All rights
            reserved.
          </p>
          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-leaf px-4 py-2 text-sm font-medium text-leaf-foreground transition-colors hover:bg-leaf/90"
          >
            <MessageCircle className="size-4" /> WhatsApp Support
          </a>
        </div>
      </div>
    </footer>
  )
}
