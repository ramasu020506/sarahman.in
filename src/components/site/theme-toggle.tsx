'use client'

import { useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  // Lazy initializer — runs once on the client (after hydration).
  // Safe because on first render isDark is false (matches SSR),
  // then the lazy initializer reads the actual DOM state on mount.
  const [isDark, setIsDark] = useState<boolean>(false)

  // After mount, sync with the real DOM state (set by inline script in layout).
  // Use queueMicrotask to defer the update out of the render phase.
  if (typeof window !== "undefined" && isDark === false) {
    const domDark = document.documentElement.classList.contains("dark")
    if (domDark) {
      // Schedule state update for next tick to avoid render-phase setState
      queueMicrotask(() => setIsDark(true))
    }
  }

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all hover:shadow-md"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
