import React from 'react'
import delivery from "./delivery.svg"
import destination from "./destination.svg"
import online from "./online.svg"
import way from "./way.svg"
import './Delivery.css'

const Delivery = () => {
  return (
    <>
      <div className='Delivery-sec'>
      <div className='Delivery-row'>
      <div className='Delivery-H'>
      <h1>
      Glimpse of our current presence
  </h1>
      </div> 
      <div className='Delivery-box'>
      <div className='Delivery-img'>
        <img src={delivery} alt="sorry" />
      <div className='Delivery-h'>
        <p className='local'>Enjoy the convenience of quick and reliable delivery right to your doorstep within Delhi and Delhi ncr.</p>
        <h3>Local Delivery</h3>
      </div>
      </div>
      <div className='Delivery-img'>
        <img src={destination} alt="" />
      <div className='Delivery-h'>
        <p>For customers across india, we offer nationwide delivery, allowing you to access a wide range of tobacco products from the comfort of your own home.</p>
        <h3>Nationwide Delivery</h3>
      </div>
      </div>
      <div className='Delivery-img'>
        <img src={way} alt="" />
      <div className='Delivery-h'>
        <p>We have extended our reach to serve the tobacco enthusiasts in Delhi Ncr region. Now, you can experience our exceptional delivery services beyond our local area.</p>
        <h3>Expanded Coverage</h3>
      </div>
      </div>
      <div className='Delivery-img'>
        <img src={online} alt="" />
      <div className='Delivery-h'>
        <p>Our online platform enables users from around the world to explore and order their preferred tobacco products conveniently, regardless of their physical location.</p>
        <h3>Online Presence</h3>
      </div>
      </div>
      </div> 
      </div>  
      </div>
    </>
  )
}

export default Delivery
