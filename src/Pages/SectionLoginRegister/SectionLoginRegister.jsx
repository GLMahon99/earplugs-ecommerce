import React from "react";
import "./SectionLoginRegister.css";

import { Register } from "../../components/Register/Register";
import { useNavigate } from "react-router-dom";

export const SectionLoginRegister = () => {
  const navigate = useNavigate();
  return (
    <section id="section-login" className="d-flex w-100 min-vh-100 p-0 m-0">
      <div className="row g-0 w-100 min-vh-100">
        {/* Left Side Info */}
        <div 
          className="col-lg-5 d-none d-lg-flex flex-column align-items-center justify-content-center position-relative" 
          style={{ backgroundColor: "var(--color-primary)", color: "#fff" }}
        >
          <div className="p-5 w-100 text-center z-1">
            <h2 className="display-4 fw-bold mb-3">
              Earplugs.
            </h2>
            <p className="fs-4 mb-5 opacity-75">Protege tus oídos.</p>
            
            <div className="p-4 rounded-3 text-start mx-auto" style={{ backgroundColor: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '400px' }}>
               <h5 className="fw-bold mb-3 d-flex align-items-center">
                 <i className="bi bi-cart4 text-warning fs-4 me-2"></i>
                 ¡Tu carrito te espera!
               </h5>
               <p className="mb-0 small lh-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
                 Regístrate o inicia sesión para darle a tus oídos la protección que merecen. Es un proceso rápido y sencillo.
               </p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="col-lg-7 d-flex flex-column justify-content-center bg-white">
          <div className="w-100 px-4 px-md-5 py-5 mx-auto" style={{ maxWidth: "800px" }}>
            <div className="d-flex justify-content-end align-items-center mb-5 pb-3 border-bottom border-light">
              <span className="text-muted small me-3 d-none d-sm-inline">¿Ya tenés cuenta?</span>
              <button 
                className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold" 
                onClick={() => navigate("/")}
              >
                Iniciar Sesión
              </button>
            </div>

            <Register />
          </div>
        </div>
      </div>
    </section>
  );
};
