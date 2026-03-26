import React, { useState } from "react";
import ProductDescription from "../ProductDescription/ProductDescription";
import "./ProductDetailContainer.css";
import { useProductsContext } from "../../context/Context";
import { Link } from "react-router-dom";
import { optimizeCloudinaryUrl } from "../../utils/cloudinaryUtils";

const ProductDetailContainer = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [alertAddToCart, setAlertAddToCart] = useState(false);
  const { addToCart, user } = useProductsContext();

  return (
    <div className="container" id="productDetail-container" data-aos="fade-up">
      <div className="row gy-5 gx-3 gx-lg-5">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-start">
          <div className="product-image-wrapper p-3" data-aos="zoom-in" data-aos-delay="200">
            <img 
              src={optimizeCloudinaryUrl(product.img)} 
              alt={product.titulo} 
              className="img-fluid img-product-detail" 
              loading="lazy"
            />
          </div>
        </div>

        <div className="col-12 col-md-6" data-aos="fade-left" data-aos-delay="400">
          <div className="product-info-wrapper pe-md-4">
            <h5 className="code">{product.codigo}</h5>
            <h1 className="title-product">{product.titulo}</h1>

            <div className="divider my-4" style={{ height: '2px', background: '#f0f0f0', width: '60px' }}></div>

            <ul className="items-product">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                product[`item${num}`] && <li key={num}>{product[`item${num}`]}</li>
              ))}
            </ul>

            <div className="purchase-section mt-5 p-3 p-md-4 bg-light rounded-4 overflow-hidden">
              <div className="row align-items-center gy-4 gx-3 mx-0">
                <div className="col-12 col-sm-6">
                  <div className="product-price">${product.precio?.toLocaleString()},00</div>
                  <div className="product-stock mt-1">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    {product.stock} unidades disponibles
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <label className="form-label small fw-bold text-muted">Cantidad</label>
                  <div className="d-flex align-items-center">
                    <input
                      type="number"
                      min="1"
                      max={product.stock}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, Number(e.target.value))))}
                      className="form-control form-control-lg text-center fw-bold me-3"
                      style={{ width: '80px', borderRadius: '12px' }}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <button
                    className="btn button-addToCart btn-lg rounded-pill py-3 d-flex align-items-center justify-content-center"
                    disabled={!user || product.stock === 0 || quantity > product.stock}
                    onClick={() => {
                      addToCart(
                        product.producto_id,
                        product.titulo,
                        product.codigo,
                        product.precio,
                        product.img,
                        quantity
                      );
                      setAlertAddToCart(true);
                      setTimeout(() => setAlertAddToCart(false), 5000);
                    }}
                  >
                    <i className="bi bi-cart-plus me-2"></i>
                    Agregar al carrito
                  </button>

                  {!user && (
                    <div className="mt-3 text-center small text-muted">
                      <i className="bi bi-info-circle me-1"></i>
                      Debés iniciar sesión para comprar.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {alertAddToCart && (
              <div className="alert alert-addToCart mt-4 animate__animated animate__fadeInUp d-flex align-items-center justify-content-between p-3" role="alert">
                <span>
                  <i className="bi bi-bag-check-fill me-2"></i>
                  ¡Producto añadido con éxito!
                </span>
                <Link to="/CartPage" className="btn btn-sm btn-outline-success border-0 fw-bold">
                  VER CARRITO <i className="bi bi-arrow-right ms-1"></i>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3" data-aos="fade-up" data-aos-delay="600">
        <ProductDescription
          description={product.descripcion}
          comments={product.comentarios}
          indications={product.indicaciones}
          classification={product.calificacion}
        />
      </div>
    </div>
  );
};

export default ProductDetailContainer;
