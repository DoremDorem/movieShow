
import React from 'react'
import Title from '../components/Title'

const services = [
  {
    id: 1,
    icon: '🎬',
    title: 'Movie Discovery',
    description:
      'Discover amazing movies from different genres and find your next favorite film.',
    color: 'from-red-500/20 to-orange-500/5',
    iconBg: 'bg-red-500/15',
    iconColor: 'text-red-400',
  },
  {
    id: 2,
    icon: '⭐',
    title: 'Ratings & Reviews',
    description:
      'Explore movie ratings and reviews to decide what is worth watching next.',
    color: 'from-yellow-500/20 to-amber-500/5',
    iconBg: 'bg-yellow-500/15',
    iconColor: 'text-yellow-400',
  },
  {
    id: 3,
    icon: '▶️',
    title: 'Watch Trailers',
    description:
      'Get a glimpse of exciting stories, unforgettable scenes, and upcoming releases.',
    color: 'from-blue-500/20 to-cyan-500/5',
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
  },
  {
    id: 4,
    icon: '🗂️',
    title: 'Explore Genres',
    description:
      'Browse action, comedy, romance, thriller, sci-fi, and many more movie genres.',
    color: 'from-purple-500/20 to-pink-500/5',
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
  },
  {
    id: 5,
    icon: '🔥',
    title: 'Trending Movies',
    description:
      'Explore popular movie picks and find films everyone is talking about.',
    color: 'from-orange-500/20 to-red-500/5',
    iconBg: 'bg-orange-500/15',
    iconColor: 'text-orange-400',
  },
  {
    id: 6,
    icon: '📱',
    title: 'Responsive Experience',
    description:
      'Enjoy a smooth movie browsing experience on mobile, tablet, and desktop.',
    color: 'from-green-500/20 to-emerald-500/5',
    iconBg: 'bg-green-500/15',
    iconColor: 'text-green-400',
  },
]

const OurServices = () => {
  return (
    <>
    <section className="relative overflow-hidden px-4 py-20 text-white sm:px-8 lg:py-28">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-red-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            WHAT WE OFFER
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Everything You Need
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
              {' '}For Movie Lovers
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Your ultimate destination for discovering movies, exploring
            genres, watching trailers, and finding your next favorite film.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${service.color} p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-950/20 sm:p-8`}
            >
              {/* Decorative Circle */}
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/5 transition-transform duration-500 group-hover:scale-150" />

              {/* Icon */}
              <div
                className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg} text-2xl ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110`}
              >
                <span>{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="relative mt-6 text-xl font-bold tracking-tight transition-colors group-hover:text-red-400">
                {service.title}
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-gray-400">
                {service.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Service {String(service.id).padStart(2, '0')}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 group-hover:border-red-500 group-hover:bg-red-500 group-hover:text-white">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-8 text-center sm:mt-16 sm:px-10 sm:py-10">
          <h3 className="text-2xl font-bold sm:text-3xl">
            Ready to Explore the World of Movies?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            Find something exciting to watch and make your next movie night special.
          </p>

          <a
            href="#movies"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition-all hover:-translate-y-1 hover:bg-red-700"
          >
            Explore Movies <span>→</span>
          </a>
        </div>

      </div>
    </section>
    </>
  )
}

export default OurServices
