import type { CharacterComponentHook } from '@/types/character'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

type CharacterComponentSwitcherProps = {
  characterComponentHook: CharacterComponentHook
  title: string
}

export default function CharacterComponentSwitcher({
  characterComponentHook,
  title,
}: CharacterComponentSwitcherProps) {
  return (
    <div className="flex py-4 border-2 border-black justify-between gap-2 items-center">
      <button onClick={characterComponentHook.decrease}>
        <ChevronLeftIcon />
      </button>
      <div className="min-w-12">
        {title}: {characterComponentHook.id}
      </div>
      <button onClick={characterComponentHook.increase}>
        <ChevronRightIcon />
      </button>
    </div>
  )
}
