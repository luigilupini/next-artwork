"use client"

import { ArtProps } from "@/lib/definitions"
import { useQueryStringState } from "@/lib/hooks/use-query-string"
import { Bookmark } from "lucide-react"
import Link from "next/link"
import { useReadLocalStorage } from "usehooks-ts"
import BadgeAmount from "./badge-amount"
import { Button } from "./common/button"

export default function BookmarkCart() {
  const { queryString } = useQueryStringState("sidebar", "open")
  const bookmarks = useReadLocalStorage<ArtProps[]>("bookmarks")
  return (
    <Link href={queryString}>
      <Button size="sm" variant="outline" className="relative shadow-none">
        <Bookmark className="mr-1 size-3" />
        Bookmarks
        {bookmarks && <BadgeAmount amount={bookmarks.length} />}
      </Button>
    </Link>
  )
}
