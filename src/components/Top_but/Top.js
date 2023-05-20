import React from 'react'
import './Top.css';
function Top () {
    const top = () => {
        window.scrollTo(0,0);
    }
  return (
    <>
      <button onClick={top} className='top_btn'>Top</button>
    </>
  )
}

export default Top
