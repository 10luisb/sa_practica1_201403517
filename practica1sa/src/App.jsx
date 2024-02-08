import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const currentDate = new Date();

  return (
    <>
       <div className="App">
   <h1>Luis Roberto Boror Yoc</h1>
   <h1>201403517</h1>
   <h2>{new Date().toLocaleTimeString()}</h2>
   <h2>{currentDate.toLocaleDateString()}</h2>
   <h2> {}</h2>
    </div>

    </>
  )
}

export default App
