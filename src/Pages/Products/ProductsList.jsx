import React from 'react';
import ProductsItem from './ProductsItem';

const ProductsList = ({filteredProducts}) => {
    return ( <>
    {filteredProducts.map((item) => <ProductsItem  id={item.producto_id}
    title={item.titulo} imagen={item.img}
    /> )}
    </>
    
  );
}
 
export default ProductsList;