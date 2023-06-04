import React, {useEffect, useState} from 'react';
import './Products.css';
import { useParams } from 'react-router-dom';



import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ProductsList from './ProductsList';

import { Link } from 'react-router-dom';

const Products = () => {


  const [ dataProducts, setDataProducts ] = useState([]);
 
  const {categoryId} = useParams();


  useEffect(() => {
        const querydb = getFirestore();
        const querycollection = collection(querydb,"items");
        if(categoryId) {
          const queryfilter = query(querycollection, where('categoryId','==', categoryId))
          getDocs(queryfilter)
          .then(res => setDataProducts(res.docs.map(item => ({id: item.id, ...item.data()}))))
        } else {
          getDocs(querycollection)
          .then(res => setDataProducts(res.docs.map(item => ({id: item.id, ...item.data()}))))
        }
        
  }, [categoryId])
  
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
            <li><Link className='links' to='/products/waterproof'>Proteccion del agua</Link></li>
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