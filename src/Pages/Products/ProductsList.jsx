import React from 'react';
import ProductsItem from './ProductsItem';

const ProductsList = ({dataProducts}) => {
    return ( <>
    {dataProducts.map((item) => <ProductsItem  {...item}/> )}
    </>
    
  );
}
 
export default ProductsList;