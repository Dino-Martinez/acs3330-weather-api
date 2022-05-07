import React from 'react'
import PropTypes from 'prop-types'
import './WeatherData.css'

function WeatherData({data}) {
  return (
    <h1>{data.temp}</h1>
  )
}

WeatherData.propTypes = {
    data: PropTypes.object
}

export default WeatherData
