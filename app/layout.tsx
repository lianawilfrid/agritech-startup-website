import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/i18n/language-provider'
import { CartProvider } from '@/components/cart/cart-provider'
import { SiteHeader } from '@/components/layout/site-header'
import { SiteFooter } from '@/components/layout/site-footer'
import { CartDrawer } from '@/components/cart/cart-drawer'
import { ExpertAssistant } from '@/components/assistant/expert-assistant'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const fraunces = Fraunces({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Sproutwell — Premium Tissue Culture Plants & Farm Inputs',
    template: '%s | Sproutwell',
  },
  description:
    'Premium tissue culture plants, certified nursery seedlings and sustainable agricultural inputs delivered directly to your farm across South India.',
  generator: 'v0.app',
  keywords: [
    'tissue culture plants',
    'nursery seedlings',
    'organic saplings',
    'sustainable agricultural inputs',
    'Classic Pumps',
    'healthy seeds',
    'South India agriculture',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f8f4' },
    { media: '(prefers-color-scheme: dark)', color: '#0c1712' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>
          <CartProvider>
            <SiteHeader />
            <main className="min-h-screen">{children}</main>
            <SiteFooter />
            <CartDrawer />
            <ExpertAssistant />
          </CartProvider>
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
