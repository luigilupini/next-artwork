"use client"

import { cn } from "@/lib/utils"
import { SearchIcon } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { Input } from "./input"

type Props = {
  enable?: boolean
  queryString: string
  placeholder?: string
  className?: string
}

export default function Search({
  enable = true,
  queryString,
  placeholder = "Search",
  className,
}: Props) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) params.set(queryString, term)
    else params.delete(queryString)
    params.delete("page")
    router.replace(`${pathname}?${params.toString()}`)
  }, 250)

  return (
    <div
      className={cn(
        "relative flex w-72 items-center justify-center gap-2",
        className,
      )}
    >
      <Input
        disabled={!enable}
        type="search"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get(queryString)?.toString()}
        className="peer w-full pl-9 text-sm shadow-none placeholder:font-light focus-visible:border-primary/80 focus-visible:ring-1 focus-visible:ring-primary/80"
      />
      <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-foreground/60 peer-focus:text-primary" />
    </div>
  )
}
