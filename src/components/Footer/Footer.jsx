import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { Location } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <span>Earplugs</span>
            </a>
            <p>
              Dale a tus oídos el cuidado que se merecen. Disfruta de noches de
              sueño ininterrumpido y revitalizante, mientras proteges tus oídos
              del ruido. Evita infecciones y dolor por el ingreso de agua.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.facebook.com/EarplugsTapones" Target="_blank" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/earplugs_tjm/" Target="_blank" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Enlaces útiles</h4>
            <ul>
              <li>
                <NavLink to="/">Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/#about">Nosotros</NavLink>
              </li>
              {/* <li>
                <a href="#team">Team</a>
              </li> */}
              <li>
                <NavLink to="/products">Productos</NavLink>
              </li>
              <li>
                <NavLink to="/#contact">Contacto</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Productos</h4>
            <ul>
              <li>
                <NavLink to="/products/waterproof">Proteccion del agua</NavLink>
              </li>
              <li>
                <NavLink to="/products/soundreducers">
                  Reductores de sonido
                </NavLink>
              </li>
              <li>
                <NavLink to="/products/watersports">Deportes acuáticos</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contacto</h4>
            <p>
              Buenos Aires, Argentina. <br></br>
              <strong>Teléfono:</strong> +1 5589 55488 55<br></br>
              <strong>Email:</strong> tjmearplugs@hotmail.com<br></br>
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Earplugs</span>
          </strong>
          . Todos los derechos reservados
        </div>
        <div className="credits"></div>
      </div>
    </footer>
  );
};

export default Footer;
