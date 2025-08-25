export type Character = {
  name: string
  components: CharacterComposition
}

export type CharacterComposition = {
  bodyType: CharacterComponent
  hairType: CharacterComponent
  upperBody: CharacterComponent
  lowerBody: CharacterComponent
}

export type CharacterComponent = {
  id: number
  imageUri?: string
  title?: string
}

export type CharacterComponentHook = {
  id: number
  increase: () => void
  decrease: () => void
}
