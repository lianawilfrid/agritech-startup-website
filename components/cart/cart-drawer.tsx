'use client'

import Link from 'next/link'
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react'
import { useCart } from './cart-provider'
import { formatPrice } from '@/lib/products'
import { cn } from '@/lib/utils'

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    updateQuantity,
    removeItem,
    subtotal,
    totalItems,
  } = useCart()

  return (
    <>
      <div
        aria-hidden={!isOpen}
        onClick={closeCart}
        className={cn(
          'fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={cn(
          'fixed right-0 top-0 z-[70] flex h-dvh w-full max-w-md flex-col bg-background shadow-2xl transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
            <ShoppingBag className="size-5 text-primary" /> Your Cart
            {totalItems > 0 && (
              <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                {totalItems}
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <X className="size-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-secondary">
              <ShoppingBag className="size-7 text-primary" />
            </span>
            <div>
              <p className="font-medium text-foreground">Your cart is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Add plants and farm inputs to get started.
              </p>
            </div>
            <Link
              href="/shop"
              onClick={closeCart}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-3">
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      className="size-20 shrink-0 rounded-2xl border border-border object-cover"
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-medium leading-snug text-foreground">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.size}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          aria-label="Remove item"
                          className="text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-1 rounded-full border border-border p-0.5">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                            className="flex size-7 items-center justify-center rounded-full transition-colors hover:bg-secondary"
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                            className="flex size-7 items-center justify-center rounded-full transition-colors hover:bg-secondary"
                          >
                            <Plus className="size-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-foreground">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border px-5 py-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-foreground">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={closeCart}
                className="mt-2 w-full text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
