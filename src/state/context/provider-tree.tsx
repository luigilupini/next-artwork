"use client"

import { PropsWithChildren } from "react"

import { useMounted } from "@/lib/hooks/use-mounted"
import ThemeProvider from "@/state/context/leaf/theme"

const ProviderTree = ({ children }: PropsWithChildren) => {
  const mounted = useMounted()
  if (!mounted) return null
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}

export default ProviderTree
