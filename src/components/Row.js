import React, { useState, useEffect } from 'react'
import axios from '../axios.js'

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchURL }) => {
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

  console.log(movies)
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie)=>{
          <img src="movie." alt=""/>
        })}

      </div>
    </div>
  )
}

export default Row
