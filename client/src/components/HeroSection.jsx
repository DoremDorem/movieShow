
import React from 'react'

const HeroSection = () => {
  return (
    <section
      className='relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-[url("/a3.jpg")] bg-cover bg-center px-4 py-20 text-white sm:min-h-[85vh] sm:px-8 lg:min-h-screen'
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/30" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-5 text-center sm:items-start sm:text-left">

        {/* Tag */}
        <span className="rounded-full border border-red-500/40 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 sm:text-sm">
          Your Ultimate Movie Experience
        </span>

        {/* Heading */}
        <h1 className="max-w-4xl text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-red-600">W</span>elcome To
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {' '}The QuickShow
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-xl text-sm leading-7 text-gray-300 sm:text-base md:text-lg">
          Book your tickets and enjoy your favorite movies.
          Discover exciting offers, exclusive discounts, and
          secure payment transactions for a seamless experience.
        </p>

        {/* Buttons */}
        <div className="mt-3 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">

          <a
            href="#movies"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-red-600/30 transition duration-300 hover:-translate-y-1 hover:bg-red-700 sm:w-auto"
          >
            Explore Movies
            <span className="text-xl">→</span>
          </a>

          <a
            href="#services"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20 sm:w-auto"
          >
            Our Services
          </a>

        </div>

        {/* Small Info */}
        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-gray-300 sm:justify-start sm:text-sm">
          <span>🎬 Latest Movies</span>
          <span>🎟️ Easy Booking</span>
          <span>🔒 Secure Payments</span>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
