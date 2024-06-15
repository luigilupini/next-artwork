"use client"

import { ArtProps } from "@/lib/definitions"
import { motion } from "framer-motion"
import { Trash2 } from "lucide-react"
import Image from "next/image"
import { useLocalStorage } from "usehooks-ts"
import EmptyResult from "./empty-results"

export default function BookmarkList() {
  const [bookmarks, setBookmarks] = useLocalStorage<ArtProps[]>("bookmarks", [])

  const handleRemove = (id: number) => {
    setBookmarks((prev) => prev.filter((art) => art.id !== id))
  }

  return (
    <ul className="space-y-2">
      {bookmarks.map((art) => (
        <motion.li layout key={art.id} className="flex items-center gap-3 p-1">
          <Image
            width={50}
            height={50}
            src={`https://www.artic.edu/iiif/2/${art.image_id}/full/200,/0/default.jpg`}
            className="size-8 rounded-md object-cover"
            alt={art.title}
            priority
          />
          <div className="min-w-0 flex-1">
            <motion.h2 className="truncate text-xs font-medium">
              {art.title}
            </motion.h2>
            <motion.p className="art-description">
              {art.artist_title} - {art.date_display}
            </motion.p>
          </div>
          <motion.div
            onClick={() => handleRemove(art.id)}
            className="cursor-pointer"
          >
            <Trash2
              size={14}
              className="ml-4 opacity-60 transition-all duration-300 ease-in-out hover:text-destructive"
            />
          </motion.div>
        </motion.li>
      ))}
      {bookmarks.length === 0 && (
        <EmptyResult className="mt-[50%] opacity-90" />
      )}
    </ul>
  )
}
