import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import ContactForm from './components/ContactForm/ContactForm';




const App = () => {


  const[playState, setPlayState] = useState(false);
  return (
    <div>
     <Navbar/> 
     <Hero/>
     <div className="container">
      <Title subTitle = 'Unlock Your Ristricted Account Now'   title='Protecting your digital presence with the latest technology is our priority.' />
     <Programs/>
     <About setPlayState={setPlayState}/> 
     <Title subTitle = ''   title='' />
     <Campus/>
     <Title subTitle = ''   title='' />
      <Testimonials/>
      <Title subTitle = 'Lets Rent your Account'   title='Get in Touch' />
      <Contact/>
      <Footer/>
      {/* <ContactForm /> */}


     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
