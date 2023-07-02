import React,{useState,useEffect} from "react";
import ScaleLoader from 'react-spinners/ScaleLoader'
import Delivery from '../components/Delivery/Delivery';
import NavScroll from '../components/Nav_bar/NavScroll'
import Q_about from '../components/Q_about/Q_about'
import But from '../components/A_But/A_button';
import Footer from '../components/Foot_bar/footer';
import Top from '../components/Top_but/Top'
import Main from '../components/Main/Main';
import Main2 from '../components/Main/Main2.js';
import Started from '../components/Started/Started';
import Choose from '../components/Choose/Choose';
import Choose2 from '../components/Choose/Choose2';



function Home () {
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
      // loading ? 
      // <div className="home">
      // <ScaleLoader color="#FFF" 
      // size={100}
      // cssOverride={{textAlign:"center"}}
      // loading = {loading} />
      // </div>
      // :
      <>
      <NavScroll />
      <Main />
      <Main2 />
      <Q_about /> 
      <Choose2 />
      {/* <Choose /> */}
      <Delivery />
      <Started />
      <Footer />
    </>
    }
    </div>
  );
};

export default Home;

