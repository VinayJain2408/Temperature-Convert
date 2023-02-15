import React, { useContext, useState } from 'react'
import ConvertTempature from './ContextAPI'


function Fahrenite() {
  const { FahreniteChange, ConvertFahrenite, FahreniteValue} =useContext(ConvertTempature)
  return (
    <div>
         <h1>Fahrenite</h1>
        <input type='number' 
        placeholder='Enter Fahrenite tempareture'
        value={FahreniteValue}
        onChange ={FahreniteChange}
        ></input>
        <button onClick={ConvertFahrenite}>Convert</button>
    </div>
  )
}

export default Fahrenite