import React from 'react'
import search from '../../public/assets/search.png'

function Input() {
  return (
    <div className='search-location'>
      <img src={search}
           style={{ width: '20px', height: '20px' }}
           draggable='false' />

      <input type="text" 
             placeholder='Search Location' />

    </div>
  )
}

export default Input
