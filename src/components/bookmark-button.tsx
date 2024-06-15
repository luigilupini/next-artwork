"use client"

import { Button } from "@/components/common/button"
import { ArtProps } from "@/lib/definitions"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { Bookmark, Check } from "lucide-react"
import { useState } from "react"
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts"

const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
}

type Props = {
  art: ArtProps
}

export default function BookmarkButton({ art }: Props) {
  const [copied, setCopied] = useState(false)
  const [value, setValue] = useLocalStorage<ArtProps[]>("bookmarks", [])

  let isBookmarked
  const bookmarks = useReadLocalStorage("bookmarks") as ArtProps[]
  if (bookmarks) {
    isBookmarked = bookmarks.some((bookmark) => bookmark.id === art.id)
  }

  const copy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
    if (art) setValue([art, ...value])
  }

  return (
    <main className="ml-2">
      <Button
        onClick={copy}
        size="icon"
        variant="ghost"
        disabled={isBookmarked}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="checkmark"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Check size={18} />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Bookmark
                size={18}
                className={cn(isBookmarked && "fill-primary text-primary")}
              />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </main>
  )
}
