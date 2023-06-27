import React from 'react'
import Account from './Account.svg'
import Cart from './Cart.svg'
import Payment from './Payment.svg'
import './Started.css'

const Started = () => {
  return (
    <>
    <div className='Started-sec'>
    <div className='Started-row'>
    <div className='Started-Head'>
        <h2>Get started in a few minutes</h2>
        <p>Quickk delivers your favourite tobacco products right to your door step.</p>
    </div> 
    <div className='Started-img'>
    <div className='S'>
        <img src={Account} alt="" />
        <h4>Create an account</h4>
    </div>
    <div className='S'>
        <img src={Cart} alt="" />
        <h4>Buy your Products</h4>
    </div>
    <div className='S'>
        <img src={Payment} alt="" />
        <h4>Pay the amount</h4>
    </div>   
    </div>   
    </div>    
    </div>
    </>
  )
}

export default Started
