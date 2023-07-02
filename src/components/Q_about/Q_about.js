import React from 'react'
import './Q_about.css'
const Q_about = () => {
  return (
    <div className='Q-row'>
    <div className='Q-col'>
    <div className='Q-main'>
    <div className='Q-P'>
      <h1>About Us</h1>
      <h2>Helping businesses succeed through the <span>power of video.</span></h2>
      <p>Welcome to Quickk, your premier destination for quick and convenient convenience product delivery. We understand the importance of time and convenience in today's fast-paced world, and that's why we've created a seamless platform that brings your favorite tobacco products right to your doorstep.</p>
      <p>At Quickk, we're passionate about providing a hassle-free experience for our valued customers. With just a few taps on your smartphone, you can browse through our extensive selection of high-quality tobacco products, including cigarettes, cigars, rolling papers, pipes, and more. Whether you have a preferred brand or you're looking to explore new options, we have a diverse range of choices to suit every taste.</p>
      <p>Download QUICKK today and experience the ultimate convenience of quick tobacco product delivery. Say goodbye to the hassle of visiting stores or waiting in line, and say hello to a seamless and enjoyable shopping experience. Your favorite tobacco products are just a few taps away.</p>
    </div> 
    <div className='Q-P'>
      <img src={require ('./Pic.png')} alt="sorry" />
      </div>
    </div>  
    </div>  
    </div>
  )
}

export default Q_about
