import React from "react";
import "./SectionLoginRegister.css";

import { Register } from "../../components/Register/Register";
import { LogoMiniEarplugs } from "../../components/LogoMiniEarplugs/LogoMiniEarplugs";
import { useNavigate } from "react-router-dom";
export const SectionLoginRegister = () => {
  const navigate = useNavigate();
  return (
    <section id="section-login">
      <div className="row">
        <div className="col-4 portada d-flex justify-content-center align-items-center flex-column ">
          <div className="d-flex  mb-2 align-items-center">
            <span
              id="logo"
              className="d-flex align-items-center justify-content-end"
            >
              <LogoMiniEarplugs />
            </span>
            <div className="d-flex flex-column align-items-start justify-content-between h-100 titles">
              <h3 className="mb-1">
                Earplugs<span id="point-earplugs">.</span>
              </h3>
              <p className="mb-0">Protege tus oídos.</p>
            </div>
          </div>
          <div className="d-inline mt-4 portada-text text-center w-75">
            <p>
              <strong>
                ¡Tu carrito está esperando! <i class="bi bi-cart4"></i>
              </strong>
            </p>
            <p>
              Antes de que puedas darle a tus oídos la protección que merecen,
              necesitas iniciar sesión o registrarte. No te preocupes, es rápido
              y sencillo.
            </p>
            <p>
              <strong>Un par de clics y estarás listo para comprar.</strong>
            </p>
          </div>
        </div>
        <div className="col-lg-8 col-12  d-flex justify-content-center align-items-center">
          <div id="login-register" className="px-5">
            <div className="mb-4" id="buttons-login">
              <button className="button-register">Registrarse</button>
              <button className="button-login"  onClick={() => navigate("/")}>Iniciar Sesión</button>
            </div>

            <Register />
          </div>
        </div>
      </div>
    </section>
  );
};
