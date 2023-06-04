import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (   
        <section id="hero" className="hero">
          <div className="container position-relative">
            <div className="row gy-5" data-aos="fade-in">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center">
                <div>
                <h2 className="text-uppercase">tapones para oídos</h2>
                <h2 className="text-uppercase">silicona moldeable</h2>
              </div>
                <p className="text-uppercase">#1 En Ventas de Argentina</p>
                <div className="d-flex justify-content-center">
                  <Link to="/products" className="btn-get-started">Ver Más Productos</Link>
                </div>
              </div>
              <div className="d-flex col-lg-6 order-1 order-lg-2 justify-content-center">
                <img src="https://i.ibb.co/KGysFMW/inc-2.png" className="w-75" alt="" data-aos="zoom-out" data-aos-delay="100" />
              </div>
            </div>
          </div>
      
          <div className="icon-boxes position-relative">
            <div className="container position-relative">
              <div className="row gy-4 mt-5">
      
                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-volume-down"></i></div>
                    <h4 className="title">Protege de ruidos</h4>
                  </div>
                </div>
                
      
                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-moon-stars"></i></div>
                    <h4 className="title">Dormí mejor</h4>
                  </div>
                </div>
                
      
                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-droplet-half"></i></div>
                    <h4 className="title">Protege del agua</h4>
                  </div>
                </div>
                
      
                <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                  <div className="icon-box">
                    <div className="icon"><i className="bi bi-airplane-engines"></i></div>
                    <h4 className="title">Mejora tu experiencia al volar</h4>
                  </div>
                </div>
                
      
              </div>
            </div>
          </div>
      
          
        </section>
         );
}
 
export default Hero;