import React, {useEffect, useState} from 'react';
import './Testimonials.css';
import TestimonialsSwiper from './TestimonialsSwiper';
import axios from 'axios';

const Testimonials = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
 
useEffect(() => {
  const cargarTestimonio = async () => {
    
    const response = await axios.get(
      `http://localhost:3000/api/testimonials`
    );
    setData(response.data);
    
  };
  cargarTestimonio();
}, []);



return ( <section id="testimonials" className="testimonials">
  <div className="container" data-aos="fade-up">

    <div className="section-header">
      <h2>Comentarios</h2>
      <p>Explora las experiencias de nuestros clientes y descubre por qué confían en nosotros.</p>
    </div>
      <TestimonialsSwiper data={data}/>
      
      
      <div className='swiper-pagination'></div>
  </div>
</section> );
}

export default Testimonials;