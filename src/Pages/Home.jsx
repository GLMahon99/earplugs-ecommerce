import React, {useEffect} from 'react';
import About from '../components/About/About';
import Clients from '../components/Clients/Clients';
import Contact from '../components/Contact/Contact';
import Counter from '../components/Counter/Counter';
import Hero from '../components/Hero/Hero';
import Questions from '../components/Questions/Questions';
// import Team from '../components/Team/Team';
import Testimonials from '../components/Testimonials/Testimonials';


import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Verifica si la ubicación actual tiene un hash de sección
    if (location.hash === '#contact') {
      // Desplázate automáticamente a la sección de contacto si el hash coincide
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  useEffect(() => {
    // Verifica si la ubicación actual tiene un hash de sección
    if (location.hash === '#about') {
      // Desplázate automáticamente a la sección de contacto si el hash coincide
      const contactSection = document.getElementById('about');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);
    return ( <>
        <Hero/>
      <main id='main'>
        <About/>
        <Clients/>
        <Counter/>
        <Testimonials/>
        <Questions/>
        {/* <Team/> */}
        <Contact/>
      </main>
      
    </> );
}
 
export default Home;