import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export const clsxm = (...args: string[]) => {
  return twMerge(clsx(args))
}