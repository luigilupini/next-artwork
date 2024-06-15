"use client"

import {
  PaginationContent,
  Pagination as PaginationControl,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/common/pagination"
import { usePathname, useSearchParams } from "next/navigation"
import MorphText from "./moph-text"

type Props = {
  pagination: {
    total: number
    current: number
    offset: number
    total_pages: number
    current_page: number
  }
}

export default function Pagination({ pagination }: Props) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1

  const handlePage = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const { total, total_pages, current_page } = pagination
  const current = String(current_page)
  return (
    <>
      {pagination.total_pages > 1 && (
        <PaginationControl>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href={handlePage(currentPage - 1)} />
              <PaginationNext href={handlePage(currentPage + 1)} />
            </PaginationItem>
          </PaginationContent>
        </PaginationControl>
      )}

      <div className="center ml-auto gap-1 text-sm">
        {pagination.total_pages > 1 && (
          <>
            Page <MorphText text={String(current)} />
            of {total_pages}
          </>
        )}
        <span className="mx-2 font-extralight">|</span>
        {total} results
      </div>
    </>
  )
}
