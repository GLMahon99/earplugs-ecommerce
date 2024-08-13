import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/Context";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import BagSvg from "../../components/BagSvg";
import "./CartPage.css";

const Cart = () => {
  const {
    cart,
    deleteItemCart,
    incrementQuantity,
    decreaseQuantity,
    total,
    priceShipp,
    dateNow,
  } = useProductsContext();
  const [preferenceId, setPreferenceId] = useState(null);
  const [isFormLocked, setIsFormLocked] = useState(false);
  const [methodPay, setMethodPay] = useState(null);
  const [shippingPrice, setShippingPrice] = useState(0);
  const [formData, setFormData] = useState({
    address: "",
    name: "",
    surname: "",
    type_id: "DNI",
    number_id: "",
    condition_iva: "Consumidor Final",
    phone: "",
    floor: "",
    door: "",
    cp: "",
    city: "CABA",
    type_of_housing: "Residencial",
    additional_information: "",
    email: "",
  });

  useEffect(() => {
    const matchingCity = priceShipp.find((p) => p.city === formData.city);
    if (matchingCity) {
      setShippingPrice(matchingCity.price);
    } else {
      setShippingPrice(0); // Por si la ciudad no está en la lista de precios
    }
  }, [formData.city, priceShipp]);

  const isFormComplete = () => {
    const complete = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    console.log("Form complete:", complete, formData); // Añadido para depurar
    return complete;
  };

  console.log("cart recibe context de el state cart", cart);
  console.log("metodo de pago inicial: deberia se nulo", methodPay);

  initMercadoPago("TEST-c2bacbf6-db71-473e-bf35-e163d1590c8c", {
    locale: "es-AR",
  });

  const createPreference = async () => {
    try {
      // Mapeamos los items usando las propiedades en español
      const items = cart.map((item) => ({
        title: item.titulo,
        quantity: item.quantity, // Asegúrate de tener una cantidad definida en cart
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
        name: formData.name,
        surname: formData.surname,
        type_id: formData.type_id,
        number_id: formData.number_id,
        condition_iva: formData.condition_iva,
        email: formData.email,
        phone: formData.phone,
      };

      const res = await axios.post("http://localhost:8000/create_preference", {
        items,
        customerData,
        clientData,
        cart,
      });
      const { id } = res.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
      setIsFormLocked(true);
      console.log("este es el preference de mp", id);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheck = (option) => {
    setMethodPay(option);
    console.log("cambia el metodo de pago", methodPay);
  };

  return (
    <>
      <section
        id="cartPage"
        className="d-flex justify-content-center sections-bg"
      >
        <div className="container d-flex flex-column">
          <div className=" ">
            <h2 className="text-align-center">Finalice su compra</h2>
          </div>
          <div className="my-3">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-sm-12  card-cart  rounded shadow-sm products-cart">
                <div className="title-card-cart justify-content-start">
                  <h6>Productos seleccionados</h6>
                </div>
                {/* hacer el map */}
                {cart && cart.length > 0 ? (
                  cart.map((p) => (
                    <div className="item-cart-product row justify-content-center">
                      <div className="col-2">
                        <img
                          src={p.img}
                          alt="product-img"
                          className="img-itemCart"
                        />
                      </div>
                      <div className="col-6 d-flex flex-column justify-content-start">
                        <p>
                          {p.titulo}
                          <button
                            onClick={() => deleteItemCart(p.producto_id)}
                            disabled={isFormLocked}
                            className="button-delete-cart"
                          >
                            <i className="bi bi-trash button-delete-product mx-2">
                              Eliminar
                            </i>
                          </button>
                        </p>
                      </div>
                      <div className="col-2 quantity-selector row row-cols-3 rounded">
                        <div className="col">
                          <button
                            onClick={() =>
                              decreaseQuantity(p.producto_id, p.quantity)
                            }
                            className="button-quantity "
                            disabled={isFormLocked}
                          >
                            <i class="bi bi-bag-dash"></i>
                          </button>
                        </div>
                        <div className="col">
                          <p className="text-center quantity-selector-cart">
                            {p.quantity}
                          </p>
                        </div>
                        <div className="col">
                          <button
                            onClick={() =>
                              incrementQuantity(p.producto_id, p.quantity)
                            }
                            className="button-quantity"
                            disabled={isFormLocked}
                          >
                            <i class="bi bi-bag-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="col-2 d-flex justify-content-end">
                        ${p.precio},00
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div>El carrito se encuentra vacío</div>
                    <BagSvg />
                    <Link to="/products">Agrega los productos</Link>
                  </>
                )}
              </div>
              <div className="col-lg-4 col-md-12 card-cart rounded shadow-sm">
                <div className="title-card-cart">
                  <h6>Resumen de compra</h6>
                </div>

                <div className=" d-flex flex-column justify-content-center">
                  {cart && cart.length > 0 ? (
                    cart.map((p) => (
                      <div className="row">
                        <div className="col-8 d-flex justify-content-start">
                          <p>{p.titulo}</p>
                        </div>
                        <div className="col-1 d-flex justify-content-center">
                          ({p.quantity})
                        </div>
                        <div className="col-3 d-flex justify-content-end">
                          ${p.precio * p.quantity},00
                        </div>
                      </div>
                    ))
                  ) : (
                    <></>
                  )}
                  <div className="shipping-price row row-cols-2">
                    <div className="col d-flex justify-content-start">
                      <i class="bi bi-truck"> Envío</i>
                    </div>
                    <div className="col d-flex justify-content-end">
                      ${shippingPrice}
                    </div>
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
              </div>

              <div className="col-lg-6 col-md-12 card-cart rounded shipping-card  shadow-sm mt-4 pb-4">
                <div className="title-card-cart mb-3">
                  <h6>Datos de Envío</h6>
                </div>
                <div className="row mb-3">
                  <div className="col-8">
                    <span className="d-block">Dirección</span>
                    <input
                      name="address"
                      className="w-100 form-control"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                      disabled={isFormLocked}
                    />
                  </div>
                  <div className="col-4">
                    <span className="d-block">Teléfono</span>
                    <input
                      name="phone"
                      className="w-100 form-control"
                      type="text"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isFormLocked}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-1">
                    <span className="d-block">Piso</span>
                    <input
                      name="floor"
                      className="w-100 form-control px-2"
                      type="text"
                      value={formData.floor}
                      onChange={handleInputChange}
                      disabled={isFormLocked}
                    />
                  </div>
                  <div className="col-1">
                    <span className="d-block">Puerta</span>
                    <input
                      name="door"
                      className="w-100 form-control px-2"
                      type="text"
                      value={formData.door}
                      onChange={handleInputChange}
                      disabled={isFormLocked}
                    />
                  </div>
                  <div className="col-2">
                    <span className="d-block">CP</span>
                    <input
                      name="cp"
                      className="w-100 form-control"
                      type="text"
                      value={formData.cp}
                      onChange={handleInputChange}
                      disabled={isFormLocked}
                    />
                  </div>
                  <div className="col-4">
                    <span className="d-block">Localidad</span>
                    <select
                      className="w-100 form-select"
                      name="city"
                      id=""
                      value={formData.city}
                      onChange={handleInputChange}
                      disabled={isFormLocked}
                    >
                      {priceShipp.map((p) => (
                        <option value={p.city} key={p.city}>
                          {p.city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-4">
                    <span className="d-block">Email</span>
                    <input
                      name="email"
                      className="w-100 form-control"
                      type="text"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={isFormLocked}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <span className="d-block">Tipo de vivienda</span>
                    <select
                      className="w-100 form-select"
                      name="type_of_housing"
                      id=""
                      value={formData.type_of_housing}
                      onChange={handleInputChange}
                      disabled={isFormLocked}
                    >
                      <option value="residencial">Residencial</option>
                      <option value="comercial">Comercial</option>
                    </select>
                  </div>
                  <div className="col-8">
                    <span className="d-block">Observación</span>
                    <input
                      name="additional_information"
                      className="w-100 form-control"
                      type="text"
                      value={formData.additional_information}
                      onChange={handleInputChange}
                      disabled={isFormLocked}
                    />
                  </div>
                </div>
                <p>
                  *Todos los campos son obligatorios. En caso de no tener piso
                  y/o puerta completar con "-"
                </p>
              </div>

              <div className="col-lg-4 col-md-12   d-flex flex-column">
                <div className="card-cart rounded mb-4 pb-4 shadow-sm mt-4 container">
                  <div className="title-card-cart mb-3 ">
                    <h6>Datos de Facturación</h6>
                  </div>
                  <div className="row mb-3 container">
                    <div className="col-6">
                      <input
                        type="text"
                        placeholder="Nombre"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isFormLocked}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="text"
                        placeholder="Apellido"
                        className="form-control"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        disabled={isFormLocked}
                      />
                    </div>
                  </div>
                  <div className="row mb-3 container">
                    <div className="col-6">
                      <select
                        name="type_id"
                        id=""
                        className=" form-select"
                        value={formData.type_id}
                        onChange={handleInputChange}
                        disabled={isFormLocked}
                      >
                        <option value="DNI">DNI</option>
                        <option value="CUIT">CUIT</option>
                        <option value="CLI">CLI</option>
                      </select>
                    </div>
                    <div className="col-6">
                      <select
                        name="condition_iva"
                        id=""
                        className="w-100 form-select"
                        value={formData.condition_iva}
                        onChange={handleInputChange}
                        disabled={isFormLocked}
                      >
                        <option value="Consumidor-final">
                          Consumidor final
                        </option>
                        <option value="Resp-incripto">Resp. incripto</option>
                        <option value="Monotributo">Monotributo</option>
                        <option value="iva-exento">Iva exento</option>
                      </select>
                    </div>
                  </div>
                  <div className="row container">
                    <div className="col-6">
                      <input
                        type="text"
                        className="form-control"
                        name="number_id"
                        value={formData.number_id}
                        onChange={handleInputChange}
                        disabled={isFormLocked}
                      />
                    </div>
                  </div>
                </div>
                <p>*Todos los campos son obligatorios.</p>
                <div className="card-cart d-flex flex-column shadow-sm pb-3 rounded container">
                  <div className="title-card-cart">
                    <h6>Forma de pago</h6>
                  </div>
                  <div className=" d-flex container justify-content-around">
                    <div className=" form-check">
                      <label class="form-check-label" for="flexCheckDefault">
                        MercadoPago / Tarjeta
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        checked={methodPay === "mercadopago"}
                        onChange={() => handleCheck("mercadopago")}
                        disabled={isFormLocked}
                      />
                    </div>
                    <div className=" form-check">
                      <label class="form-check-label" for="flexCheckDefault">
                        Transferencia
                      </label>
                      <input
                        class="form-check-input"
                        type="checkbox"
                        checked={methodPay === "transferencia"}
                        onChange={() => handleCheck("transferencia")}
                        disabled={isFormLocked}
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                </div>
                <p>*Todos los campos son obligatorios.</p>
              </div>

              <div className="col-6 shipping-card "></div>

              <div className="col-4 mt-4">
                {preferenceId ? (
                  methodPay === "mercadopago" ? (
                    <>
                      <Wallet initialization={{ preferenceId: preferenceId }} />
                      <div class="alert alert-warning" role="alert">
                        Una vez realizado el pago recibirá por email la
                        confirmacion de su compra, junto con la fecha de
                        entrega. En caso de no realizar el pago dentro de las
                        próximas 24hs. Su pedido sera cancelado.
                      </div>
                    </>
                  ) : methodPay === "transferencia" ? (
                    <>
                      <div className="rounded shadow-sm d-flex flex-column data-transfer">
                        <div className="container">
                          <p>CVU: 0000003100247591174008</p>
                          <p>ALIAS: tapones.earplugs</p>
                        </div>
                      </div>
                      <div class="alert alert-warning" role="alert">
                        Una vez realizado el pago recibirá por email la
                        confirmacion de su compra, junto con la fecha de
                        entrega. En caso de no realizar el pago dentro de las
                        próximas 24hs. Su pedido sera cancelado.
                      </div>
                    </>
                  ) : null
                ) : (
                  <>
                    <button
                      onClick={handleBuy}
                      className="btn button-pay"
                      disabled={
                        cart.length === 0 ||
                        !isFormComplete() ||
                        methodPay === null
                      }
                    >
                      Realizar Pago
                    </button>
                    <p>
                      *Al completar todos los campos se habilitara el botón de
                      pago
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
