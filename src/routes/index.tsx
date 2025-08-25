import { createFileRoute } from '@tanstack/react-router'
import HomeLayout from '@/layouts/HomeLayout'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return <HomeLayout>aaa</HomeLayout>
}
