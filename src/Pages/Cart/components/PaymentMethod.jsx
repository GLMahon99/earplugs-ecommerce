// components/cart/PaymentMethod.jsx
import React from "react";

const PaymentMethod = ({ methodPay, handleCheck, isFormLocked }) => (
  <>
    <div className="title-card-cart">
      <h6>Forma de pago</h6>
    </div>
    <div className="d-flex container justify-content-around">
      <div className="form-check">
        <label className="form-check-label" htmlFor="mp">
          MercadoPago / Tarjeta
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id="mp"
          checked={methodPay === "mercadopago"}
          onChange={() => handleCheck("mercadopago")}
          disabled={isFormLocked}
        />
      </div>
      <div className="form-check">
        <label className="form-check-label" htmlFor="transfer">
          Transferencia <span>10% OFF</span>
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id="transfer"
          checked={methodPay === "transferencia"}
          onChange={() => handleCheck("transferencia")}
          disabled={isFormLocked}
        />
      </div>
    </div>
    <p>*Seleccione una opción.</p>
  </>
);

export default PaymentMethod;
