import React from 'react'
import Card from './components/Card'
import LocalTime from './components/LocalTime'
import './App.css'

function App() {
  return (
    <div className='weatherApp'>
      <Card/>
      <LocalTime/>
    </div>
  )
}

export default App
