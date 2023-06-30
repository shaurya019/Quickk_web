import React from 'react'
import "./Down.css"
import Pic from "./Pic.png";

const Down = () => {
  return (
    <>
    <div className='Down-sec'>
    <div className='Down-row'>
    <div className='Down-col'>
    <div className='Down-container'>
    <div className='Down-pic'>
      <img src={Pic} alt="sorry" />
    </div> 
    <div className='Down-app'>
    <h3>Experience the Convenience Today!</h3>
    <p className="dn-para">Download Quickk now and discover the convenience of having your favourite tobacco products delivered right to your door. Say goodbye to the hassle of traditional shopping and embrace the simplicity of our app. With Quickk, enjoying your preferred tobacco products has never been easier.</p>
    <h4 className="dn-p">Get the link to download the app!!</h4>
    <button className='btn_dwn'>Download It!</button>
    </div> 
    </div>   
    </div>  
    </div>  
    </div>
    </>
  )
}

export default Down
