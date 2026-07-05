'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import {
  ShoppingBag,
  Check,
  ArrowLeft,
  MessageCircle,
  Truck,
} from 'lucide-react'
import { useCart, type CartItem } from '@/components/cart/cart-provider'
import { formatPrice } from '@/lib/products'
import { Reveal } from '@/components/ui/reveal'

const WHATSAPP_URL = 'https://wa.me/918088192674'

const SERVED_STATES = ['Kerala', 'Tamil Nadu', 'Karnataka']

const SHIPPING_FLAT_FEE = 0 // farm-gate delivery, no shipping fee for now

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart()

  const [loading, setLoading] = useState(false)
  const [placedOrder, setPlacedOrder] = useState<{
    id: string
    items: CartItem[]
    total: number
  } | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (items.length === 0) return
    setLoading(true)

    const snapshotItems = items
    const snapshotTotal = subtotal + SHIPPING_FLAT_FEE
    const orderId = `SW${Date.now().toString().slice(-6)}`

    // No payment backend wired up yet — this simulates order placement.
    // Replace with a real order API + payment gateway (e.g. Razorpay) when ready.
    setTimeout(() => {
      setLoading(false)
      setPlacedOrder({ id: orderId, items: snapshotItems, total: snapshotTotal })
      clear()
    }, 700)
  }

  if (placedOrder) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center gap-4 px-4 py-20 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-leaf text-leaf-foreground">
          <Check className="size-8" />
        </span>
        <h1 className="font-heading text-3xl font-semibold text-foreground">
          Order placed!
        </h1>
        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          Your order{' '}
          <span className="font-semibold text-foreground">
            #{placedOrder.id}
          </span>{' '}
          for {formatPrice(placedOrder.total)} has been received. Our team
          will confirm availability and delivery date, and share payment
          details, over WhatsApp within a few hours.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(
              `Hi Sproutwell, I just placed order #${placedOrder.id} for ${formatPrice(
                placedOrder.total,
              )}. Please confirm the next steps.`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-leaf px-7 text-sm font-semibold text-leaf-foreground transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="size-4" /> Confirm on WhatsApp
          </a>
          <Link
            href="/shop"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-7 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center gap-4 px-4 py-20 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-secondary">
          <ShoppingBag className="size-7 text-primary" />
        </span>
        <h1 className="font-heading text-2xl font-semibold text-foreground">
          Your cart is empty
        </h1>
        <p className="text-sm text-muted-foreground">
          Add plants and farm inputs before checking out.
        </p>
        <Link
          href="/shop"
          className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Browse products
        </Link>
      </div>
    )
  }

  const total = subtotal + SHIPPING_FLAT_FEE

  return (
    <div>
      <section className="border-b border-border bg-secondary/60 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Back to shop
          </Link>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Checkout
          </h1>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            We currently deliver to farms across Kerala, Tamil Nadu and
            Karnataka. Fill in your details below and our team will confirm
            your order and delivery date on WhatsApp.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                <ShoppingBag className="size-5 text-primary" /> Order summary
              </h2>
              <ul className="mt-5 space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-3">
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      className="size-16 shrink-0 rounded-2xl border border-border object-cover"
                    />
                    <div className="flex flex-1 flex-col justify-center">
                      <p className="text-sm font-medium leading-snug text-foreground">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.size} &times; {item.quantity}
                      </p>
                    </div>
                    <span className="self-center text-sm font-semibold text-foreground">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Truck className="size-3.5" /> Delivery
                  </span>
                  <span>
                    {SHIPPING_FLAT_FEE === 0
                      ? 'Calculated on confirmation'
                      : formatPrice(SHIPPING_FLAT_FEE)}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-3 text-base font-semibold text-foreground">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-card p-6 sm:p-8"
            >
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Delivery details
              </h2>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">
                    Full name
                  </span>
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
                    placeholder="+91 80881 92674"
                    className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
                  />
                </label>
              </div>

              <label className="mt-5 flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-foreground">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
                />
              </label>

              <label className="mt-5 flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-foreground">
                  Farm / delivery address
                </span>
                <textarea
                  required
                  name="address"
                  rows={3}
                  placeholder="House/plot number, street, village or town"
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </label>

              <div className="mt-5 grid gap-5 sm:grid-cols-3">
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">City</span>
                  <input
                    required
                    type="text"
                    name="city"
                    placeholder="City / district"
                    className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
                  />
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">State</span>
                  <select
                    required
                    name="state"
                    defaultValue=""
                    className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
                  >
                    <option value="" disabled>
                      Select state
                    </option>
                    {SERVED_STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1.5 text-sm">
                  <span className="font-medium text-foreground">Pincode</span>
                  <input
                    required
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    name="pincode"
                    placeholder="682001"
                    className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
                  />
                </label>
              </div>

              <fieldset className="mt-6">
                <legend className="text-sm font-medium text-foreground">
                  Payment
                </legend>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center gap-2.5 rounded-xl border border-border px-4 py-3 text-sm text-foreground">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      defaultChecked
                      className="size-4 accent-primary"
                    />
                    Cash / UPI on delivery
                  </label>
                  <label className="flex items-center gap-2.5 rounded-xl border border-border px-4 py-3 text-sm text-foreground">
                    <input
                      type="radio"
                      name="payment"
                      value="whatsapp"
                      className="size-4 accent-primary"
                    />
                    Pay via UPI link sent on WhatsApp
                  </label>
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {loading
                  ? 'Placing order...'
                  : `Place order · ${formatPrice(total)}`}
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                By placing this order, you agree to be contacted about it by
                phone, email or WhatsApp. No payment is collected online yet
                — our team confirms details before any payment is made.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
