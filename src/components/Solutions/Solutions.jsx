import React from 'react';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: 'Uso Industrial',
      description: 'Protección auditiva certificada para entornos de alto ruido. Calidad mayorista.',
      icon: 'bi-gear-wide-connected', // Bootstrap icon
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Descanso y Sueño',
      description: 'Bloquea los ronquidos y ruidos molestos. Duerme plácidamente sin interrupciones.',
      icon: 'bi-moon-stars',
      image: `${process.env.PUBLIC_URL || ''}/solutions-sleep.jpg`,
    },
    {
      id: 3,
      title: 'Música y Eventos',
      description: 'Disfruta de la música en vivo protegiendo tu audición sin perder la calidad del sonido.',
      icon: 'bi-music-note-beamed',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop',
    }
  ];

  return (
    <section id="solutions" className="solutions-section section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Soluciones</h2>
          <h3>Para cada necesidad, una <span>protección a medida</span></h3>
          <p>Tanto para fábricas que necesitan equipar a sus trabajadores, como para el confort diario.</p>
        </div>

        <div className="row mt-4">
          {solutions.map((item) => (
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100" key={item.id}>
              <div className="solution-card">
                <div className="solution-img">
                  <img src={item.image} className="img-fluid" alt={item.title} />
                </div>
                <div className="solution-info">
                  <h4><i className={`bi ${item.icon}`}></i> {item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
