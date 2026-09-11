import React from 'react';
import { Link } from 'react-router-dom';
import './ProductLines.css';

const ProductLines = () => {
  return (
    <section id="product-lines" className="product-lines section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Nuestras Líneas de Productos</h2>
          <p>Soluciones auditivas diseñadas para diferentes necesidades</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-moon-stars"></i></div>
              <h4>Descanso</h4>
              <p>Diseñados para aislar el ruido y permitir un sueño profundo y reparador en cualquier entorno.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-water"></i></div>
              <h4>Natación</h4>
              <p>Sellado perfecto para proteger tus oídos del agua, ideales para nadadores y deportes acuáticos.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-tools"></i></div>
              <h4>Trabajo e Industria</h4>
              <p>Protección auditiva especializada para entornos ruidosos y de alta concentración.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link to="/products" className="btn-buy-online">Ver Catálogo Completo y Comprar Online</Link>
        </div>
      </div>
    </section>
  );
};

export default ProductLines;
