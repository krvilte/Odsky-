import React from 'react'
import Input from './Input'
import Forcast from './Forcast'
import MoreInfo from './MoreInfo'
import '../App.css'

function Card() {
  return (
    <section className='card'>
      <h1 className='title'>Weather Application</h1> 
      <Input/> 
      <Forcast/>
      <MoreInfo/>
    </section>
  )
}

export default Card
