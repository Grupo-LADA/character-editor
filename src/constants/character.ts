import { generateCharacterComponents } from '@/lib/character'

export const BODY_TYPES = generateCharacterComponents('BodyType', 2)
export const UPPER_BODIES = generateCharacterComponents('UpperBody', 5)
export const LOWER_BODIES = generateCharacterComponents('LowerBody', 5)
