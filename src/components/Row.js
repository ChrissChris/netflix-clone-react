import React, { useState, useEffect } from 'react'
import axios from '../axios.js'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const movieApiUrl = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchURL)
        setMovies(...movies, request.data.results)
        return request
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [fetchURL])

  const opts = {
    height: '390px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${movieApiUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
