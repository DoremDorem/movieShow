import React from 'react'
import Title from './Title'
import movieData from '../assets/data';
import MovieCards from './MovieCards';
const MovieSection = () => {
    
  return (
    <>
     <Title title={"Our Movie Shows"}/>
    <div className='grid lg:grid-cols-4 sm:grid-cols-2 py-4 px-15 gap-4'>
       {
        movieData.map((movie)=>(
            <div key={movie._id}>
                <MovieCards
                movie_id={movie._id}
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

export default MovieSection
