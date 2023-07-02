import React from 'react'
import Image from "./I.png"
import './Main_about.css'
const Main_about = () => {
  return (
    <>
     <div className='main-sec'>
    <div className='main-row'>
    <div className='main-col'>
    <div className='main-text'>
      <p>Jump Start Ordering</p>
      <h3>About Quickk</h3>
      <h6>Your ultimate destination for quick and convenient delivery of tobacco and tobacco-related products. We understand that time is valuable, and we're here to make your life easier by bringing your favourite tobacco products right to your doorstep.</h6>
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

