import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ProductDetailContainer from '../../components/ProductDetail/ProductDetailContainer';

import { useParams } from 'react-router-dom';
import './ProductDetail.css';

import Banner from '../../components/Banner/Banner';


const ProductDetail = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState();
    const {detalleId} = useParams();
   
  console.log('este es el detalleID', detalleId);
  useEffect(() => {
    const cargarProducto = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3000/api/product/${detalleId}`
      );
      setData(response.data);
      setLoading(false);
    };
    cargarProducto();
  }, []);
  
console.log('este es la data', data)
  
  
    return (
        <>
        <Banner/>
        <main id='main'>
        <ProductDetailContainer data={data}/>
        </main>
        </>
        
     );
}
 
export default ProductDetail;