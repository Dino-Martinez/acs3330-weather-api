import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './WeatherForm.css'

function WeatherForm({onSubmit}) {
    const [zip, setZip] = useState('')
  return (
    <form>
        <label htmlFor='zip'>Zip Code</label>
        <input 
            type="text" 
            name='zip' 
            placeholder='Enter your zip code' 
            onChange={(e) => { setZip(e.target.value)}} 
            value={zip} 
            pattern='[0-9]*'
        />
        <button type='button' onClick={() => onSubmit(zip)}>Submit</button>
    </form>
  )
}

WeatherForm.propTypes = {
    onSubmit: PropTypes.func
}

export default WeatherForm
