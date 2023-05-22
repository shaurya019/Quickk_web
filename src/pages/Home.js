import React,{useState,useEffect} from "react";
import ScaleLoader from 'react-spinners/ScaleLoader'
// import But from '../components/A_But/A_button';
// import About_c from '../components/About_c/About_c.js';
// import Footer from '../components/Foot_bar/footer';
// import Hide from '../components/Hide_show/Hide';
import NavScroll from '../components/Nav_bar/NavScroll'
// import Top from '../components/Top_but/Top'
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
      <Modal />
    <h1>Home</h1>
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
