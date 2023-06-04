import React, {useEffect, useState} from 'react';
import './Testimonials.css';
import TestimonialsSwiper from './TestimonialsSwiper';
import { db } from '../../firebase/firebase';

import { collection, getDocs} from 'firebase/firestore';

const Testimonials = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "testimonials"));
      const documents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(documents);
    };

    fetchData();
  }, [data]);

  

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