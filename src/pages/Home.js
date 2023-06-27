import React,{useState,useEffect} from "react";
import ScaleLoader from 'react-spinners/ScaleLoader'
import NavScroll from '../components/Nav_bar/NavScroll'
import Policy from '../components/Policy/Policy'
import Q_about from '../components/Q_about/Q_about'
import But from '../components/A_But/A_button';
import About_c from '../components/About_c/About_c.js';
import Footer from '../components/Foot_bar/footer';
import Term from '../components/Term/Term'
import Card from '../components/Card/Card'
import Top from '../components/Top_but/Top'
import Modal from '../components/Modal_show/Modal';
import Down from '../components/Down/Down';
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
      <Choose />
      {/* <Started /> */}
      {/* <Main /> */}
      {/* <Down /> */}
      {/* <Policy /> */}
      {/* <Term /> */}
      {/* <Footer /> */}
      {/* <Q_about /> */}
      {/* <About_c /> */}
      {/* <Modal /> */}
      {/* <Card /> */}
    </>
    }
    </div>
  );
};

export default Home;

