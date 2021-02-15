import React, { useState, useEffect } from 'react'
import axios from '../axios.js'
import requests from '../request.js'

const Banner = () => {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    try {
      async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(
          ...movie,
          request.data.results[
            Math.floor(Math.random() * request.data.results.lenth - 1)
          ]
        )
        return request
      }
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log(movie)
  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
            'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
          )
          `,
        backgroundPosition: 'center center',
      }}>
      <div className='banner_content'>
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        {/* title */}
        {/* div > two buttons */}
      </div>
    </header>
  )
}

export default Banner
