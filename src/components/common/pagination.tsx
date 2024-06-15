import { cn } from "@/lib/utils"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import { ComponentProps, forwardRef } from "react"
import { ButtonProps, buttonVariants } from "./button"

const Pagination = ({ className, ...props }: ComponentProps<"nav">) => (
  <nav role="navigation" className={cn("center", className)} {...props} />
)
Pagination.displayName = "Pagination"

const PaginationContent = forwardRef<HTMLUListElement, ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("flex flex-row items-center", className)}
      {...props}
    />
  ),
)
PaginationContent.displayName = "PaginationContent"

const PaginationItem = forwardRef<HTMLLIElement, ComponentProps<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("between gap-2", className)} {...props} />
  ),
)
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<ButtonProps, "size"> &
  ComponentProps<typeof Link>

const PaginationLink = ({
  className,
  isActive,
  size = "sm",
  ...props
}: PaginationLinkProps) => (
  <Link
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    size="default"
    className={cn("w-28 gap-1 border pl-2.5", className)}
    {...props}
  >
    <ChevronLeftIcon className="size-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    size="default"
    className={cn("w-28 gap-1 border pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRightIcon className="size-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
