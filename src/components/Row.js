import React, { useState, useEffect } from 'react'
import axios from '../axios.js'
import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([])

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

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
