import React from 'react'
import Tours from './tours'
import './tours.css'
import {data} from './data'


function App(){
    const {id} = data

    return(
    <>
    <h1>Our Tours</h1>
        <Tours />
        
    </>
)
}

export default App
