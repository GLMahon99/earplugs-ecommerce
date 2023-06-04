import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
    return ( <section class="banner-area organic-breadcrumb">
    <div class="container">
        <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div class="col-first">
                <h1>Detalle del producto</h1>
                <nav class="d-flex align-items-center">
                    <Link className='link-banner' to="/">Inicio<span class="bi bi-slash-lg"></span></Link>
                    <Link className='link-banner' to="/products">Productos<span class="bi bi-slash-lg"></span></Link>
                    <span className='link-banner-active'>Detalle</span>
                </nav>
            </div>
        </div>
    </div>
</section> );
}
 
export default Banner;