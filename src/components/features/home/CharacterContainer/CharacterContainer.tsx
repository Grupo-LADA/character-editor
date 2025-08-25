import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type CharacterContainerProps = {
  children: ReactNode
  className?: string
  id?: string
  key?: string
  direction?: 'increase' | 'decrease'
}

const variants = {
  enter: (direction: 'increase' | 'decrease') => ({
    x: direction === 'increase' ? -100 : 100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: 'increase' | 'decrease') => ({
    x: direction === 'increase' ? 100 : -100,
    opacity: 0,
  }),
}

export default function CharacterContainer({
  children,
  className,
  id,
  key,
  direction = 'increase',
}: CharacterContainerProps) {
  return (
    <motion.div
      key={key}
      id={id}
      className={cn(
        'flex items-center justify-center text-xl font-bold border-2 border-black bg-white',
        className,
      )}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
