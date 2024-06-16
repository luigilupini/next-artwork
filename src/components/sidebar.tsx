"use client"

import { useQueryStringState } from "@/lib/hooks/use-query-string"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import BookmarkList from "./bookmark-list-layout"
import { Button } from "./common/button"
import "./shared-list-layout.css"

export default function Sidebar() {
  const { queryString } = useQueryStringState("sidebar", "close")
  const isActive = useSearchParams().get("sidebar") === "open"
  return (
    <nav className="relative h-screen">
      <AnimatePresence>
        {isActive && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 bg-opacity-50"
            />
            <motion.div
              layout
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 1 }}
              transition={{
                type: "spring",
                duration: 0.35,
              }}
              className="fixed z-50 h-screen w-80 overflow-hidden border-r bg-card text-card-foreground shadow-lg"
            >
              <Link href={queryString} className="absolute right-0 top-0">
                <Button
                  variant="ghost"
                  size="sm"
                  className="m-1 p-1"
                  data-id="close-sidebar-button"
                >
                  <X className="size-5" />
                </Button>
              </Link>
              <header className="p-4">
                <h1 className="text-xl font-bold">Bookmarks</h1>
              </header>
              <main
                className="mx-2 h-[90%] overflow-y-auto p-1"
                data-id="open-sidebar-content"
              >
                <BookmarkList />
              </main>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
