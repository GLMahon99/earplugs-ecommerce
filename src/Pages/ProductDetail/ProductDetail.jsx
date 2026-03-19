import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../../context/Context';
import { BannerSale } from '../../components/bannerSale/BannerSale';
import ProductDetailContainer from '../../components/ProductDetail/ProductDetailContainer';
import './ProductDetail.css';
import Banner from '../../components/Banner/Banner'


const ProductDetail = () => {
  const { products } = useProductsContext();
  let {id} = useParams();

console.log("id de params", id);
console.log("contexto", products);


const product = products.find(producto => producto.producto_id.toString() === id);

if (product) {
  console.log(product);
} else {
  console.log('No se encontró un producto con el id proporcionado');
}



  return (
    <>
        <Banner/>
        <BannerSale/>
        
        <main id='main'>
        <ProductDetailContainer product={product} key={product.producto_id}/>
        </main>
        </>
  );
};

export default ProductDetail;