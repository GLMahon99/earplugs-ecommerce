import React, {useEffect, useState} from 'react';
import './Products.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';


import ProductsList from './ProductsList';

import { Link } from 'react-router-dom';

const Products = () => {


  const [ dataProducts, setDataProducts ] = useState([]);
  const [loading, setLoading] = useState(false);
  const {categoryId} = useParams();


  useEffect(() => {
        const cargarProductos = async () => {
          setLoading(true);
          const response = await axios.get('http://localhost:3000/api/products');
          setDataProducts(response.data);
          setLoading(false);
        };
        cargarProductos();
        
  }, [])
  
  console.log(dataProducts);




    return ( 
    
    <section id="products" className="products sections-bg">
   
    <div className="container" data-aos="fade-up">

      <div className="section-header">
        <h2>Productos</h2>
        <p>Tapones para oídos de la más alta calidad que vas a encontrar en el mercado.</p>
      </div>

      <div className="products-isotope" data-products-filter="*" data-products-layout="masonry" data-products-sort="original-order" data-aos="fade-up" data-aos-delay="100">

        <div>
          <ul className="products-flters">
            <li  className="filter-active"><Link to='/products'>Todos los productos</Link></li>
            <li><Link className='links' to='/products/waterproof'>Proteccion agua y ruido</Link></li>
            <li><Link className='links' to='/products/soundreducers'>Reductores de sonido</Link></li>
            <li><Link className='links' to='/products/watersports'>Deportes acuaticos</Link></li>
          </ul>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4 products-container">
          <ProductsList dataProducts={dataProducts}/>
        </div>

      </div>

    </div>
  </section> );
}
 
export default Products;