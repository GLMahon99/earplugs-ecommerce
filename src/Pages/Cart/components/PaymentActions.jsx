import React, { useState } from "react";
import { Wallet } from "@mercadopago/sdk-react";
import { Transfer } from "../../transfer/transfer"; // Ajustá el path si está en otro lugar

const PaymentActions = ({
  preferenceId,
  methodPay,
  handleBuy,
  isFormComplete,
  cart,
  shippingPrice
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = async () => {
    if (isProcessing) return;
    setIsProcessing(true);
    await handleBuy();
  };

  // ✅ Mostrar transferencia directamente si ya hay preferencia y método es transferencia
  if (preferenceId && methodPay === "transferencia") {
    return (
      <Transfer 
        shippingPrice={shippingPrice} 
        onClose={() => window.location.reload()} 
      />
    );
  }

  // ✅ Mostrar Wallet de MercadoPago si método es MP
  if (preferenceId && methodPay === "mercadopago") {
    return (
      <div classname='wallet-mp'>
        <Wallet initialization={{ preferenceId }} />
        <div className="alert alert-warning" role="alert">
          Una vez realizado el pago recibirá por email la confirmación de su compra, junto con la fecha de entrega. En caso de no realizar el pago dentro de las próximas 24hs. su pedido será cancelado.
        </div>
      </div>
    );
  }

  // ✅ Botón de pago mientras no se haya iniciado el proceso
  return (
    <>
      <button
        onClick={handleClick}
        className="btn button-pay d-flex align-items-center justify-content-center gap-2"
        disabled={
          cart.length === 0 ||
          !isFormComplete() ||
          methodPay === null ||
          isProcessing
        }
      >
        {isProcessing ? (
          <>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Aguarde un instante...
          </>
        ) : (
          "Realizar Pago"
        )}
      </button>
      <p>*Al completar todos los campos se habilitará el botón de pago</p>
    </>
  );
};

export default PaymentActions;
