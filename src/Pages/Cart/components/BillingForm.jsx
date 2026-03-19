// components/cart/BillingForm.jsx
import React from "react";

const BillingForm = ({ formData, handleInputChange, isFormLocked }) => (
  <>
    <div className="title-card-cart mb-3">
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
          className="form-select"
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
          className="form-select"
          value={formData.condition_iva}
          onChange={handleInputChange}
          disabled={isFormLocked}
        >
          <option value="Consumidor-final">Consumidor final</option>
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
    <p>*Todos los campos son obligatorios.</p>
  </>
);

export default BillingForm;
