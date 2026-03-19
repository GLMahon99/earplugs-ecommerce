// components/cart/CartItems.jsx
import React from "react";
import { Link } from "react-router-dom";
import BagSvg from '../../../components/BagSvg'
const CartItems = ({ cart, deleteItemCart, incrementQuantity, decreaseQuantity, isFormLocked }) => {
  return (
    <>
      <div className="title-card-cart justify-content-start">
        <h6>Productos seleccionados</h6>
      </div>
      {cart && cart.length > 0 ? (
        cart.map((p) => (
          <div className="item-cart-product row justify-content-center" key={p.producto_id}>
            <div className="col-3 col-sm-2">
              <img src={p.img} alt="product-img" className="img-itemCart" />
            </div>
            <div className="col-9 col-sm-6 d-flex flex-column justify-content-start">
              <p>
                {p.titulo}
                <button
                  onClick={() => deleteItemCart(p.producto_id)}
                  disabled={isFormLocked}
                  className="button-delete-cart"
                >
                  <i className="bi bi-trash button-delete-product mx-2">Eliminar</i>
                </button>
              </p>
            </div>
            <div className="col-sm-2 col-4 quantity-selector row row-cols-3 rounded">
              <div className="col">
                <button
                  onClick={() => decreaseQuantity(p.producto_id, p.quantity)}
                  className="button-quantity"
                  disabled={isFormLocked}
                >
                  <i className="bi bi-bag-dash"></i>
                </button>
              </div>
              <div className="col text-center">{p.quantity}</div>
              <div className="col">
                <button
                  onClick={() => incrementQuantity(p.producto_id, p.quantity)}
                  className="button-quantity"
                  disabled={isFormLocked}
                >
                  <i className="bi bi-bag-plus"></i>
                </button>
              </div>
            </div>
            <div className="col-sm-2 col-8 d-flex justify-content-end">${p.precio},00</div>
          </div>
        ))
      ) : (
        <div className="py-2">
          <p>El carrito se encuentra vacío</p>
          <BagSvg />
          <Link to="/products">Agregue productos</Link>
        </div>
      )}
    </>
  );
};

export default CartItems;
