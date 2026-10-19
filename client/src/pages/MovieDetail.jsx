
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Star,
  Play,
  Film,
  CalendarDays,
  Clock,
  Languages,
  Globe,
  Clapperboard,
  Info,
} from 'lucide-react'

import movieData from '../assets/data'

const MovieDetail = () => {
  const { movie_id } = useParams()
  const navigate = useNavigate()

  const singleData = movieData.find(
    (movie) => String(movie._id) === String(movie_id)
  )

  if (!singleData) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 px-4 text-center text-white">
        <Film size={60} className="mb-5 text-orange-500" />

        <h1 className="text-3xl font-bold">Movie Not Found</h1>

        <p className="mt-3 text-gray-400">
          Is movie ki details nahi mil payi.
        </p>

        <button
          onClick={() => navigate('/movie')}
          className="mt-6 rounded-xl bg-orange-500 px-6 py-3 font-semibold hover:bg-orange-600"
        >
          Explore Movies
        </button>
      </div>
    )
  }

  // All object fields, excluding fields already displayed separately
  const excludedFields = [
    '_id',
    'movie_name',
    'movie_title',
    'movie_image',
    'description',
    'rating',
    'duration',
    'release_date',
    'genre',
    'trailer_url',
  ]

  const formatLabel = (key) => {
    return key
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (letter) => letter.toUpperCase())
  }

  const formatValue = (value) => {
    if (value === null || value === undefined || value === '') {
      return 'Not available'
    }

    if (Array.isArray(value)) {
      return value.length ? value.join(', ') : 'Not available'
    }

    if (typeof value === 'object') {
      return JSON.stringify(value, null, 2)
    }

    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No'
    }

    return String(value)
  }

  const extraDetails = Object.entries(singleData).filter(
    ([key, value]) =>
      !excludedFields.includes(key) &&
      value !== null &&
      value !== undefined &&
      value !== ''
  )

  return (
    <section className="min-h-screen bg-gray-950 px-4 pb-16 pt-24 text-white sm:px-8 sm:pt-28">
      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-300 transition hover:bg-white/10 hover:text-orange-400"
        >
          <ArrowLeft size={18} />
          Go Back
        </button>

        {/* Main Movie Information */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12">

          {/* Poster */}
          <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-gray-900 shadow-2xl shadow-orange-950/20 md:mx-0">
            <img
              src={singleData.movie_image}
              alt={singleData.movie_name || 'Movie poster'}
              onError={(e) => {
                e.currentTarget.src =
                  'https://placehold.co/500x750/171923/ffffff?text=Movie+Poster'
              }}
              className="max-h-[700px] w-full object-cover"
            />
          </div>

          {/* Basic Details */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-400">
              <Clapperboard size={15} />
              Movie Details
            </span>

            <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              {singleData.movie_name || 'Untitled Movie'}
            </h1>

            {singleData.movie_title && (
              <p className="mt-3 text-lg text-gray-400">
                {singleData.movie_title}
              </p>
            )}

            {/* Rating, Status and Release */}
            <div className="mt-6 flex flex-wrap gap-3">
              {singleData.rating !== undefined && (
                <span className="inline-flex items-center gap-2 rounded-lg bg-yellow-500/10 px-3 py-2 text-sm font-bold text-yellow-400">
                  <Star size={17} fill="currentColor" />
                  {singleData.rating}
                </span>
              )}

              {singleData.status && (
                <span className="rounded-lg bg-green-500/10 px-3 py-2 text-sm font-semibold text-green-400">
                  {formatValue(singleData.status)}
                </span>
              )}

              {singleData.release_date && (
                <span className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300">
                  <CalendarDays size={16} />
                  {formatValue(singleData.release_date)}
                </span>
              )}
            </div>

            {/* Description */}
            {singleData.description && (
              <div className="mt-8">
                <h2 className="flex items-center gap-2 text-xl font-bold">
                  <Info size={20} className="text-orange-400" />
                  About This Movie
                </h2>

                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-gray-400 sm:text-base">
                  {singleData.description}
                </p>
              </div>
            )}

            {/* Genres */}
            {singleData.genre && (
              <div className="mt-7">
                <h3 className="mb-3 font-semibold">Genres</h3>

                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(singleData.genre)
                    ? singleData.genre
                    : [singleData.genre]
                  ).map((genre, index) => (
                    <span
                      key={`${genre}-${index}`}
                      className="rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-300"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Trailer */}
            {singleData.trailer_url && (
              <a
                href={singleData.trailer_url}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:bg-orange-600 sm:w-fit"
              >
                <Play size={20} fill="currentColor" />
                Watch Trailer
              </a>
            )}
          </div>
        </div>

        {/* All Remaining Array Details */}
        {extraDetails.length > 0 && (
          <div className="mt-14 sm:mt-20">
            <div className="mb-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Complete Information
              </p>

              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                All Movie Details
              </h2>

              <p className="mt-3 text-sm text-gray-400">
                Complete information available in your movie dataset.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {extraDetails.map(([key, value]) => (
                <div
                  key={key}
                  className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-orange-500/30 hover:bg-white/[0.05]"
                >
                  <div className="mb-3 flex items-center gap-2">
                    {key === 'duration' ? (
                      <Clock size={18} className="text-orange-400" />
                    ) : key === 'language' ? (
                      <Languages size={18} className="text-orange-400" />
                    ) : key === 'country' ? (
                      <Globe size={18} className="text-orange-400" />
                    ) : (
                      <Film size={18} className="text-orange-400" />
                    )}

                    <h3 className="text-sm font-semibold text-gray-300">
                      {formatLabel(key)}
                    </h3>
                  </div>

                  <div className="break-words text-base font-medium leading-7 text-white">
                    {Array.isArray(value) ? (
                      <div className="flex flex-wrap gap-2">
                        {value.map((item, index) => (
                          <span
                            key={index}
                            className="rounded-lg bg-white/5 px-2.5 py-1 text-sm"
                          >
                            {typeof item === 'object'
                              ? JSON.stringify(item)
                              : String(item)}
                          </span>
                        ))}
                      </div>
                    ) : typeof value === 'object' && value !== null ? (
                      <pre className="overflow-x-auto whitespace-pre-wrap break-words text-xs text-gray-300">
                        {formatValue(value)}
                      </pre>
                    ) : (
                      formatValue(value)
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default MovieDetail
