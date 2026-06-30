'use client'

import { useState, type FormEvent } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, Check } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const WHATSAPP_URL = 'https://wa.me/918088192674'

const contactDetails = [
  {
    icon: Phone,
    label: 'Call us',
    value: '+91 80881 92674',
    href: 'tel:+918088192674',
  },
  {
    icon: Mail,
    label: 'Email us',
    value: 'sproutwell.agritech@gmail.com',
    href: 'mailto:sproutwell.agritech@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with our team',
    href: WHATSAPP_URL,
  },
  {
    icon: MapPin,
    label: 'Visit us',
    value: 'Kochi, Kerala',
    href: 'https://www.google.com/maps/search/?api=1&query=Kochi+Kerala',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // No backend wired up yet — this simulates a submission.
    // Replace with a real API route (e.g. app/api/contact/route.ts) when ready.
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 700)
  }

  return (
    <div>
      <section className="border-b border-border bg-secondary/60 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Get in touch
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Questions about an order, a crop, or bulk pricing? Reach us
              however's easiest — we reply within a day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="flex flex-col gap-4">
              {contactDetails.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 transition-colors hover:bg-secondary"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-medium text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="block font-medium text-foreground">
                      {item.value}
                    </span>
                  </span>
                </a>
              ))}

              <div className="mt-2 overflow-hidden rounded-3xl border border-border">
                <iframe
                  title="Sproutwell location map"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.580%2C13.030%2C77.620%2C13.060&layer=mapnik&marker=13.045%2C77.600"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-leaf text-leaf-foreground">
                    <Check className="size-7" />
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    Message sent
                  </h3>
                  <p className="max-w-sm text-pretty text-sm text-muted-foreground">
                    Thanks for reaching out — our team will get back to you
                    within a day. For anything urgent, message us on
                    WhatsApp instead.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-leaf px-6 text-sm font-semibold text-leaf-foreground transition-transform hover:scale-[1.03]"
                  >
                    Open WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    Send us a message
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5 text-sm">
                      <span className="font-medium text-foreground">Name</span>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm">
                      <span className="font-medium text-foreground">Phone</span>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="+91 90000 00000"
                        className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
                      />
                    </label>
                  </div>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-medium text-foreground">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="font-medium text-foreground">
                      How can we help?
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Tell us about your crop, location and what you're looking for..."
                      className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
                  >
                    {loading ? 'Sending...' : 'Send message'}
                    {!loading && <Send className="size-4" />}
                  </button>
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to be contacted about your
                    enquiry by phone, email or WhatsApp.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
