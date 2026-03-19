import React, { useRef } from "react";
import "./MobileNavbar.css";
import { useProductsContext } from "../../context/Context";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Asegurate de tener esto en tu proyecto

const MobileNavbar = () => {
  const { totalProductsInCart, user, setShowLoginModal } = useProductsContext();
  const offcanvasRef = useRef();

  const closeOffcanvas = () => {
    const offcanvasElement = offcanvasRef.current;
    if (offcanvasElement) {
      const bsOffcanvas = window.bootstrap?.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }
  };

  return (
    <nav className="navbar fixed-top">
      <div className="container-fluid">
        <h1 translate="no" className="px-4">
          Earplugs<span>.</span>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          ref={offcanvasRef}
        >
          <div className="offcanvas-header">
            <h1 translate="no" className="px-2">
              Earplugs<span>.</span>
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="navlink" to="/" onClick={closeOffcanvas}>
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink" to="/#about" onClick={closeOffcanvas}>Nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink" to="/products" onClick={closeOffcanvas}>
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navlink" to="/#contact" onClick={closeOffcanvas}>Contacto</NavLink>

              </li>
              <li className="nav-item">
                {user ? (
                  <NavLink to="/CartPage" className="d-flex align-items-center navlink" onClick={closeOffcanvas}>
                    <i className="bi bi-bag icon-cart">
                      {totalProductsInCart > 0 ? totalProductsInCart : null}
                    </i>
                    <span id="user-name">Bienvenido {user?.nombre} {user?.apellido}</span>
                  </NavLink>
                ) : (
                  <button
                    className="btn btn-outline-light"
                    onClick={() => {
                      setShowLoginModal(true);
                      closeOffcanvas();
                    }}
                  >
                    Iniciar sesión
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;