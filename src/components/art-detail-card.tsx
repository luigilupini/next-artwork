"use client"

import { AnimatePresence, motion } from "framer-motion"
import { PropsWithChildren } from "react"

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
              <Slot title="Credit Line:">{credit_line || "N/A"}</Slot>
              <Slot title="Description:">{short_description || "N/A"}</Slot>
              <Slot title="Exhibition History:">
                {exhibition_history || "N/A"}
              </Slot>
              <Slot title="Origin:">{place_of_origin || "N/A"}</Slot>
              <Slot title="Source:">
                <span className="text-primary">Art Institute of Chicago</span>
              </Slot>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const Slot = ({
  children,
  title,
  className,
}: PropsWithChildren<{ title?: string; className?: string }>) => (
  <p className={className}>
    <span className="mr-1 font-semibold">{title}</span>
    {children}
  </p>
)
