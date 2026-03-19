import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useProductsContext } from "../../context/Context";

const Navbar = () => {
  const { totalProductsInCart, user, setShowLoginModal } = useProductsContext();

  return (
    <header id="header" className="header d-flex align-items-center ">
      <div className="row-cols-3 container d-flex">
        <div className="col d-flex justify-content-start">
          <a href="/" className="logo d-flex align-items-center">
            <h1 translate="no">
              Earplugs<span>.</span>
            </h1>
          </a>
        </div>

        <div className="col d-flex justify-content-center">
          <nav id="navbar" className="navbar ">
            <ul>
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
        </div>

        <div className="col d-flex justify-content-end">
          {user ? (
            <NavLink to="/CartPage" className="d-flex align-items-center">
              <i className="bi bi-bag icon-cart">
                {totalProductsInCart > 0 ? totalProductsInCart : null}
              </i>
              <span id="user-name">Bienvenido {user?.nombre} {user?.apellido}</span>
            </NavLink>
          ) : (
            <button
              className="btn btn-outline-light"
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
