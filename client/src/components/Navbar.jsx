
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Menu,
  Search,
  X,
  Clapperboard,
  Heart,
  House,
  CalendarDays,
  Film
} from 'lucide-react'
import { useClerk, useUser, UserButton } from '@clerk/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUser()
  const { openSignIn } = useClerk()

  const navLinks = [
    { name: 'Home', path: '/', icon: House },
    { name: 'Movie', path: '/movie', icon: Film },
    { name: 'Favourite', path: '/favourite', icon: Heart },
    { name: 'Release', path: '/', icon: CalendarDays },
    { name: 'New Movies', path: '/', icon: Clapperboard },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-gray-950/80 text-white shadow-lg shadow-black/10 backdrop-blur-xl">

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2"
        >
          <img
            src="/favicon.svg"
            alt="QuickShow"
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />

          <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
            Quick<span className="text-orange-500">Show</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-orange-500/15 hover:text-orange-400"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-3">

          {/* Search */}
          <Link
            to="/movie"
            aria-label="Search movies"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-300 transition hover:bg-white/10 hover:text-orange-400"
          >
            <Search size={21} />
          </Link>

          {/* Login / User */}
          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={() => openSignIn()}
              className="hidden rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600 active:scale-95 sm:inline-flex"
            >
              Login
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 lg:hidden"
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-gray-950/95 transition-all duration-300 ease-in-out lg:hidden ${
          isOpen
            ? 'max-h-[420px] opacity-100'
            : 'max-h-0 border-t-transparent opacity-0'
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">

          {navLinks.map((link) => {
            const Icon = link.icon

            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-orange-500/10 hover:text-orange-400"
              >
                <Icon size={19} />
                {link.name}
              </Link>
            )
          })}

          {/* Mobile Login */}
          {!user && (
            <button
              onClick={() => {
                closeMenu()
                openSignIn()
              }}
              className="mt-2 w-full rounded-xl bg-orange-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-orange-600 sm:hidden"
            >
              Login / Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
