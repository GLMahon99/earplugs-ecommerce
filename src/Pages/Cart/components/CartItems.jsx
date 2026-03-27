// components/cart/CartItems.jsx
import React from "react";
import { Link } from "react-router-dom";
const CartItems = ({ cart, deleteItemCart, incrementQuantity, decreaseQuantity, isFormLocked }) => {
  return (
    <>
      <div className="title-card-cart justify-content-start">
        <h6>Productos seleccionados</h6>
      </div>
      {cart && cart.length > 0 ? (
        cart.map((p) => (
          <div className="item-cart-product row justify-content-center" key={p.producto_id}>
            <div className="col-3 col-sm-2 text-center">
              <img src={p.img} alt={p.titulo} className="img-itemCart" />
            </div>
            <div className="col-9 col-sm-5 product-info-cart d-flex flex-column justify-content-center">
              <h6 className="m-0">{p.titulo}</h6>
              <button
                onClick={() => deleteItemCart(p.producto_id)}
                disabled={isFormLocked}
                className="button-delete-cart mt-2"
              >
                <i className="bi bi-trash3 me-1"></i> Eliminar
              </button>
            </div>
            <div className="col-5 col-sm-2 mt-3 mt-sm-0">
               <div className="quantity-selector rounded-pill">
                <button
                  onClick={() => decreaseQuantity(p.producto_id, p.quantity)}
                  className="button-quantity"
                  disabled={isFormLocked}
                >
                  <i className="bi bi-dash-lg"></i>
                </button>
                <span className="fw-bold">{p.quantity}</span>
                <button
                  onClick={() => incrementQuantity(p.producto_id, p.quantity)}
                  className="button-quantity"
                  disabled={isFormLocked}
                >
                   <i className="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
            <div className="col-7 col-sm-3 d-flex justify-content-end align-items-center mt-3 mt-sm-0">
               <span className="fw-bold text-primary fs-5">${p.precio.toLocaleString('es-AR')},00</span>
            </div>
          </div>
        ))
      ) : (
        <div className="cart-empty-container">
          <i className="bi bi-cart-x"></i>
          <h5 className="fw-bold">Tu carrito está vacío</h5>
          <p className="text-muted">Parece que aún no has agregado productos a tu compra.</p>
          <Link to="/products" className="btn btn-primary rounded-pill px-4 mt-3">
            Explorar productos
          </Link>
        </div>
      )}
    </>
  );
};

export default CartItems;
