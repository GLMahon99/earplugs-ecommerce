// components/cart/ShippingForm.jsx
import React from "react";

const ShippingForm = ({ formData, handleInputChange, isFormLocked, priceShipp }) => (
  <>
    <div className="title-card-cart mb-3">
      <h6>Datos de Envío</h6><span>Campos obligatorios*</span>
    </div>
    <div className="row mb-3">
      <div className="col-8">
        <span className="d-block title-input-shipp">Dirección*</span>
        <input
          name="address"
          className="w-100 form-control"
          type="text"
          value={formData.address}
          onChange={handleInputChange}
          disabled={isFormLocked}
        />
      </div>
            <div className="col-lg-2 col-2">
        <span className="d-block title-input-shipp">Piso</span>
        <input
          name="floor"
          className="w-100 form-control px-2"
          type="text"
          value={formData.floor}
          onChange={handleInputChange}
          disabled={isFormLocked}
        />
      </div>
      <div className="col-lg-2 col-2">
        <span className="d-block title-input-shipp">Puerta</span>
        <input
          name="door"
          className="w-100 form-control px-2"
          type="text"
          value={formData.door}
          onChange={handleInputChange}
          disabled={isFormLocked}
        />
      </div>
      {/* <div className="col-4">
        <span className="d-block title-input-shipp">Teléfono*</span>
        <input
          name="phone"
          className="w-100 form-control"
          type="text"
          value={formData.phone}
          onChange={handleInputChange}
          disabled={isFormLocked}
        />
      </div> */}
      
    </div>
    <div className="row mb-3">
      <div className="col-lg-4 col-4">
        <span className="d-block title-input-shipp text-center">CP*</span>
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
        <span className="d-block title-input-shipp">Localidad*</span>
        <select
          className="w-100 form-select"
          name="city"
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
        <span className="d-block title-input-shipp">Tipo de vivienda*</span>
        <select
          className="w-100 form-select"
          name="type_of_housing"
          value={formData.type_of_housing}
          onChange={handleInputChange}
          disabled={isFormLocked}
        >
          <option value="residencial">Residencial</option>
          <option value="comercial">Comercial</option>
        </select>
      </div>
      {/* <div className="col-lg-4 col-7">
        <span className="d-block title-input-shipp">Email*</span>
        <input
          name="email"
          className="w-100 form-control"
          type="text"
          value={formData.email}
          onChange={handleInputChange}
          disabled={isFormLocked}
        />
      </div> */}
    </div>
    <div className="row">
      
      <div className="col-12">
        <span className="d-block title-input-shipp">Observación</span>
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
    
  </>
);

export default ShippingForm;
