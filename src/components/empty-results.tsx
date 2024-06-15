import { cn } from "@/lib/utils"
import { Bird } from "lucide-react"

export default function EmptyResult({ className }: { className?: string }) {
  return (
    <div className={cn("center size-full flex-col gap-1", className)}>
      <Bird size={64} />
      <p className="center flex-col">
        <span className="font-medium opacity-80">No results found</span>
        <span className="text-center text-sm opacity-60">
          Try search for something interesting! <br /> Bookmark a few items :)
        </span>
      </p>
    </div>
  )
}
