import React,{useState,useEffect} from "react";
import ScaleLoader from 'react-spinners/ScaleLoader'
import Delivery from '../components/Delivery/Delivery';
import NavScroll from '../components/Nav_bar/NavScroll'
import Q_about from '../components/Q_about/Q_about'
import But from '../components/A_But/A_button';
import Footer from '../components/Foot_bar/footer';
import Top from '../components/Top_but/Top'
import Main from '../components/Main/Main';
import Started from '../components/Started/Started';
import Choose from '../components/Choose/Choose';


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
      <Q_about />
      <Delivery />
      <Started />
      {/* <Choose /> */}
      <Footer />
    </>
    }
    </div>
  );
};

export default Home;

