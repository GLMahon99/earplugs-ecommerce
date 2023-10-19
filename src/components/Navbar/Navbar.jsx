import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    
    return ( 
      <header id="header" className="header d-flex align-items-center ">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <h1 translate="no">
            Earplugs<span>.</span>
          </h1>
        </a>
    <nav id="navbar" className="navbar ">
              <ul>
                <li><NavLink  to='/'>Inicio</NavLink ></li>
                <li><NavLink  to='/#about'>Nosotros</NavLink ></li>
                {/* <li><a  href="#team">Team</a ></li> */}
                
                <li className="dropdown"><NavLink  to='/products'><span>Productos</span> <i className="bi bi-chevron-down dropdown-indicator"></i></NavLink >
                  <ul>
                    <li><NavLink  to='/products'>Todos los productos</NavLink ></li>
                    <li><NavLink  to='/products/both'>Proteccion agua y ruido</NavLink ></li>
                    <li><NavLink  to='/products/sound'>Reductores de sonido</NavLink ></li>
                    <li><NavLink  to='/products/water'>Deportes acuáticos</NavLink ></li>
                  </ul>
                </li>
                <li><NavLink  to='/#contact'>Contacto</NavLink ></li>
              </ul>
            </nav>
            </div>
      </header>
             );
}
 
export default Navbar;