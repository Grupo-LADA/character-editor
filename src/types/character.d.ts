export type Character = {
  name: string
  components: CharacterComposition
}

export type CharacterComposition = {
  bodyType: CharacterComponent
  upperBody: CharacterComponent
  lowerBody: CharacterComponent
}

export type CharacterComponent = {
  id: number
  imageUri?: string
  title: string
}
