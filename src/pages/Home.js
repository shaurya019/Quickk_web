import React,{useState,useEffect} from "react";
import ScaleLoader from 'react-spinners/ScaleLoader'
import NavScroll from '../components/Nav_bar/NavScroll'
import Policy from '../components/Policy/Policy'
import But from '../components/A_But/A_button';
import About_c from '../components/About_c/About_c.js';
import Footer from '../components/Foot_bar/footer';
import Term from '../components/Term/Term'
import Card from '../components/Card/Card'
import Top from '../components/Top_but/Top'
import Modal from '../components/Modal_show/Modal';

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
      {/* <Policy /> */}
      {/* <Term /> */}
      {/* <Footer /> */}
     
      <About_c />
      {/* <Modal /> */}
      {/* <Card /> */}
    </>
    }
    </div>
  );
};

export default Home;


/* <But/> */
    /* <Footer/> */
    /* <Hide /> */
    /* <Modal /> */
    /* <Top /> */
    /* <About_c/> */
