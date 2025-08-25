import type { ReactNode } from 'react'

interface HomeLayoutProps {
  children: ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 pt-16 pb-12">
      {children}
    </main>
  )
}
