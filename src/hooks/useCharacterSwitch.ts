import type { CharacterComponentHook } from '@/types/character'
import { useState } from 'react'

export function useCharacterSwitch(max: number, initial = 1) {
  const [id, setId] = useState(initial)
  const [direction, setDirection] = useState<'increase' | 'decrease'>(
    'increase',
  )
  const increase = () => {
    setDirection('increase')
    setId(id >= max ? 1 : id + 1)
  }
  const decrease = () => {
    setDirection('decrease')
    setId(id <= 1 ? max : id - 1)
  }
  return { id, increase, decrease, direction } as CharacterComponentHook
}
