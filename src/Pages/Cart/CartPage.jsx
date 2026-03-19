// pages/CartPage.jsx

import React, { useState, useEffect } from "react";
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
    <section id="cartPage" className="d-flex justify-content-center sections-bg">
      
      <div className="container d-flex flex-column">
        <BannerSale/>
        <h2 className="text-align-center">Finalice su compra</h2>
        <div className="my-3">
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

            <div className="col-lg-6 col-md-12 card-cart rounded shadow-sm shipping-card mt-4 pb-3">
              <ShippingForm
                formData={formData}
                handleInputChange={handleInputChange}
                isFormLocked={isFormLocked}
                priceShipp={priceShipp}
              />
            </div>

            <div className="col-lg-4 col-md-12 d-flex flex-column">
              {/* <div className="card-cart rounded mb-4 pb-4 shadow-sm mt-4 container">
                <BillingForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  isFormLocked={isFormLocked}
                />
              </div> */}

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
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default CartPage;
