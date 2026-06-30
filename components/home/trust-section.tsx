import {
  BadgeCheck,
  Sprout,
  Truck,
  Headphones,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'

const items = [
  {
    icon: BadgeCheck,
    title: 'Genuine Certified Material',
    desc: 'Lab-tested, virus-indexed and true-to-type planting stock.',
  },
  {
    icon: Sprout,
    title: 'Direct From Trusted Nurseries',
    desc: 'Sourced from high-quality trusted nurseries and labs.',
  },
  {
    icon: Truck,
    title: 'Farm Delivery Across South India',
    desc: 'Cold-chain ready logistics to your farm gate.',
  },
  {
    icon: Headphones,
    title: 'Expert Growing Support',
    desc: 'Agronomists guide you from planting to harvest.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Assistance',
    desc: 'Quick answers and crop diagnosis on chat.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Payments',
    desc: 'UPI, cards, net banking available.',
  },
]

export function TrustSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-leaf">
            Why farmers trust us
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
            Built on quality, science and genuine support
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 60}
              className="group flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="size-6" />
              </span>
              <div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
