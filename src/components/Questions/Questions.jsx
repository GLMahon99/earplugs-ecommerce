import React, {useEffect, useState} from 'react';
import './Questions.css';
import axios from 'axios';

import QuestionItem from './QuestionItem';

const Questions = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const cargarFaq = async () => {
      
      const response = await axios.get(
        `http://localhost:3000/api/faq`
      );
      setData(response.data);
      
    }
    cargarFaq();
  }, []);

    return ( 
        <section id="faq" className="faq">
      <div className="container" data-aos="fade-up">

        <div className="row gy-4">

          <div className="col-lg-4">
            <div className="content px-xl-5">
              <h3><strong>Preguntas Frecuentes</strong></h3>
              <p>
              Encuentra aquí las respuestas a las preguntas más comunes sobre nuestros productos.
              </p>
            </div>
          </div>

          <div className="col-lg-8">

            <div className="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">

              <QuestionItem data={data}/>
            </div>

          </div>
        </div>

      </div>
    </section>
     );
}
 
export default Questions;