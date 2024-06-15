"use client"

import { DetailProps, type ArtProps } from "@/lib/definitions"
import { motion } from "framer-motion"
import { PropsWithChildren, forwardRef, useState } from "react"
import BookmarkButton from "./bookmark-button"
import StarCounter from "./star-counter"

import { cn, delay } from "@/lib/utils"
import { getArt } from "@/server/api"
import ArtDetailCard from "./art-detail-card"
import FluidSpinner from "./loader/fluid"
import "./shared-list-layout.css"

type OverlayProps = {
  art: ArtProps
}

const ArtOverlay = forwardRef<HTMLDivElement, OverlayProps>(({ art }, ref) => {
  const [artDetail, setArtDetail] = useState<DetailProps | null>(null)
  const [loading, setLoading] = useState(false)

  const { id, _score, image_id, title, artist_title, date_display, thumbnail } =
    art

  const handleClick = async (id: number) => {
    setLoading(true)
    await delay(500)
    const response = await getArt(id)
    setLoading(false)
    setArtDetail(response.data)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="overlay"
      />
      <div className="active-art">
        <motion.div
          layoutId={`card-${id}`}
          className="inner"
          ref={ref}
          style={{ borderRadius: 12 }}
        >
          <div className="header">
            <motion.img
              layoutId={`image-${id}`}
              src={`https://www.artic.edu/iiif/2/${image_id}/full/200,/0/default.jpg`}
              style={{ borderRadius: 12 }}
              className="size-20 object-cover"
            />
            <div className="header-inner">
              <div className="content-wrapper">
                <motion.h2
                  layoutId={`title-${id}`}
                  className="art-title"
                  initial={{ filter: "blur(8px)" }}
                  animate={{ filter: "blur(0px)" }}
                  exit={{ filter: "blur(8px)" }}
                >
                  {title}
                </motion.h2>
                <motion.p
                  layoutId={`description-${id}`}
                  className="art-description"
                >
                  {artist_title} - {date_display}
                </motion.p>
              </div>
              <motion.div layoutId={`button-${id}`}>
                <BookmarkButton art={art} />
              </motion.div>
            </div>
          </div>

          <Slot className="long-description">{thumbnail.alt_text}</Slot>
          <Slot className="more-detail">
            <button
              onClick={() => handleClick(id)}
              className={cn("center gap-1 font-medium", {
                "text-primary": loading,
              })}
              disabled={loading}
            >
              {loading ? "Please Wait" : "Move Details"}
              {loading && <FluidSpinner className="ml-1 size-3" />}
            </button>
            <ArtDetailCard artDetail={artDetail} />
          </Slot>
          <Slot className="score">
            <StarCounter score={_score} /> <span className="font-light">|</span>
            Score: {_score.toFixed(0)}%
          </Slot>
        </motion.div>
      </div>
    </>
  )
})
ArtOverlay.displayName = "ArtOverlay"

export default ArtOverlay

const Slot = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.05 } }}
    className={className}
  >
    {children}
  </motion.div>
)
