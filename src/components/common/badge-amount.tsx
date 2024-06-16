"use client"

import { motion } from "framer-motion"

export default function BadgeAmount({ amount }: { amount: number }) {
  if (!amount) return null
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
      className="absolute -right-1 -top-1 flex size-4 transform items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground"
    >
      {amount}
    </motion.div>
  )
}
