import React from 'react'
import Image from "./I.png"
import "./Main_about.css"
const Main_about = () => {
  return (
    <>
    <div className='main-sec'>
    <div className='main-row'>
    <div className='main-col'>
    <div className='main-text'>
      <p>About Us</p>
      <h3>How Quickk is Working</h3>
      <h6>Quickk is committed to providing seamless and efficient delivery services for tobacco and tobacco-related products. We are proud to serve a wide range of locations, ensuring that customers can access their favorite tobacco products with ease.</h6>
    </div> 
    <div className='main-img'>
      <div className='circle' />  
      <img src={Image} alt="s" />
    </div>  
    </div> 
    </div>  
    </div>
    </>
  )
}

export default Main_about

