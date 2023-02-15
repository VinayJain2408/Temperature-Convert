import React, { useState } from 'react'
import Celcius from './Celcius'
import Fahrenite from './Fahrenite'
import ConvertTempature from './ContextAPI'

function App() {
    //Celcius
    const [CelciusValue, setCelciusValue] = useState('')

    function CelciusChange(e) {
        setCelciusValue(e.target.value)

    }
    function convertCelcius() {
        let F = CelciusValue * 9 / 5 + 32;
        console.log(F)
        setFahreniteValue(F)
    }

    //Fahrenite
    const [FahreniteValue, setFahreniteValue] = useState('')

    function FahreniteChange(e) {
        setFahreniteValue(e.target.value)

    }
    function ConvertFahrenite() {
        let C = (FahreniteValue - 32) * 5 / 9
        console.log(C)
        setCelciusValue(C)
    }


    return (
        <>
            <ConvertTempature.Provider value={{ convertCelcius, CelciusChange, FahreniteChange, ConvertFahrenite, FahreniteValue, CelciusValue, }}>
                <Celcius />
                <Fahrenite />
            </ConvertTempature.Provider>

        </>
    )
}

export default App