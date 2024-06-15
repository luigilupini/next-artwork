"use client"

import { cn } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"
import queryString from "query-string"
import { useEffect, useState } from "react"
import { Button } from "./common/button"

export default function Controls() {
  const [toggle, setToggle] = useState({
    field: "public",
    value: true,
  })

  const router = useRouter()
  const searchParams = useSearchParams()

  const updateQueryParams = (newToggle: { field: string; value: boolean }) => {
    const currentParams = queryString.parse(searchParams.toString())
    const updatedParams = {
      ...currentParams,
      field: newToggle.field,
      value: newToggle.value,
    }
    const queryParams = queryString.stringify(updatedParams)
    router.push(`?${queryParams}`)
  }

  const onPublic = () => {
    const newToggle = {
      field: "public",
      value: toggle.field === "public" ? !toggle.value : true,
    }
    setToggle(newToggle)
  }

  const onView = () => {
    const newToggle = {
      field: "view",
      value: toggle.field === "view" ? !toggle.value : true,
    }
    setToggle(newToggle)
  }

  useEffect(() => {
    const currentParams = queryString.parse(searchParams.toString())
    if (currentParams.field && currentParams.value) {
      setToggle({
        field: currentParams.field as string,
        value: currentParams.value === "true",
      })
    }
  }, [searchParams])

  useEffect(() => {
    updateQueryParams(toggle)
  }, [toggle])

  return (
    <div className="center gap-2">
      <Button
        variant="outline"
        size="sm"
        className={cn("center relative w-20 gap-1 shadow-none", {
          "opacity-60": toggle.field !== "public",
        })}
        onClick={onPublic}
      >
        {toggle.field === "public" ? "Public" : "Inactive"}
        {toggle.field === "public" && <Dot value={toggle.value} />}
      </Button>

      <Button
        variant="outline"
        size="sm"
        className={cn("center relative w-20 gap-1 shadow-none", {
          "opacity-60": toggle.field !== "view",
        })}
        onClick={onView}
      >
        {toggle.field === "view" ? "View" : "Inactive"}
        {toggle.field === "view" && <Dot value={toggle.value} />}
      </Button>
    </div>
  )
}

const Dot = ({ value }: { value?: boolean }) => (
  <span
    className={cn(
      "size-[6px] rounded-full border transition-colors duration-300 ease-in-out",
      {
        "border-success/80 bg-success/60": value,
        "border-destructive/80 bg-destructive/60": !value,
      },
    )}
  />
)
