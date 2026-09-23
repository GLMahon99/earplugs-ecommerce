import React from 'react';
import Clients from '../components/Clients/Clients';
import Hero from '../components/Hero/Hero';
import Questions from '../components/Questions/Questions';
import Solutions from '../components/Solutions/Solutions';
import Testimonials from '../components/Testimonials/Testimonials';
import ScrollTop from '../components/ScrollTop/ScrollTop';

const Home = () => {
    return ( <>
        <Hero/>
      <main id='main'>
        <Solutions/>
        <Clients/>
        <Testimonials/>
        <Questions/>
        <ScrollTop />
      </main>
      
    </> );
}
 
export default Home;