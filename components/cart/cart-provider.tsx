'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type CartItem = {
  id: string
  slug: string
  name: string
  image: string
  size: string
  price: number
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (item: Omit<CartItem, 'id'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clear: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'sproutwell-cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored) setItems(JSON.parse(stored))
    } catch {
      // ignore
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }
  }, [items, hydrated])

  const addItem: CartContextValue['addItem'] = (item) => {
    setItems((prev) => {
      const existing = prev.find(
        (p) => p.slug === item.slug && p.size === item.size,
      )
      if (existing) {
        return prev.map((p) =>
          p.id === existing.id
            ? { ...p, quantity: p.quantity + item.quantity }
            : p,
        )
      }
      return [
        ...prev,
        { ...item, id: `${item.slug}-${item.size}-${Date.now()}` },
      ]
    })
    setIsOpen(true)
  }

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((p) => p.id !== id))

  const updateQuantity = (id: string, quantity: number) =>
    setItems((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: Math.max(1, quantity) } : p,
      ),
    )

  const clear = () => setItems([])

  const { totalItems, subtotal } = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        acc.totalItems += item.quantity
        acc.subtotal += item.price * item.quantity
        return acc
      },
      { totalItems: 0, subtotal: 0 },
    )
  }, [items])

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
        removeItem,
        updateQuantity,
        clear,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
