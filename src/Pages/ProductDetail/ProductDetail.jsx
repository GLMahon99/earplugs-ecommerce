import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../../context/Context';
import { BannerSale } from '../../components/bannerSale/BannerSale';
import ProductDetailContainer from '../../components/ProductDetail/ProductDetailContainer';
import './ProductDetail.css';
import Banner from '../../components/Banner/Banner';
import { Helmet } from 'react-helmet-async'; // Importamos Helmet

const ProductDetail = () => {
  const { products } = useProductsContext();
  let { id } = useParams();

  const product = products.find(producto => producto.producto_id.toString() === id);

  // Soluciona el potencial bug de "undefined" y mejora la experiencia si no existe el ID
  if (!product) {
    return (
      <div className="container py-5 text-center min-vh-100 mt-5">
        <h3 className="mt-5 text-muted">Buscando producto...</h3>
        <p>Si esto demora, es posible que el producto no exista.</p>
      </div>
    );
  }

  // Generamos una descripción limpia para compartición si el producto no tuviera una corta
  const metaDescription = product.descripcion 
    ? product.descripcion.slice(0, 150) + '...' 
    : `Encontrá el tapón auditivo ${product.nombre} ideal para protección y confort.`;

  return (
    <>
      <Helmet>
        {/* Título en la pestaña del navegador */}
        <title>{product.nombre} | Earplugs Store</title>
        
        {/* Descripción leída por Google para los resultados de búsqueda */}
        <meta name="description" content={metaDescription} />
        
        {/* Estos tags "og" son los que lee WhatsApp/Facebook para la previsualización al pasar un link */}
        <meta property="og:title" content={`${product.nombre} - Earplugs Store`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={product.imagen_url || product.imagen} />
        <meta property="og:type" content="product" />
      </Helmet>

      <Banner />
      <BannerSale />
      
      <main id='main'>
        <ProductDetailContainer product={product} key={product.producto_id} />
      </main>
    </>
  );
};

export default ProductDetail;