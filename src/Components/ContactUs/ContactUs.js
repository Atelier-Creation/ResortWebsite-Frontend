import React from 'react'
import './ContactUs.css'
function ContactUs() {
  return (
    <div style={{textAlign:"center",marginTop:"5%"}}>
      <div>
        <h2 style={{color:"rgb(1, 1, 92)",fontFamily:"Palatino"}}>Contact Us</h2>
        <h1>Reach out to Hyge Royal</h1>
      </div>
      <form>
        <div className='form-name'>
            <input type='text' placeholder='First Name'/>
            <input type='text' placeholder='Last Name'/>
        </div>
        <div className='form-contact'>
            <input type='text' placeholder='Contact number'/>
            <input type='text' placeholder='Email address'/>
        </div>
        <div className='form-textarea'>
            <textarea placeholder="Message"></textarea>
        </div>
        <button className='form-submit-btn'>Submit</button>
      </form>
    </div>
  )
}

export default ContactUs
