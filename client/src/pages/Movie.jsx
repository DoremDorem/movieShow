import React from 'react'
import movieData from '../assets/data'
import MovieCards from '../components/MovieCards'
import Title from '../components/Title'

const Movie = () => {
  return (
    <>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 py-4 px-15 gap-4 mt-35'>
       {
        movieData.map((movie)=>(
            <div key={movie._id}>
                <MovieCards
                 movie_name={movie.movie_name}
                 movie_title={movie.movie_title}
                 movie_image={movie.movie_image}
                 rating={movie.rating}
                 duration={movie.duration}
                 language={movie.language}
                 country={movie.country}
                 trailer_url={movie.trailer_url}
                 status={movie.status}
                />
            </div>
        ))
       }
    </div>
    </>
  )
}

export default Movie
