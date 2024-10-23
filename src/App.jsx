
import { useState } from "react";
import About from "./component/About/About";
import Campus from "./component/Campus/Campus";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero"
import Navbar from "./component/Navbar/Navbar"

import Programs from './component/Programs/Programs';
import Testimonials from "./component/Testimonilas/Testimonials";
import Title from "./component/Title/Title";
import VideoPlayer from "./component/Videoplayer/VideoPlayer";



function App() {

const [playState , setPlayState]=useState(false);


  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our PROGRAM' title="What We Offer"/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title="Campus Photos"/>
      <Campus/>
      <Title subTitle='TESTIMOINIALS' title="What Student Says"/>
      <Testimonials/>
      <Title subTitle='Contact Us' title="Get in Touch"/>
      <Contact/>
      <Footer/>
     

      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
   
    </>
  )
}

export default App
