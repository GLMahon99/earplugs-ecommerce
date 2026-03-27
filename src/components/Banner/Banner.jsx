import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";


const Banner = () => {
  

  return (
    <section className="banner-area organic-breadcrumb">
      
      <div className="container">
        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
          <div className="col-first">
            <h1 id="title-banner">Detalle del producto</h1>
            <nav className="d-flex align-items-center">
              <Link className="link-banner" to="/">
                Inicio<span className="bi bi-slash-lg"></span>
              </Link>
              <Link className="link-banner" to="/products">
                Productos<span className="bi bi-slash-lg"></span>
              </Link>
              <span className="link-banner-active">Detalle</span>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
