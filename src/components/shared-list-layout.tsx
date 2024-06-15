"use client"

import { type ArtProps } from "@/lib/definitions"
import { AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useOnClickOutside } from "usehooks-ts"
import ArtCard from "./art-card"
import ArtOverlay from "./art-detail-overlay"
import "./shared-list-layout.css"

type Props = {
  data: ArtProps[]
}

export default function SharedList({ data }: Props) {
  const [activeArt, setActiveArt] = useState<ArtProps | null>(null)

  const ref = useRef<HTMLDivElement>(null)
  const clickedOutside = () => setActiveArt(null)
  useOnClickOutside(ref, clickedOutside)

  useEffect(() => {
    const onKeyDown = (event: { key: string }) => {
      if (event.key === "Escape") setActiveArt(null)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <main className="flex size-full items-start justify-start gap-8 overflow-y-auto p-4">
      <AnimatePresence>
        {activeArt && <ArtOverlay ref={ref} art={activeArt} />}
      </AnimatePresence>
      <ul className="relative flex w-full flex-wrap gap-4">
        {data.map((art) => (
          <ArtCard key={art.id} art={art} setActiveArt={setActiveArt} />
        ))}
      </ul>
    </main>
  )
}
