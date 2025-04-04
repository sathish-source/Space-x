import bgVideo from './assets/Earth-video.mp4'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Banner from './Components/Banner'
import Banner2 from './Components/Banner2'
import Footer from './Components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    })
  });

  return (
    <>
      <div className="h-[700px] relative">
        <video autoPlay loop muted className='fixed right-0 top-0 h-[700px] w-full object-cover z[-1]'>
          <source src={bgVideo} type='video/mp4' />
        </video>
        <Navbar/>
        <Hero/>
      </div>
      <Services/>
      <Banner/>
      <Banner2/>
      <Footer/>
    </>
  )
}

export default App
