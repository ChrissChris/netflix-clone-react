import React, { useState, useEffect } from 'react'
import axios from '../axios.js'
import request from '../request.js'
import requests from '../request.js'
import './Banner.css'

// The url adress which will use to fetch the data from the API
const apiPath = 'https://image.tmdb.org/t/p/original/'

//We set a random number which will be passed as a index to access movie for the Banner
const randomNum = Math.floor(Math.random() * 10)

const Banner = () => {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(request.data.results[randomNum])
        return request
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [request])

  const truncateText = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
            "${apiPath}${movie?.backdrop_path}"
          )
          `,
        backgroundPosition: 'center center',
      }}>
      <div className='banner__content'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncateText(movie?.overview, 150)}
        </h1>
        {/* title */}
        {/* div > two buttons */}
      </div>
      <div className='banner--fadeBottom'></div>
    </header>
  )
}

export default Banner
