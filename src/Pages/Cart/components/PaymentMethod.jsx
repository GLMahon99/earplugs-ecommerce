import React from "react";

const PaymentMethod = ({ methodPay, handleCheck, isFormLocked }) => (
  <div className="payment-method-selector pt-2">
    <div className="title-card-cart mb-4">
      <h6 className="m-0">Forma de pago</h6>
    </div>
    
    <div className="d-flex flex-column gap-3">
      {/* MercadoPago Option */}
      <div 
        className={`payment-option-card border rounded-4 p-3 d-flex align-items-center gap-3 cursor-pointer transition-all ${methodPay === "mercadopago" ? 'border-primary bg-light shadow-sm' : 'border-light'}`}
        onClick={() => !isFormLocked && handleCheck("mercadopago")}
        style={{ cursor: isFormLocked ? 'not-allowed' : 'pointer', border: '2px solid transparent' }}
      >
        <div className="payment-radio-icon">
          <i className={`bi ${methodPay === "mercadopago" ? 'bi-check-circle-fill text-primary' : 'bi-circle text-muted'}`}></i>
        </div>
        <div className="flex-fill">
          <h6 className="m-0 fw-bold">MercadoPago / Tarjetas</h6>
          <p className="text-muted small m-0">Crédito, débito o dinero en cuenta</p>
        </div>
        <img src="https://logotipous.com/wp-content/uploads/2019/07/mercadopago-logo.png" alt="MP" style={{ height: '24px' }} />
      </div>

      {/* Transfer Option */}
      <div 
        className={`payment-option-card border rounded-4 p-3 d-flex align-items-center gap-3 cursor-pointer transition-all ${methodPay === "transferencia" ? 'border-primary bg-light shadow-sm' : 'border-light'}`}
        onClick={() => !isFormLocked && handleCheck("transferencia")}
        style={{ cursor: isFormLocked ? 'not-allowed' : 'pointer', border: '2px solid transparent' }}
      >
        <div className="payment-radio-icon">
          <i className={`bi ${methodPay === "transferencia" ? 'bi-check-circle-fill text-primary' : 'bi-circle text-muted'}`}></i>
        </div>
        <div className="flex-fill">
          <div className="d-flex align-items-center gap-2">
            <h6 className="m-0 fw-bold">Transferencia Bancaria</h6>
            <span className="badge bg-danger rounded-pill small">10% OFF</span>
          </div>
          <p className="text-muted small m-0">Pago directo vía CVU/CBU</p>
        </div>
        <i className="bi bi-bank fs-4 text-muted"></i>
      </div>
    </div>
  </div>
);

export default PaymentMethod;
