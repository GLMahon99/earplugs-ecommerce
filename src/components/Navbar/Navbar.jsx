import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useProductsContext } from "../../context/Context";

const Navbar = () => {
  const { totalProductsInCart } = useProductsContext();

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
              {/* <li><a  href="#team">Team</a ></li> */}

              <li>
                <NavLink to="/products">Productos</NavLink>
              </li>
              <li>
                <NavLink to="/#contact">Contacto</NavLink>
              </li>
              <li></li>
            </ul>
          </nav>
        </div>
        <div className="col d-flex justify-content-end">
          <NavLink to="/CartPage" className="d-flex align-items-center">
            <i class="bi bi-bag icon-cart">
              {totalProductsInCart > 0 ? totalProductsInCart : <></>}
            </i>
          </NavLink>
        </div>
      </div>
      
    </header>
  );
};

export default Navbar;
