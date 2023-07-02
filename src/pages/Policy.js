import React,{useState,useEffect} from "react";
import NavScroll from '../components/Nav_bar/NavScroll'
import ScaleLoader from 'react-spinners/ScaleLoader'
import Policys from '../components/Policy/Policy'
import Foot_strip from '../components/Foot_strip/Foot_strip'

function Policy () {
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true) 
    setTimeout(() =>{
      setLoading(false)
    },2000)
  },[]);

  return (
   <div>
    {
      loading ? 
      <div className="home">
      <ScaleLoader color="#FFF" 
      size={100}
      cssOverride={{textAlign:"center"}}
      loading = {loading} />
      </div>
      :
      <>
      <NavScroll />
      <Policys />
      <Foot_strip />
    </>
    }
    </div>
  );
};



export default Policy
