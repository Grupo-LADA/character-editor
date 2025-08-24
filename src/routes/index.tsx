import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return <div className="flex min-h-screen text-center">aaa</div>
}
