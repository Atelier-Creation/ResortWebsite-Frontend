import React from 'react'
import './Galary.css'
import { images } from '../../Assets/images'
function Galary() {
  return (
    <div style={{marginTop:"10%"}}>
        <div style={{marginLeft:"10%"}}>
        <h2 style={{color:"rgb(1, 1, 92)",fontFamily:"Palatino"}}>Gallary</h2>
        <h1>A Pictorial Escape</h1>
        </div>
        <div className='galary-image-div'>
            {images.map((image,index)=>(
                <div >
                    <img src={image} alt='' className='galary-images'/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Galary
