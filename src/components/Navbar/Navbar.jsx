import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useProductsContext } from "../../context/Context";

const Navbar = () => {
  const { totalProductsInCart, user, setShowLoginModal } = useProductsContext();

  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <h1 translate="no">
            Earplugs<span>.</span>
          </h1>
        </a>

        <nav id="navbar" className="navbar d-flex justify-content-center">
          <ul className="d-flex align-items-center gap-4 m-0 p-0 list-unstyled">
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/#about">Nosotros</NavLink>
            </li>
            <li>
              <NavLink to="/products">Productos</NavLink>
            </li>
            <li>
              <NavLink to="/#contact">Contacto</NavLink>
            </li>
          </ul>
        </nav>

        <div className="d-flex align-items-center gap-3">
          <NavLink to="/CartPage" className="nav-icon-link cart-wrapper" title="Carrito de compras">
            <i className="bi bi-bag icon-cart">
              {totalProductsInCart > 0 && (
                <span className="cart-badge">{totalProductsInCart}</span>
              )}
            </i>
          </NavLink>

          {user ? (
            <NavLink to="/profile" className="nav-icon-link user-profile-link">
              <div className="user-info-container">
                <span id="user-name">Hola, {user?.nombre || "Usuario"}</span>
                <div className="user-avatar">
                  <i className="bi bi-person-circle"></i>
                </div>
              </div>
            </NavLink>
          ) : (
            <button
              className="btn btn-login-custom"
              onClick={() => setShowLoginModal(true)}
            >
              Iniciar sesión
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
