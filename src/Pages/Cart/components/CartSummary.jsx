// components/cart/CartSummary.jsx
import React from "react";

const CartSummary = ({ cart, shippingPrice, total }) => (
  <>
    <div className="title-card-cart">
      <h6>Resumen de compra</h6>
    </div>
    <div className="d-flex flex-column justify-content-center">
      {cart.map((p) => (
        <div className="row" key={p.producto_id}>
          <div className="col-8 d-flex justify-content-start">
            <p>{p.titulo}</p>
          </div>
          <div className="col-1 d-flex justify-content-center">({p.quantity})</div>
          <div className="col-3 d-flex justify-content-end">${p.precio * p.quantity},00</div>
        </div>
      ))}
      <div className="shipping-price row row-cols-2">
        <div className="col d-flex justify-content-start">
          <i className="bi bi-truck"> Envío</i>
        </div>
        <div className="col d-flex justify-content-end">${shippingPrice},00</div>
      </div>
      <div className="total-cart-container row row-cols-2 my-3">
        <div className="col d-flex justify-content-start">
          <strong>Total</strong>
        </div>
        <div className="col d-flex justify-content-end">
          <strong>${total + shippingPrice},00</strong>
        </div>
      </div>
    </div>
  </>
);

export default CartSummary;
