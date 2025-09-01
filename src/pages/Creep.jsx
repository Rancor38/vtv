import React from 'react'
import creepGif from '../assets/creep.gif'
import './Creep.css'

function Creep() {
  return (
    <div className="creep-container">
      <img src={creepGif} alt="Creep" />
      <p>You will remember now</p>
    </div>
  )
}

export default Creep
