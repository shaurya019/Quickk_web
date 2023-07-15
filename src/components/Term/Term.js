import React from 'react'
import './Term.css'
import Privacy from './Privacy.pdf';
import Terms from './Terms.pdf';
const Term = () => {
  return (
   <>
   <div className='T-row'>
   <div className='T-col'>
    <h2>Terms & Condition</h2>
   <div className='T-sec'>
   <div className='T-H'>
   <h4>Preventing Drunk Driving</h4>
   </div> 
   <div className='T-para special1'>
    <p>Many smokers, after a night of drinks, may decide to take a risk and drive/ride out looking for cigarettes late at night. This can lead to a lot of unfortunate accidents which nobody wants. Quickk hopes to prevent this by giving these customers the option of quick, trusted home delivery.</p>
   </div> 
   <div className='T-D x'>
   <h5>Download:</h5>
   <a className='' href={Privacy} download>.pdf</a>
   <a className='' href={Terms} download>.pdf</a>
   </div>  
   </div> 
   <div className='T-sec'>
   <div className='T-H'>
   <h4>Reducing Public Smoking</h4>
   </div> 
   <div className='T-para special2'>
    <p>Our Government is making strong efforts to curb public smoking in the interest of all citizens, and having a cigarette delivery service right to your doorstep resolves that issue for many smokers. As we grow and cover more hours of each day, we can help reduce that much public smoking.</p>
   </div> 
   <div className='T-D'>
   <h5>Download</h5>
   <p>.pdf</p>
   <p>.doc</p>
   </div>  
   </div> 
   <div className='T-sec'>
   <div className='T-H'>
   <h4>Ages 18+ (Protect Minors)</h4>
   </div> 
   <div className='T-para special3'>
    <p>Quickk firmly agrees with all laws prescribed in the Cigarettes and Other Tobacco Products Act (COTPA 2003), especially the complete ban on smoking by anyone under 18. Our riders do not hand over cigarettes unless a valid ID is shown proving age over 18, </p>
   </div> 
   <div className='T-D'>
   <h5>Download</h5>
   <p>.pdf</p>
   <p>.doc</p>
   </div>  
   </div> 
   <div className='T-sec'>
   <div className='T-H'>
   <h4>No Loose Cigarettes</h4>
   </div> 
   <div className='T-para special4'>
    <p>Our Government clearly chooses to ban the sale of loose cigarettes as far as possible. We therefore strictly deliver only packs, and one can never order any loose cigarettes. We also wish to make it clear, we do NOT deliver or help with any products or substances other than cigarettes, and will report any inquiries for illegal substances straight to the relevant authorities.</p>
   </div> 
   <div className='T-D'>
   <h5>Download</h5>
   <p>.pdf</p>
   <p>.doc</p>
   </div>  
   </div> 
   </div>  
   </div>
   </>
  )
}

export default Term
