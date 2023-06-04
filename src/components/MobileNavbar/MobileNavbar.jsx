import React from 'react';
import './MobileNavbar.css';

import { NavLink } from 'react-router-dom';



const MobileNavbar = () => {
    return ( <nav className="navbar fixed-top">
    <div className="container-fluid">
      <h1 className='px-4'>Earplugs<span>.</span></h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
        <h1 className='px-2'>Earplugs<span>.</span></h1>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <NavLink className='navlink' to='/'>Inicio</NavLink >
            </li>
            <li className="nav-item">
              <a className="navlink" href="#about">Nosotros</a>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="navlink dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className='navlink px-2'  to='/products'>Todos los productos</NavLink ></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><NavLink className='navlink px-2'  to='/products/waterproof'>Proteccion del agua</NavLink ></li>
                <li><NavLink className='navlink px-2'  to='/products/soundreducers'>Reductores de sonido</NavLink ></li>
                <li><NavLink className='navlink px-2'  to='/products/watersports'>Deportes acuáticos</NavLink ></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="navlink" aria-current="page" href="#contact">Contacto</a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </nav> );
}
 
export default MobileNavbar;