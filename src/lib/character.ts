import type { CharacterComponent } from '@/types/character'

export function generateCharacterComponents(
  count: number,
): Array<CharacterComponent> {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
  }))
}
