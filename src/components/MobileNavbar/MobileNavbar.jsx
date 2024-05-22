import React from "react";
import "./MobileNavbar.css";
import { useProductsContext } from "../../context/Context";

import { NavLink } from "react-router-dom";


const MobileNavbar = () => {

  
const { totalProductsInCart} = useProductsContext();
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
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
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
                <NavLink className="navlink" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="navlink" href="#about">
                  Nosotros
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="navlink " to="/products">
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="navlink" aria-current="page" href="#contact">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <NavLink to="/CartPage" className="d-flex align-items-center navlink">
                  <i class="bi bi-bag icon-cart">
                    {totalProductsInCart > 0 ? totalProductsInCart : <></>}
                  </i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
