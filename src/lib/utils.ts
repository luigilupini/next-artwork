import clsx, { ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const delay = (time: number, callback?: () => void): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
      if (callback) callback()
    }, time)
  })
}

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
