import React from "react";
import "./transfer.css";
import { useProductsContext } from "../../context/Context";

export const Transfer = ({ shippingPrice }) => {
  const {
    cart, // Array de productos
  } = useProductsContext();

  

  const subtotal = cart.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0
  );
  const descuento = subtotal * 0.1; // 10% de descuento

  const total = subtotal - descuento + shippingPrice;

  return (
    <div id="transfer-container" className="container">
      <div className="row card-transfer rounded shadow">
        <div className="col-12 col-md-6  p-3">
          <h4>Tu pedido</h4>
          <div className="divider my-2"></div>

          <div className="py-1 d-flex justify-content-between">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>

          <div className="py-1 d-flex justify-content-between">
            <p>Envío</p>
            <p>${shippingPrice}</p>
          </div>

          <div className="py-1 d-flex justify-content-between">
            <p>Descuento</p>
            <p className="">
              <strong>- ${descuento}</strong>
            </p>
          </div>

          <div className="divider my-2"></div>

          <div className="py-1 d-flex justify-content-between">
            <p>Total</p>
            <p>
              <strong>${total}</strong>
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 p-3">
          <h4>Datos de transferencia</h4>
          <div className="divider"></div>
          <ul id="datos" className="list-unstyled py-2">
            <li className="py-1">
              CUIT: <span>20-14902011-0</span>
            </li>
            <li className="py-1">
              CVU: <span>0000003100247591174008</span>
            </li>
            <li className="py-1">
              Alias: <span>tapones.earplugs</span>
            </li>
          </ul>
          <div className="alert alert-primary" role="alert">
            <i class="bi bi-info-circle-fill"></i>
            Una vez realizado el pago y enviado el comprobante, recibirá por
            email la confirmación de su compra, junto con la fecha de entrega.
            En caso de no realizar el pago dentro de las próximas 24hs. su
            pedido será cancelado.
          </div>
        </div>
      </div>
      <div className="mt-3 d-flex justify-content-center">
        <a
          href="https://wa.me/5491138054707"
          rel="noreferrer"
          className="btn btn-outline-success button-wsp"
        >
          Enviar comprobante <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};
