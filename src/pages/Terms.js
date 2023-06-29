import React,{useState,useEffect} from "react";
import ScaleLoader from 'react-spinners/ScaleLoader'
import NavScroll from '../components/Nav_bar/NavScroll'
import Term from '../components/Term/Term'
import Foot_strip_ from '../components/Foot_strip/Foot_strip_'

function Terms () {
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
    <Term />
    <Foot_strip_ />
    </>
    }
    </div>
  );
};
export default Terms
