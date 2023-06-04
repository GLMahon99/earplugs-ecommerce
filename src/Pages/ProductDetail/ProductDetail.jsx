import React, { useState, useEffect } from 'react';

import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ProductDetailContainer from '../../components/ProductDetail/ProductDetailContainer';

import { useParams } from 'react-router-dom';
import './ProductDetail.css';

import Banner from '../../components/Banner/Banner';


const ProductDetail = () => {
    const [data, setData] = useState({});
    const {detalleId} = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const querydoc = doc(querydb, 'items', detalleId);
        getDoc(querydoc)
        .then(res => setData({id: res.id, ...res.data()}))
    },[detalleId])

    console.log(data);
    
    
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