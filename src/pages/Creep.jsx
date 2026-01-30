import React from 'react'
// import creepGif from '../assets/creep.gif'  // Uncomment when you have the file
import './Creep.css'

function Creep() {
  return (
    <div className="creep-container">
      {/* Replace with actual image when available */}
      <div style={{
        width: '400px',
        height: '300px',
        backgroundColor: '#333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666',
        fontSize: '24px'
      }}>
        [creep.gif]
      </div>
      {/* <img src={creepGif} alt="Creep" /> */}
      <p>You will remember now</p>
    </div>
  )
}

export default Creep
