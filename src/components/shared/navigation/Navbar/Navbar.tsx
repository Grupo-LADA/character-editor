import { Link } from '@tanstack/react-router'

export default function Navbar() {
  return (
    <header className="fixed flex h-12 w-full items-center justify-between gap-2 bg-black px-4 text-white">
      <nav className="flex flex-row">
        <Link to="/" className="font-bold">
          character-edit
        </Link>
      </nav>
    </header>
  )
}
