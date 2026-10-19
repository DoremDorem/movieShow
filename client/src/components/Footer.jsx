
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Clapperboard,
  Heart,
  House,
  Film,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  MoveUpRight
} from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Movies', path: '/movie' },
    { name: 'Favourite Movies', path: '/favourite' },
    { name: 'New Releases', path: '/new-movie' },
    { name: 'Our Services', path: '/#services' },
  ]

  const categories = [
    'Action',
    'Comedy',
    'Romance',
    'Thriller',
    'Sci-Fi',
  ]


  const handleSubscribe = (e) => {
    e.preventDefault()

    if (!email.trim()) return

    alert('Thank you for subscribing! 🎬')
    setEmail('')
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gray-950 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-red-600/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-14 sm:px-8 sm:pt-16 lg:px-10">

        {/* Newsletter Banner */}
        <div className="mb-14 flex flex-col gap-7 overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-500/15 via-red-500/5 to-transparent p-6 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:p-10">

          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
              Stay in the spotlight
            </span>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
              Movies you love,
              <span className="text-orange-400"> delivered to you.</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400 sm:text-base">
              Stay updated with the latest releases, movie news,
              and exciting entertainment picks.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex w-full flex-col gap-3 sm:flex-row lg:max-w-md"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-white/10 bg-black/30 px-4 focus-within:border-orange-500/60">
              <Mail size={19} className="shrink-0 text-gray-400" />

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0 w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-gray-500"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 font-semibold transition hover:bg-orange-600 active:scale-95"
            >
              Subscribe <Send size={16} />
            </button>
          </form>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 shadow-lg shadow-orange-500/20">
                <Clapperboard size={25} />
              </div>

              <span className="text-2xl font-extrabold tracking-tight">
                Quick<span className="text-orange-500">Show</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Your perfect destination for discovering amazing movies,
              exploring trailers, and finding your next cinematic adventure.
            </p>

            {/* Social Links */}
           
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold">
              Quick Links
            </h3>

            <div className="mb-5 mt-3 h-1 w-10 rounded-full bg-orange-500" />

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-orange-400"
                  >
                    <ArrowRight
                      size={14}
                      className="text-orange-500 transition-transform group-hover:translate-x-1"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base font-bold">
              Movie Genres
            </h3>

            <div className="mb-5 mt-3 h-1 w-10 rounded-full bg-orange-500" />

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  to="/movie"
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-400 transition hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
                >
                  {category}
                </Link>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              Your next favourite movie is just a click away.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold">
              Get in Touch
            </h3>

            <div className="mb-5 mt-3 h-1 w-10 rounded-full bg-orange-500" />

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Mail size={18} className="mt-0.5 shrink-0 text-orange-400" />
                <a
                  href="mailto:support@quickshow.com"
                  className="break-all transition hover:text-orange-400"
                >
                  support@quickshow.com
                </a>
              </li>

              <li className="flex items-start gap-3 text-sm text-gray-400">
                <Phone size={18} className="mt-0.5 shrink-0 text-orange-400" />
                <span>Contact our support team</span>
              </li>

              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={18} className="mt-0.5 shrink-0 text-orange-400" />
                <span>Entertainment, anytime, anywhere.</span>
              </li>
            </ul>

            <Link
              to="/movie"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition hover:text-orange-300"
            >
              Explore Movies <MoveUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} QuickShow. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-gray-500 sm:text-sm">
            <Link to="/privacy" className="transition hover:text-orange-400">
              Privacy Policy
            </Link>

            <Link to="/terms" className="transition hover:text-orange-400">
              Terms of Service
            </Link>

            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center gap-1 font-medium text-orange-400 transition hover:text-orange-300"
            >
              Back to top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
