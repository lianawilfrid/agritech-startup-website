'use client'

import { useEffect, useRef, useState } from 'react'
import { Globe, Check, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { locales, useLanguage } from './language-provider'

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const active = locales.find((l) => l.code === locale)

  return (
    <div ref={ref} className={cn('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
      >
        <Globe className="size-4 text-primary" />
        <span className="hidden sm:inline">{active?.label}</span>
        <ChevronDown
          className={cn(
            'size-3.5 text-muted-foreground transition-transform',
            open && 'rotate-180',
          )}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-border bg-popover p-1.5 shadow-xl shadow-foreground/5"
        >
          {locales.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={l.code === locale}
              onClick={() => {
                setLocale(l.code)
                setOpen(false)
              }}
              className={cn(
                'flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors hover:bg-secondary',
                l.code === locale && 'bg-secondary',
              )}
            >
              <span className="flex flex-col">
                <span className="font-medium text-foreground">{l.label}</span>
                <span className="text-xs text-muted-foreground">
                  {l.english}
                </span>
              </span>
              {l.code === locale && (
                <Check className="size-4 text-primary" aria-hidden />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
