"use client"

import { type ArtProps } from "@/lib/definitions"
import { motion } from "framer-motion"
import { MoreHorizontal } from "lucide-react"

type ArtCardProps = {
  art: ArtProps
  setActiveArt: (art: ArtProps) => void
}

export default function ArtCard({ art, setActiveArt }: ArtCardProps) {
  if (!art.thumbnail) return null
  const { id, image_id, title, artist_title, date_display } = art
  return (
    <motion.li
      layoutId={`card-${id}`}
      key={id}
      onClick={() => setActiveArt(art)}
      style={{ borderRadius: 8 }}
      className="between flex-[1_0_300px] cursor-pointer gap-1 overflow-hidden border p-2 shadow-sm"
      whileHover={{
        boxShadow: "0 0 0 2px hsl(var(--primary) / 0.25)",
      }}
    >
      <motion.img
        layoutId={`image-${id}`}
        src={`https://www.artic.edu/iiif/2/${image_id}/full/200,/0/default.jpg`}
        style={{ borderRadius: 12 }}
        className="aspect-1 size-10 object-cover"
      />
      <div className="flex-1 overflow-hidden p-2">
        <div className="min-w-0 flex-1">
          <motion.h2 layoutId={`title-${id}`} className="art-title truncate">
            {title}
          </motion.h2>
          <motion.p
            layoutId={`description-${id}`}
            className="art-description truncate"
          >
            {artist_title} - {date_display}
          </motion.p>
        </div>
      </div>
      <motion.button layoutId={`button-${id}`} className="ml-2">
        <MoreHorizontal size={18} className="opacity-40 hover:opacity-100" />
      </motion.button>
    </motion.li>
  )
}
