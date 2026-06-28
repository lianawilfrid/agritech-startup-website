'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type LocaleCode = 'en' | 'kn' | 'ta' | 'te' | 'ml'

export type Locale = {
  code: LocaleCode
  label: string
  english: string
}

export const locales: Locale[] = [
  { code: 'en', label: 'English', english: 'English' },
  { code: 'kn', label: 'ಕನ್ನಡ', english: 'Kannada' },
  { code: 'ta', label: 'தமிழ்', english: 'Tamil' },
  { code: 'te', label: 'తెలుగు', english: 'Telugu' },
  { code: 'ml', label: 'മലയാളം', english: 'Malayalam' },
]

const en = {
  'nav.shop': 'Shop',
  'nav.categories': 'Categories',
  'nav.knowledge': 'Knowledge',
  'nav.about': 'About',
  'nav.why': 'Why Us',
  'nav.contact': 'Contact',
  'nav.account': 'Account',
  'nav.expert': 'Talk to an Expert',
  'common.addToCart': 'Add to Cart',
  'common.buyNow': 'Buy Now',
  'common.shopPlants': 'Shop Plants',
} as const

export type TranslationKey = keyof typeof en

const dictionaries: Record<LocaleCode, Partial<Record<TranslationKey, string>>> =
  {
    en,
    kn: {},
    ta: {},
    te: {},
    ml: {},
  }

type LanguageContextValue = {
  locale: LocaleCode
  setLocale: (code: LocaleCode) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>('en')

  useEffect(() => {
    const stored = window.localStorage.getItem('locale') as LocaleCode | null
    if (stored && locales.some((l) => l.code === stored)) {
      setLocaleState(stored)
      document.documentElement.lang = stored
    }
  }, [])

  const setLocale = (code: LocaleCode) => {
    setLocaleState(code)
    document.documentElement.lang = code
    window.localStorage.setItem('locale', code)
  }

  const t = (key: TranslationKey) =>
    dictionaries[locale]?.[key] ?? dictionaries.en[key] ?? key

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
