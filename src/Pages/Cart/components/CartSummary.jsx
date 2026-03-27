import React from "react";

const CartSummary = ({ cart, shippingPrice, total }) => (
  <>
    <div className="title-card-cart">
      <h6 className="m-0">Resumen de compra</h6>
    </div>
    
    <div className="cart-summary-list">
      {cart.map((p) => (
        <div className="d-flex justify-content-between align-items-center mb-2" key={p.producto_id}>
          <div className="d-flex align-items-center gap-2">
            <span className="badge bg-light text-dark rounded-pill border">{p.quantity}</span>
            <span className="text-muted small">{p.titulo}</span>
          </div>
          <span className="fw-bold text-dark">${(p.precio * p.quantity).toLocaleString('es-AR')},00</span>
        </div>
      ))}
      
      <hr className="my-3 opacity-10" />
      
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="text-muted"><i className="bi bi-truck me-2"></i>Envío</span>
        <span className="fw-bold text-success">${shippingPrice.toLocaleString('es-AR')},00</span>
      </div>
      
      <div className="d-flex justify-content-between align-items-center mt-4 p-3 rounded-4 bg-light border border-dashed">
        <h5 className="m-0 fw-bold">TOTAL</h5>
        <h5 className="m-0 fw-extrabold text-primary">${(total + shippingPrice).toLocaleString('es-AR')},00</h5>
      </div>
    </div>
  </>
);

export default CartSummary;
