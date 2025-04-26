import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Portfolio from './components/portofolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Aboutus />
      <Services/>
      <Portfolio/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
