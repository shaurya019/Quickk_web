import React,{useState,useEffect} from "react";
import ScaleLoader from 'react-spinners/ScaleLoader'
import Main_about from '../components/Main_about/Main_about';
import Main_about2 from '../components/Main_about/Main_about2';
import Footer from '../components/Foot_bar/footer';
import NavScroll from '../components/Nav_bar/NavScroll'
import About_c from '../components/About_c/About_c.js';
import Card from '../components/Card/Card'
import Down from '../components/Down/Down';

function About () {
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
      {/* <Main_about2 /> */}
      {/* <Main_about /> */}
      {/* <About_c /> */}
      <Card />
      {/* <Down /> */}
      <Footer />
    </>
    }
    </div>
  );
};

export default About;
