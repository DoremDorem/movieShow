
import { useNavigate } from 'react-router-dom'

const MovieCards = ({
  movie_name,
  movie_title,
  movie_image,
  rating,
  duration,
  language,
  country,
  trailer_url,
  status,
  movie_id
}) => {

    const navigate=useNavigate();
  return (
    <div className="group overflow-hidden rounded-2xl  border border-white/10 bg-gray-900 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-red-500/10">

      {/* Movie Poster */}
      <div className="relative h-80 overflow-hidden bg-gray-800">
        <img
          src={movie_image}
          alt={movie_name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src =
              'https://placehold.co/500x750/171923/ffffff?text=Movie+Poster'
          }}
        />

        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-black/20" />

        {/* Status */}
        {status && (
          <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            {status}
          </span>
        )}

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-black/70 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-yellow-400">★</span>
          <span className="text-sm font-bold">
            {rating || 'N/A'}
          </span>
        </div>

        {/* Movie Name on Poster */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-red-400">
            {movie_title || 'Featured Movie'}
          </p>

          <h2 className="text-2xl font-extrabold leading-tight drop-shadow-lg">
            {movie_name}
          </h2>
        </div>
      </div>

      {/* Movie Details */}
      <div className="space-y-4 p-5">

        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
          {duration && (
            <span className="rounded-md bg-gray-800 px-2.5 py-1">
              ◷ {duration}
            </span>
          )}

          {language && (
            <span className="rounded-md bg-gray-800 px-2.5 py-1">
              {language}
            </span>
          )}

          {country && (
            <span className="rounded-md bg-gray-800 px-2.5 py-1">
              {country}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-white/10 pt-4">
          <div className="min-w-0">
            <p className="text-xs text-gray-500">Now showing</p>
            <p onClick={()=>navigate(`/movie-details/${movie_id}`)} className="truncate cursor-pointer font-semibold text-gray-200">
              {movie_name}
            </p>
          </div>

          {trailer_url ? (
            <a
              href={trailer_url}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-bold transition hover:bg-red-700 active:scale-95"
            >
              ▶ Trailer
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="shrink-0 cursor-not-allowed rounded-xl bg-gray-700 px-4 py-2.5 text-sm font-bold text-gray-400"
            >
              No Trailer
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MovieCards
