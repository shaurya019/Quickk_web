import React from 'react'
import './About_c.css'
import underline from './undraw.svg'

const About_c = () => {
  return (
    <>
    
    <div className=''>
        <div className='About_h2'>
      <h2>ABOUT US.</h2>
      <img src={underline} alt="sorry"/>
      </div> 
    </div>
    <div className='About_main'>
    <div className='About_h4'>
      <h4>About us.</h4>
      <h4>Our Team</h4>
    </div> 
    <div className='About_para'>
      <p>Welcome to Quickk, your premier destination for quick and convenient convenience product delivery. We understand the importance of time and convenience in today's fast-paced world, and that's why we've created a seamless platform that brings your favorite tobacco products right to your doorstep.Our app is designed with user-friendliness in mind, ensuring that you can effortlessly navigate through our intuitive interface and find exactly what you're looking for. With detailed product descriptions and images, you can make informed decisions and find the perfect tobacco products that cater to your preferences.
</p>
<p>We prioritize safety and legality, which is why we adhere to all local and regional regulations when it comes to the sale and delivery of tobacco products. Our dedicated team works closely with authorized suppliers and vendors to guarantee that you receive only genuine and legally compliant products. Your satisfaction and well-being are our top priorities.
To make your experience even more convenient, we offer a lightning-fast delivery service. Once you've placed your order, our reliable delivery partners will swiftly bring your tobacco products directly to your location. Whether you're at home, at work, or on the go, you can count on us to deliver your order promptly and discreetly.
</p>
    </div>    
    </div>  
    </>
  )
}

export default About_c;
