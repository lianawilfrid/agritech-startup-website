import type { Metadata } from 'next'
import { Leaf, Microscope, Users, MapPin, Award, Sprout } from 'lucide-react'
import { Reveal } from '@/components/ui/reveal'
import { CtaBanner } from '@/components/home/cta-banner'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Sproutwell has supplied lab-certified tissue culture plants and sustainable farm inputs across South India since 2016.',
}

const values = [
  {
    icon: Microscope,
    title: 'Lab-certified quality',
    text: 'Every batch of tissue culture material is screened for disease before it leaves the nursery.',
  },
  {
    icon: Sprout,
    title: 'Sustainable inputs',
    text: 'We favour and recommend organic manure, biofertilizers and vermicompost over synthetic shortcuts wherever possible.',
  },
  {
    icon: Users,
    title: 'Farmer-first support',
    text: 'Free growing guidance over WhatsApp from transplant to first harvest, not just a sale.',
  },
  {
    icon: Award,
    title: 'Survival guarantee',
    text: 'All saplings are guaranteed to provide good yield if instructions and our growing guidelines are followed.',
  },
]

const timeline = [
  {
    year: '2016',
    title: 'Founded in Kochi, Kerala',
    text: 'Started as a small tissue culture organization supplying banana plantlets to growers in Kerala.',
  },
  {
    year: '2018',
    title: 'Expanded into fruit & vegetable seedlings',
    text: 'Added grafted fruit saplings and pro-tray vegetable seedlings to serve mixed-crop farms.',
  },
  {
    year: '2021',
    title: 'Began distributing to farmers in Karnataka too',
    text: 'Introduced tissue culture and vegetable saplings and seeds to farmers in Karnataka.',
  },
  {
    year: '2024',
    title: 'Crossed 3 states served',
    text: 'Began farm delivery across Karnataka, Tamil Nadu and Kerala.',
  },
]

const sourcingSteps = [
  {
    step: '01',
    title: 'Mother plant selection',
    text: 'Disease-free mother plants are selected and tested before any culturing begins at the nurseries we source from.',
  },
  {
    step: '02',
    title: 'Lab propagation',
    text: 'Material is multiplied under sterile lab conditions to guarantee genetic uniformity at these same source nursery labs.',
  },
  {
    step: '03',
    title: 'Hardening',
    text: 'Plantlets are gradually acclimatised to field conditions.',
  },
  {
    step: '04',
    title: 'Quality check & dispatch',
    text: 'A final health check before packing ensures only strong, transplant-ready material ships out directly to your farms.',
  },
]

const founders = [
  { name: 'Based in Kochi', role: 'Co-founder & Head of Agronomy' },
  { name: 'Based in Kannur', role: 'Co-founder & Operations' },
]

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <img
            src="/images/about-team.png"
            alt="Sproutwell team at the nursery"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06160e]/85 via-[#06160e]/55 to-[#06160e]/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <Leaf className="size-4" /> Certified planting material since 2016
            </span>
            <h1 className="mt-6 max-w-2xl font-heading text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Helping farms across South India grow, one plant at a time
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
              We're a tissue culture plant and farm input supplier built around
              one belief — that growers deserve disease-free planting material
              and honest support, not just another invoice.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h2 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              Our mission
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              To make lab-certified planting material and sustainable farm
              inputs accessible to every grower — from a half-acre kitchen
              garden to a multi-acre commercial plantation — backed by
              guidance that doesn't stop at delivery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              What we stand for
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <v.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-semibold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/60 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              Our journey
            </h2>
          </Reveal>
          <div className="mt-12 space-y-10 border-l border-border pl-8">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 80}>
                <div className="relative">
                  <span className="absolute -left-[2.55rem] flex size-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {item.year.slice(2)}
                  </span>
                  <p className="text-sm font-semibold text-primary">
                    {item.year}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              How our planting material is made
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sourcingSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 60}>
                <div className="rounded-3xl border border-border bg-card p-6">
                  <span className="font-heading text-3xl font-semibold text-primary/30">
                    {s.step}
                  </span>
                  <h3 className="mt-3 font-heading text-base font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-semibold text-foreground sm:text-3xl">
              Founders
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 80}>
                <div className="flex items-center gap-4 rounded-3xl border border-border bg-card p-6">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Leaf className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {f.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {f.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" /> Kochi, Kerala
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </div>
  )
}
