import type { CharacterComponent } from '@/types/character'

export function generateCharacterComponents(
  type: string,
  count: number,
): Array<CharacterComponent> {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `${type} ${i + 1}`,
  }))
}
