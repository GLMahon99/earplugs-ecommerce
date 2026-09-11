// pages/CartPage.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useProductsContext } from "../../context/Context";
import { initMercadoPago } from "@mercadopago/sdk-react";
import CartItems from "./components/CartItems";
import CartSummary from "./components/CartSummary";
import ShippingForm from "./components/ShippingForm";
import PaymentMethod from "./components/PaymentMethod";
import PaymentActions from "./components/PaymentActions";
import "./CartPage.css";
import { BannerSale } from "../../components/bannerSale/BannerSale";

const CartPage = () => {
  const {
    cart,
    deleteItemCart,
    incrementQuantity,
    decreaseQuantity,
    total,
    priceShipp,
    user,
    dateNow,
    setShowLoginModal,
  } = useProductsContext();

  const [preferenceId, setPreferenceId] = useState(null);
  const [isFormLocked, setIsFormLocked] = useState(false);
  const [methodPay, setMethodPay] = useState(null);
  const [shippingPrice, setShippingPrice] = useState(0);

  const [formData, setFormData] = useState({
    address: "",
    floor: "",
    door: "",
    cp: "",
    city: "CABA",
    type_of_housing: "Residencial",
    additional_information: "",
  });

  useEffect(() => {
    const matchingCity = priceShipp.find((p) => p.city === formData.city);
    setShippingPrice(matchingCity ? matchingCity.price : 0);
  }, [formData.city, priceShipp]);

  useEffect(() => {
    initMercadoPago("APP_USR-f2e29690-4159-46d0-ae30-4e220b7cce6c", {
      locale: "es-AR",
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheck = (option) => {
    setMethodPay(option);
  };

  const isFormComplete = () => {
    return Object.entries(formData).every(([key, value]) => {
      if (key === "floor" || key === "door" || key === 'additional_information') return true;
      return value.trim() !== "";
    });
  };

  const createPreference = async () => {
    try {
      const items = cart.map((item) => ({
        title: item.titulo,
        quantity: item.quantity,
        unit_price: item.precio * item.quantity + shippingPrice,
      }));

      const customerData = {
        address: formData.address,
        floor: formData.floor,
        door: formData.door,
        cp: formData.cp,
        city: formData.city,
        type_of_housing: formData.type_of_housing,
        additional_information: formData.additional_information,
        shippPrice: shippingPrice,
        methodPay: methodPay,
        total: total,
        date: dateNow,
      };

      const clientData = {
        name: user?.nombre,
        surname: user?.apellido,
        type_id: user?.tipo_identificacion,
        number_id: user?.numero_identificacion,
        condition_iva: user?.condicion_iva,
        email: user?.email,
        id: user?.id,
      };

      const res = await axios.post("https://integration-mercadopago-production.up.railway.app/create_preference", {
        items,
        customerData,
        clientData,
        cart,
      });

      return res.data.id;
    } catch (error) {
      console.error("Error al crear la preferencia:", error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
      setIsFormLocked(true);

      
    }
  };

  return (
    <section id="cartPage" className="sections-bg">
      <div className="container d-flex flex-column">
        <BannerSale/>
        <div className="cart-header text-center my-4">
          <h2 className="fw-bold text-uppercase letter-spacing-1">
            {user ? "Finalice su compra" : "Carrito de compras"}
          </h2>
          <p className="text-muted">
            {user
              ? "Complete sus datos para procesar el pedido"
              : "Revisá tus productos y continuá para finalizar la compra"}
          </p>
        </div>
        <div className="checkout-content mt-2">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-12 card-cart rounded shadow-sm products-cart">
              <CartItems
                cart={cart}
                deleteItemCart={deleteItemCart}
                incrementQuantity={incrementQuantity}
                decreaseQuantity={decreaseQuantity}
                isFormLocked={isFormLocked}
              />
            </div>

            <div className="col-lg-4 col-md-12 card-cart rounded shadow-sm resume-card">
              <CartSummary cart={cart} shippingPrice={shippingPrice} total={total} />
            </div>

            {cart.length > 0 && (
              !user ? (
                <div className="col-lg-10 col-12 mt-4" data-aos="fade-up">
                  <div className="card shadow-sm border-0 rounded-4 p-4 p-md-5 text-center bg-white">
                    <div className="mb-3">
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light p-3 mb-2"
                        style={{ width: "70px", height: "70px" }}
                      >
                        <i className="bi bi-person-lock fs-1 text-primary"></i>
                      </div>
                    </div>
                    <h3 className="fw-bold mb-2" style={{ color: "var(--color-primary)" }}>
                      Iniciá sesión para finalizar tu compra
                    </h3>
                    <p className="text-muted mx-auto" style={{ maxWidth: "550px" }}>
                      Tus productos ya están guardados en tu carrito. Para poder ingresar tus datos de entrega y abonar tu pedido, por favor iniciá sesión o registrate.
                    </p>
                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
                      <button
                        className="btn btn-primary btn-lg rounded-pill px-5 fw-bold shadow-sm"
                        onClick={() => setShowLoginModal(true)}
                      >
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Iniciar sesión
                      </button>
                      <Link
                        to="/LoginRegister"
                        className="btn btn-outline-primary btn-lg rounded-pill px-5 fw-bold"
                      >
                        <i className="bi bi-person-plus me-2"></i>
                        Crear cuenta
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="col-lg-6 col-md-12 card-cart rounded shadow-sm shipping-card mt-4 pb-3">
                    <ShippingForm
                      formData={formData}
                      handleInputChange={handleInputChange}
                      isFormLocked={isFormLocked}
                      priceShipp={priceShipp}
                    />
                  </div>

                  <div className="col-lg-4 col-md-12 d-flex flex-column">
                    <div className="card-cart d-flex flex-column shadow-sm pb-3 rounded container mt-4">
                      <PaymentMethod
                        methodPay={methodPay}
                        handleCheck={handleCheck}
                        isFormLocked={isFormLocked}
                      />
                    </div>
                  </div>

                  <div className="col-12 mt-4 text-center" id="payment-actions">
                    <PaymentActions
                      preferenceId={preferenceId}
                      methodPay={methodPay}
                      handleBuy={handleBuy}
                      isFormComplete={isFormComplete}
                      cart={cart}
                      shippingPrice={shippingPrice}
                    />
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default CartPage;
