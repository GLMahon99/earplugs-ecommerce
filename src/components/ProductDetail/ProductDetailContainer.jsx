import React, { useState } from "react";
import ProductDescription from "../ProductDescription/ProductDescription";
import "./ProductDetailContainer.css";
import { useProductsContext } from "../../context/Context";
import { Link } from "react-router-dom";

const ProductDetailContainer = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [alertAddToCart, setAlertAddToCart] = useState(false);
  const { addToCart } = useProductsContext();

  return (
    <div className="container my-5" id="productDetail-container">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col container ">
          <div className="container">
            <img src={product.img} alt="" className="img-product-detail mb-3" />
          </div>
        </div>
        <div className="col container">
          <h1>{product.producto_id}</h1>
          <h3 className="title-product">{product.titulo}</h3>
          <hr />
          <h5 className="code">{product.codigo}</h5>
          <ul className="items-product">
            {product.item1 ? <li>{product.item1}</li> : <></>}
            {product.item2 ? <li>{product.item2}</li> : <></>}
            {product.item3 ? <li>{product.item3}</li> : <></>}
            {product.item4 ? <li>{product.item4}</li> : <></>}
            {product.item5 ? <li>{product.item5}</li> : <></>}
            {product.item6 ? <li>{product.item6}</li> : <></>}
            {product.item7 ? <li>{product.item7}</li> : <></>}
            {product.item8 ? <li>{product.item8}</li> : <></>}
            {product.item9 ? <li>{product.item9}</li> : <></>}
            {product.item10 ? <li>{product.item10}</li> : <></>}
            {product.item11 ? <li>{product.item11}</li> : <></>}
            {product.item12 ? <li>{product.item12}</li> : <></>}
          </ul>
          <span className="alert-buy-product rounded">
            Unidad de venta 12 cajas.
          </span>
          <div className="my-4 row row-cols-3 d-flex align-items-center">
            <div className="col product-price">${product.precio},00</div>
            <div className="col d-flex flex-column">
              <div>
                Unidades:
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="form-control"
                />
              </div>
              <span className="product-stock">
                (Disponibles {product.stock})
              </span>
            </div>
            <div className="col">
              <button
                onClick={() => {
                  addToCart(
                    product.producto_id,
                    product.titulo,
                    product.codigo,
                    product.precio,
                    product.img,
                    quantity
                  );
                  setAlertAddToCart(true); // Mostrar la alerta
                  setTimeout(() => {
                    setAlertAddToCart(false); // Ocultar la alerta después de 5 segundos
                  }, 5000);
                }}
                className="btn button-addToCart rounded"
              >
                Agregar al carrito
              </button>
            </div>
            
          </div>
          {alertAddToCart && (
              <div className="alert alert-success alert-addToCart d-flex justify-content-between" role="alert">
                Se agregó el producto a su carrito!!
                <Link to="/CartPage">Finalice su compra aquí</Link>
              </div>
              
            )}
        </div>
      </div>
      <ProductDescription
        description={product.descripcion}
        comments={product.comentarios}
        indications={product.indicaciones}
        classification={product.calificacion}
      />
    </div>
  );
};

export default ProductDetailContainer;
