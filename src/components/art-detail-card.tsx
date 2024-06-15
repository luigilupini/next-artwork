"use client"

import { AnimatePresence, motion } from "framer-motion"

export default function ArtDetailCard({ artDetail }: any) {
  if (!artDetail) return null
  const {
    credit_line,
    exhibition_history,
    place_of_origin,
    short_description,
  } = artDetail
  return (
    <>
      <motion.span
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
        className="absolute bottom-0 left-0 right-0 top-0 size-full"
      />

      <AnimatePresence>
        {artDetail && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{
              opacity: 0,
              height: 0,
              transition: { duration: 0.25 },
            }}
            className="w-full overflow-hidden"
          >
            <div className="art-description flex flex-col gap-1 py-2">
              <p>
                <span className="mr-1 font-semibold">Credit Line:</span>
                {credit_line || "Unknown"}
              </p>
              <p>
                <span className="mr-1 font-semibold">Description:</span>
                {short_description || "Unknown"}
              </p>
              <p>
                <span className="mr-1 font-semibold">Exhibition History:</span>
                {exhibition_history || "Unknown"}
              </p>

              <p>
                <span className="mr-1 font-semibold">Origin:</span>
                {place_of_origin || "Unknown"}
              </p>
              <p>
                <span className="mr-1 font-semibold">Source:</span>
                <span className="text-primary">Art Institute of Chicago</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
