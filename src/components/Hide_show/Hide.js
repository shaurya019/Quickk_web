import React,{useState,useEffect} from 'react'
import "./hide.css"

function Hide () {
    const[isVisible,setIsVisible] = useState({
        id:"comOne",
    });

    useEffect(()=>{
        console.log(isVisible);
    },[isVisible]);

    const toggleDiv = (e) => {
        setIsVisible({
            id: e.target.id,
        });
    };

  return (
    <div className='row'>
        <h2 className="mb-5 text-center">
        Terms & Conditions
        </h2>
        <div className='Term_col'>

        <div className='Term_row'>
        <div className='Term_but'>
        <button id="comOne" onClick={(e) =>{
            toggleDiv(e);
        }}
        className="Term_btn">
        </button>
        </div>
        <div id = "term_box" className={
            isVisible.id==="comOne" ? `comOne` : "comOne d-none"
        }>
            <h4 className='term-h'>Preventing Drunk Driving</h4>
            <p className='term-p'>
             A lot of smokers, after a night of drinks, may decide to take a risk and drive/ride out looking for cigarettes late night. This can lead to a lot of unfortunate accidents which nobody wants. Quickk hopes to prevent this by giving these customers the option of quick, trusted home delivery.
            </p>
        </div>
        </div>


        <div className='Term_row'>
        <div className='Term_but'>
        <button id="comTwo" onClick={(e) =>{
            toggleDiv(e);
        }}
        className="Term_btn">
        </button>
        </div>
        <div id = "term_box" className={
            isVisible.id==="comTwo" ? `comTwo` : "comTwo d-none"
        }>
            <h4 className='term-h'>Reducing Public Smoking</h4>
            <p className='term-p'>
             Our Government is making strong efforts to curb public smoking in the interest of all citizens, and having a cigarette delivery service right to your doorstep resolves that issue for many smokers. As we grow and cover more hours of each day, we can help reduce that much public smoking.
            </p>
        </div>
        </div>


        <div className='Term_row'>
        <div className='Term_but'>
        <button id="comThree" onClick={(e) =>{
            toggleDiv(e);
        }}
        className="Term_btn">
        </button>
        </div>
        <div id = "term_box" className={
            isVisible.id==="comThree" ? `comThree` : "comThree d-none"
        }>
            <h4 className='term-h'>Ages 18+ (Protecting Minors)</h4>
            <p className='term-p'>
             Quickk firmly agrees with all laws prescribed in the Cigarettes and Other Tobacco Products Act (COTPA 2003), especially the complete ban on smoking by anyone under 18. Our riders do not hand over cigarettes unless a valid ID is shown proving age over 18, 
       </p>
        </div>
        </div>


        <div className='Term_row'>
        <div className='Term_but'>
        <button id="comFour" onClick={(e) =>{
            toggleDiv(e);
        }}
        className="Term_btn">
        </button>
        </div>
        <div id = "term_box" className={
            isVisible.id==="comFour" ? `comFour` : "comThree d-none"
        }>
            <h4 className='term-h'>No Loose Cigarettes, No Illegal Substances</h4>
            <p className='term-p'>
             It is quite clear our Government chooses to ban the sale of loose cigarettes as far as possible. We therefore strictly deliver only packs, and one can never order any loose cigarettes. We also wish to make it absolutely clear, we do NOT deliver or help with any products or substances other than cigarettes, and will report any inquiries for illegal substances straight to the relevant authorities. 
            </p>
        </div>
        </div>
        </div>

    </div>
  )
}

export default Hide
