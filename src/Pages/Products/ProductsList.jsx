import React from 'react';
import ProductsItem from './ProductsItem';

const ProductsList = ({ filteredProducts }) => {
    return (
        <>
            {filteredProducts.map((item, index) => (
                <ProductsItem
                    key={item.producto_id}
                    id={item.producto_id}
                    title={item.titulo}
                    imagen={item.img}
                    size={index < 5 ? "small" : "large"}
                />
            ))}
        </>
    );
}

export default ProductsList;