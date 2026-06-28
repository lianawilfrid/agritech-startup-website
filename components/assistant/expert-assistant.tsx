'use client'

import { useState } from 'react'
import { Sprout, X, Send, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

type Message = { role: 'user' | 'bot'; text: string }

const suggestions = [
  'Which plant suits my land?',
  'How many plants for 3 acres?',
  'How much organic manure to apply?',
  'Why are my banana leaves yellow?',
]

const cannedAnswers: { match: string[]; answer: string }[] = [
  {
    match: ['suit', 'land', 'recommend', 'crop'],
    answer:
      'Tell me your region and soil type and I can suggest options. For well-drained loamy soils in South India, G9 tissue culture banana and Red Lady papaya are reliable, high-return choices.',
  },
  {
    match: ['acre', 'how many', 'plants', 'spacing'],
    answer:
      'At 1.8m × 1.8m spacing you fit roughly 1,200 banana plants per acre, so about 3,600 plants for 3 acres. Use our Plants per Acre calculator for exact numbers based on your spacing.',
  },
  {
    match: ['manure', 'compost', 'fertilizer', 'vermicompost'],
    answer:
      'A general base dose is 2–5 tonnes of vermicompost or FYM per acre, plus 1–2 kg per pit for tree crops. Our Organic Manure calculator gives a tailored quantity for your crop.',
  },
  {
    match: ['yellow', 'leaves', 'disease', 'pest', 'deficiency'],
    answer:
      'Yellowing banana leaves often indicate nitrogen or magnesium deficiency, or overwatering. Try a chelated micronutrient spray and check drainage. Share a photo on WhatsApp for a precise diagnosis.',
  },
]

function getAnswer(input: string) {
  const lower = input.toLowerCase()
  const found = cannedAnswers.find((a) =>
    a.match.some((m) => lower.includes(m)),
  )
  return (
    found?.answer ??
    'Great question! Our agronomists can help with that. Tap "Chat on WhatsApp" below to talk to a growing expert, or browse our Knowledge Center for detailed guides.'
  )
}

export function ExpertAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: 'Namaste! I am your Sproutwell growing assistant. Ask me about plants, spacing, manure or crop care.',
    },
  ])

  const send = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: trimmed },
      { role: 'bot', text: getAnswer(trimmed) },
    ])
    setInput('')
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open growing assistant"
        className="fixed bottom-5 right-5 z-[80] flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" /> : <Sprout className="size-6" />}
      </button>

      <div
        className={cn(
          'fixed bottom-24 right-5 z-[80] flex w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-border bg-background shadow-2xl transition-all duration-300',
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0',
        )}
      >
        <div className="flex items-center gap-3 bg-primary px-5 py-4 text-primary-foreground">
          <span className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/15">
            <Sprout className="size-5" />
          </span>
          <div>
            <p className="text-sm font-semibold">Growing Assistant</p>
            <p className="text-xs text-primary-foreground/70">
              Typically replies instantly
            </p>
          </div>
        </div>

        <div className="flex max-h-80 flex-1 flex-col gap-3 overflow-y-auto px-4 py-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={cn(
                'max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
                m.role === 'user'
                  ? 'self-end bg-primary text-primary-foreground'
                  : 'self-start bg-secondary text-secondary-foreground',
              )}
            >
              {m.text}
            </div>
          ))}
          {messages.length <= 1 && (
            <div className="mt-1 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground transition-colors hover:bg-secondary"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-border p-3">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your crop..."
              className="h-11 flex-1 rounded-full border border-border bg-card px-4 text-sm text-foreground outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Send className="size-4" />
            </button>
          </form>
          <a
            href="https://wa.me/919000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex h-10 w-full items-center justify-center gap-2 rounded-full bg-leaf text-sm font-medium text-leaf-foreground transition-colors hover:bg-leaf/90"
          >
            <MessageCircle className="size-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
