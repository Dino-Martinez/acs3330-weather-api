import React, { useState } from 'react'
import WeatherData from '../WeatherData/WeatherData'
import WeatherForm from '../WeatherForm/WeatherForm'
import './Weather.css'

function Weather() {
  const [weather, setWeather] = useState({})
  const handleSubmit = async (values) => {
    try {
      setWeather({temp: 'Loading weather data...'})
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${values},us&appid=c065f9879532069a0c8fe8e3a7ccc1e0`)
      const json = await res.json()
      console.dir(json)
      setWeather(json.main)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <WeatherForm onSubmit={handleSubmit} />
      {Object.keys(weather).length > 0 &&
        <WeatherData data={weather} />
      }
    </>
  )
}

export default Weather