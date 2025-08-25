import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type CharacterContainerProps = {
  children: ReactNode
  className?: string
  id?: string
}

export default function CharacterContainer({
  children,
  className,
  id,
}: CharacterContainerProps) {
  return (
    <main
      id={id}
      className={cn(
        'flex items-center justify-center text-xl font-bold border-2 border-black bg-white',
        className,
      )}
    >
      {children}
    </main>
  )
}
