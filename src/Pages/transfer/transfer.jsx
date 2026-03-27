import React, { useState } from "react";
import "./transfer.css";
import { useProductsContext } from "../../context/Context";

export const Transfer = ({ shippingPrice, onClose }) => {
  const { cart } = useProductsContext();
  const [copiedField, setCopiedField] = useState(null);

  const subtotal = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
  const descuento = subtotal * 0.1; // 10% de descuento
  const total = subtotal - descuento + shippingPrice;

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const transferData = [
    { label: "CUIT", value: "20-14902011-0" },
    { label: "CVU", value: "0000003100247591174008" },
    { label: "Alias", value: "tapones.earplugs" },
  ];

  return (
    <div className="transfer-modal-overlay">
      <div id="transfer-container" className="transfer-modal-content">
        <button className="btn-close-modal" onClick={onClose} title="Cerrar">
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="transfer-layout">
          {/* ORDER SUMMARY */}
          <div className="transfer-summary-side">
            <div className="transfer-header">
              <i className="bi bi-receipt-cutoff fs-2 mb-2 text-primary"></i>
              <h3>Tu Pedido</h3>
              <p className="text-muted small">Resumen de la compra</p>
            </div>

            <div className="transfer-summary-rows">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString('es-AR')}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Envío</span>
                <span>${shippingPrice.toLocaleString('es-AR')}</span>
              </div>
              <div className="d-flex justify-content-between mb-3 text-success fw-bold">
                <span>Descuento (10% OFF)</span>
                <span>- ${descuento.toLocaleString('es-AR')}</span>
              </div>
              <div className="transfer-total-box mt-4">
                <span className="fw-bold">TOTAL A PAGAR</span>
                <span className="transfer-total-value">${total.toLocaleString('es-AR')}</span>
              </div>
            </div>
          </div>

          {/* TRANSFER DETAILS */}
          <div className="transfer-data-side">
            <h3>Datos de Pago</h3>
            <p className="opacity-75 small mb-4">Realizá la transferencia a esta cuenta:</p>

            <div className="transfer-cards-container">
              {transferData.map((item) => (
                <div 
                  key={item.label} 
                  className="transfer-data-card"
                  onClick={() => copyToClipboard(item.value, item.label)}
                >
                  <div className="card-info">
                    <span className="card-label">{item.label}</span>
                    <span className="card-value">{item.value}</span>
                  </div>
                  <div className="card-action">
                    <i className={`bi ${copiedField === item.label ? 'bi-check-all text-success' : 'bi-content-copy'}`}></i>
                  </div>
                  {copiedField === item.label && <span className="copy-toast">¡Copiado!</span>}
                </div>
              ))}
            </div>

            <div className="transfer-instructions mt-4">
              <div className="d-flex gap-2">
                <i className="bi bi-info-circle-fill fs-5"></i>
                <p className="small mb-0">
                  Una vez realizada la transferencia, enviá el comprobante vía WhatsApp para confirmar tu pedido.
                </p>
              </div>
            </div>

            <div className="transfer-footer mt-5">
              <a
                href="https://wa.me/5491138054707"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-premium"
              >
                <span>Enviar Comprobante</span>
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
