import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 'rest',
    badge: '#1 En Ventas de Argentina',
    badgeBg: '#106eea',
    title1: 'PROTECCIÓN AUDITIVA',
    title2: 'Y Confort Absoluto',
    description: 'Tapones de silicona moldeable de alta calidad. Diseñados tanto para un descanso profundo sin ruidos como para protección de grado industrial.',
    btnPrimary: { text: 'Comprar Online', link: '/products' },
    btnSecondary: { text: 'Atención a Empresas', link: '#contact' },
    bgImage: `${process.env.PUBLIC_URL || ''}/hero-bg-modern.jpg`,
    bgImageMobile: `${process.env.PUBLIC_URL || ''}/hero-bg-modern-mobile.jpg`,
    iconBoxes: [
      { icon: 'bi-volume-down-fill', title: 'Protección de ruidos' },
      { icon: 'bi-moon-stars-fill', title: 'Descanso profundo' },
      { icon: 'bi-droplet-fill', title: 'Aislante de agua' },
      { icon: 'bi-airplane-fill', title: 'Confort en viajes' }
    ]
  },
  {
    id: 'water',
    badge: '¡Adherencia Premium! • Línea Splash',
    badgeBg: '#15803d',
    title1: 'DEPORTES ACUÁTICOS',
    title2: 'Prevención de Infecciones',
    description: 'Tapones de silicona fluo de mayor adherencia. Ideales para natación, surf, kite y ducha. Evitan la entrada de agua y previenen la otitis.',
    btnPrimary: { text: 'Ver Línea Splash', link: '/products' },
    btnSecondary: { text: 'Atención Mayorista', link: '#contact' },
    bgImage: `${process.env.PUBLIC_URL || ''}/hero-bg-water.jpg`,
    bgImageMobile: `${process.env.PUBLIC_URL || ''}/hero-bg-water-mobile.jpg`,
    iconBoxes: [
      { icon: 'bi-water', title: 'Máxima Adherencia' },
      { icon: 'bi-shield-fill-check', title: 'Evita Infecciones' },
      { icon: 'bi-tsunami', title: 'Natación y Surf' },
      { icon: 'bi-patch-check-fill', title: 'Silicona Hipoalergénica' }
    ]
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[current];
  const currentBg = isMobile ? slide.bgImageMobile : slide.bgImage;

  return (
    <section 
      id="hero" 
      className="hero hero-carousel" 
      style={{ backgroundImage: `url("${currentBg}")` }}
    >
      <button className="carousel-control-prev custom-carousel-btn" onClick={prevSlide} aria-label="Anterior">
        <i className="bi bi-chevron-left"></i>
      </button>
      <button className="carousel-control-next custom-carousel-btn" onClick={nextSlide} aria-label="Siguiente">
        <i className="bi bi-chevron-right"></i>
      </button>

      <div className="container position-relative py-5">
        <div className="row gy-5" key={slide.id}>
          <div className="col-lg-7 d-flex flex-column justify-content-center text-start">
            <div className="mb-2">
              <span 
                className="badge px-3 py-2 text-uppercase mb-3" 
                style={{ backgroundColor: slide.badgeBg, fontSize: '0.85rem', letterSpacing: '1px' }}
              >
                {slide.badge}
              </span>
              <h1 className="text-uppercase fw-bold text-white display-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
                {slide.title1}
              </h1>
              <h2 className="text-uppercase text-light fw-light h3" style={{ opacity: 0.9, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
                {slide.title2}
              </h2>
            </div>
            <p className="mt-3 mb-4 text-white" style={{ fontSize: '1.2rem', maxWidth: '520px', textShadow: '0 1px 5px rgba(0,0,0,0.8)' }}>
              {slide.description}
            </p>
            <div className="d-flex justify-content-start gap-3 flex-wrap">
              <Link to={slide.btnPrimary.link} className="btn-get-started mb-2">{slide.btnPrimary.text}</Link>
              <a href={slide.btnSecondary.link} className="btn-get-started mb-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', border: '2px solid #fff' }}>{slide.btnSecondary.text}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="icon-boxes position-relative mt-4 pb-4">
        <div className="container position-relative">
          <div className="row gy-3">
            {slide.iconBoxes.map((item, idx) => (
              <div className="col-lg-3 col-6" key={idx}>
                <div className="icon-box d-flex align-items-center gap-3">
                  <div className="icon"><i className={`bi ${item.icon}`}></i></div>
                  <h4 className="title m-0">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="carousel-indicators-custom">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`indicator-dot ${idx === current ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;