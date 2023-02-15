import React , { useContext, useState} from 'react'
import ConvertTempature from './ContextAPI'

function Celcius() {
   const {convertCelcius, CelciusChange,CelciusValue} = useContext(ConvertTempature)
  return (
    <div>
        <h1>Celcius</h1>
        <input type='number'
         value={CelciusValue}
         onChange={CelciusChange}
        placeholder='Enter celcius tempareture'></input>
        <button onClick={convertCelcius}>Convert</button>
    </div>
  )
}

export default Celcius