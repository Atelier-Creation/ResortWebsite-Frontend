import React from 'react'
import './Map.css'
import mapImage from '../../Assets/map.png'
function Map() {
  return (
    <div style={{marginTop:"10%"}}>
      <div style={{marginLeft:"10%"}}>
        <h2 style={{color:"rgb(1, 1, 92)",fontFamily:"Palatino"}}>Location</h2>
        <h1>Unveiling the Location</h1>
      </div>
      <img src={mapImage} alt='' className='Map-image'/>
    </div>
  )
}

export default Map
