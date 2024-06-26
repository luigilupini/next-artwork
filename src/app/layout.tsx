import { karla } from "@/lib/typeface/fonts"
import { cn } from "@/lib/utils"
import ProviderTree from "@/state/context/provider-tree"
import { PropsWithChildren, Suspense } from "react"

import FluidSpinner from "@/components/loader/fluid"
import Sidebar from "@/components/sidebar"
import "@/styles/globals.css"

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={cn("antialiased", karla.className)}
      suppressHydrationWarning
    >
      <body className="relative h-screen w-screen overflow-hidden bg-background text-foreground">
        <ProviderTree>
          <main className="between size-full">
            <Suspense fallback={<FluidSpinner />}>
              <Sidebar />
              {children}
            </Suspense>
          </main>
        </ProviderTree>
      </body>
    </html>
  )
}
