import React,{useState,useEffect} from "react";
import ScaleLoader from 'react-spinners/ScaleLoader'
import NavScroll from '../components/Nav_bar/NavScroll'

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
    <h1>Terms</h1>
    </>
    }
    </div>
  );
};
export default Terms
