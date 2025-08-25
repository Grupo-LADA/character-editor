import CharacterComponentSwitcher from '@/components/features/home/CharacterComponentSwitcher'
import CharacterContainer from '@/components/features/home/CharacterContainer'
import {
  BODY_TYPES,
  HAIR_TYPES,
  LOWER_BODIES,
  UPPER_BODIES,
} from '@/constants/character'
import { useCharacterSwitch } from '@/hooks/useCharacterSwitch'
import HomeLayout from '@/layouts/HomeLayout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const bodyType = useCharacterSwitch(BODY_TYPES.length)
  const hairType = useCharacterSwitch(HAIR_TYPES.length)
  const upperBody = useCharacterSwitch(UPPER_BODIES.length)
  const lowerBody = useCharacterSwitch(LOWER_BODIES.length)

  return (
    <HomeLayout>
      <div className="flex flex-col gap-4">
        <strong>Editor de personagem</strong>
        <div className="flex flex-col items-center justify-center gap-4 border-2 border-black p-4">
          <div className="relative">
            <CharacterContainer className="h-48 w-16 z-0" id="body-type">
              {bodyType.id}
            </CharacterContainer>
            <CharacterContainer
              className="absolute h-8 w-16 z-3 top-0"
              id="hair-type"
            >
              {hairType.id}
            </CharacterContainer>
            <CharacterContainer
              className="absolute h-18 w-16 z-3 top-12"
              id="upper-body-type"
            >
              {upperBody.id}
            </CharacterContainer>
            <CharacterContainer
              className="absolute h-18 w-16 z-3 bottom-0"
              id="lower-body-type"
            >
              {lowerBody.id}
            </CharacterContainer>
          </div>
          <div className="flex flex-col gap-2">
            <CharacterComponentSwitcher
              characterComponentHook={bodyType}
              title="Body Type"
            />
            <CharacterComponentSwitcher
              characterComponentHook={hairType}
              title="Hair Type"
            />
            <CharacterComponentSwitcher
              characterComponentHook={upperBody}
              title="Upper Body Type"
            />
            <CharacterComponentSwitcher
              characterComponentHook={lowerBody}
              title="Lower Body Type"
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}
