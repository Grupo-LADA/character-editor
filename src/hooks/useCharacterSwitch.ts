import type { CharacterComponentHook } from '@/types/character'
import { useState } from 'react'

export function useCharacterSwitch(max: number, initial = 1) {
  const [id, setId] = useState(initial)
  const increase = () => setId(id >= max ? 1 : id + 1)
  const decrease = () => setId(id <= 1 ? max : id - 1)
  return { id, increase, decrease } as CharacterComponentHook
}
