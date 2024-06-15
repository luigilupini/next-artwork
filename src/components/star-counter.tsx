import { Star } from "lucide-react"

const calculateStars = (score: number) => {
  let filledStars

  if (score <= 20) {
    filledStars = 1
  } else if (score <= 30) {
    filledStars = 2
  } else if (score <= 65) {
    filledStars = 3
  } else if (score <= 100) {
    filledStars = 4
  } else {
    filledStars = 5
  }

  return filledStars
}

export default function StarCounter({ score }: { score: number }) {
  return (
    <div className="center gap-1">
      {Array.from({ length: calculateStars(score) }, (_, i) => (
        <Star key={i} size={12} className="fill-warning/20 text-warning/80" />
      ))}
    </div>
  )
}
