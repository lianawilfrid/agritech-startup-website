import type { Metadata } from 'next'
import { Check, X, ShieldCheck, Microscope, Truck, Headphones } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { CtaBanner } from '@/components/home/cta-banner'

export const metadata: Metadata = {
  title: 'Why Choose Sproutwell',
  description:
    'See how Sproutwell compares to a typical local nursery on certification, survival guarantee, delivery and growing support.',
}

const stats = [
  { value: 'Multitudes', label: 'Plants delivered' },
  { value: '98%', label: 'Average survival rate' },
  { value: '3', label: 'States served' },
  { value: '2016', label: 'Operating since' },
]

const comparison: { feature: string; sproutwell: boolean | string; typical: boolean | string }[] = [
  { feature: 'Lab-certified, virus-indexed material', sproutwell: true, typical: false },
  { feature: 'Survival guarantee', sproutwell: true, typical: false },
  { feature: 'Agronomist support after delivery', sproutwell: true, typical: false },
  { feature: 'Farm-gate delivery', sproutwell: true, typical: 'Pickup only' },
  { feature: 'WhatsApp order tracking & support', sproutwell: true, typical: false },
  { feature: 'Documented growing guide per product', sproutwell: true, typical: false },
  { feature: 'Bulk / wholesale pricing', sproutwell: true, typical: true },
]

const pillars = [
  {
    icon: Microscope,
    title: 'Science-backed sourcing',
    text: 'Mother plants are disease-screened before propagation, not after complaints come in.',
  },
  {
    icon: ShieldCheck,
    title: 'Guaranteed survival that means something',
    text: 'Our plants don\u2019t just survive, they thrive.',
  },
  {
    icon: Truck,
    title: 'Logistics built for live plants',
    text: 'Packing and transit timing designed around plant stress, not generic courier handling.',
  },
  {
    icon: Headphones,
    title: 'Support that outlasts the sale',
    text: 'Our agronomists stay reachable on WhatsApp through the whole growing season, not just at checkout.',
  },
]

export default function WhyUsPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/60 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Why farmers choose Sproutwell
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Not every nursery backs its planting material the same way.
              Here's what's actually different about ordering from us.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 60}>
                <div className="rounded-3xl border border-border bg-card p-6 text-center">
                  <p className="font-heading text-3xl font-semibold text-primary sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              Sproutwell vs. a typical local nursery
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 overflow-x-auto rounded-3xl border border-border bg-card">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-6 py-4 font-medium text-muted-foreground">
                      Feature
                    </th>
                    <th className="px-6 py-4 font-semibold text-primary">
                      Sproutwell
                    </th>
                    <th className="px-6 py-4 font-medium text-muted-foreground">
                      Typical nursery
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? 'bg-transparent' : 'bg-secondary/40'}
                    >
                      <td className="px-6 py-4 text-foreground">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4">
                        {typeof row.sproutwell === 'string' ? (
                          <span className="font-medium text-foreground">
                            {row.sproutwell}
                          </span>
                        ) : row.sproutwell ? (
                          <Check className="size-5 text-leaf" />
                        ) : (
                          <X className="size-5 text-muted-foreground/50" />
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {typeof row.typical === 'string' ? (
                          <span className="text-muted-foreground">
                            {row.typical}
                          </span>
                        ) : row.typical ? (
                          <Check className="size-5 text-muted-foreground" />
                        ) : (
                          <X className="size-5 text-muted-foreground/50" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/60 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              What actually backs that up
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <p.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
