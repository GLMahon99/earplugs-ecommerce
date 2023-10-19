import React from 'react';
import ProductsItem from './ProductsItem';

const ProductsList = ({dataProducts}) => {
    return ( <>
    {dataProducts.map((item) => <ProductsItem  id={item.producto_id}
    title={item.titulo} imagen={item.img}
    /> )}
    </>
    
  );
}
 
export default ProductsList;