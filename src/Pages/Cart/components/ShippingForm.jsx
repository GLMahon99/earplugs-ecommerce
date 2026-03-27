import React from "react";

const ShippingForm = ({ formData, handleInputChange, isFormLocked, priceShipp }) => (
  <>
    <div className="title-card-cart d-flex justify-content-between align-items-center">
      <h6 className="m-0">Datos de Envío</h6>
      <span className="text-muted small">Campos obligatorios*</span>
    </div>

    <div className="row g-3 mt-1">
      <div className="col-12 col-md-8">
        <label className="form-label small fw-bold text-muted text-uppercase mb-1">Dirección*</label>
        <div className="input-group">
          <span className="input-group-text bg-light border-end-0 rounded-start-4">
               <i className="bi bi-geo-alt"></i>
          </span>
          <input
            name="address"
            className="form-control custom-input border-start-0 rounded-end-4"
            type="text"
            placeholder="Calle y número"
            value={formData.address}
            onChange={handleInputChange}
            disabled={isFormLocked}
          />
        </div>
      </div>
      
      <div className="col-6 col-md-2">
        <label className="form-label small fw-bold text-muted text-uppercase mb-1">Piso</label>
        <input
          name="floor"
          className="form-control custom-input text-center"
          type="text"
          value={formData.floor}
          onChange={handleInputChange}
          disabled={isFormLocked}
        />
      </div>
      
      <div className="col-6 col-md-2">
        <label className="form-label small fw-bold text-muted text-uppercase mb-1">Puerta</label>
        <input
          name="door"
          className="form-control custom-input text-center"
          type="text"
          value={formData.door}
          onChange={handleInputChange}
          disabled={isFormLocked}
        />
      </div>

      <div className="col-4 col-md-3">
        <label className="form-label small fw-bold text-muted text-uppercase mb-1">CP*</label>
        <input
          name="cp"
          className="form-control custom-input text-center"
          type="text"
          value={formData.cp}
          onChange={handleInputChange}
          disabled={isFormLocked}
        />
      </div>
      
      <div className="col-8 col-md-4">
        <label className="form-label small fw-bold text-muted text-uppercase mb-1">Localidad*</label>
        <select
          className="form-select custom-input"
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
      
      <div className="col-12 col-md-5">
        <label className="form-label small fw-bold text-muted text-uppercase mb-1">Tipo de vivienda*</label>
        <select
          className="form-select custom-input"
          name="type_of_housing"
          value={formData.type_of_housing}
          onChange={handleInputChange}
          disabled={isFormLocked}
        >
          <option value="residencial">Residencial</option>
          <option value="comercial">Comercial</option>
        </select>
      </div>

      <div className="col-12">
        <label className="form-label small fw-bold text-muted text-uppercase mb-1">Observaciones adicionales</label>
        <textarea
          name="additional_information"
          className="form-control custom-input"
          rows="2"
          placeholder="Escriba aquí indicaciones extras para el envío..."
          value={formData.additional_information}
          onChange={handleInputChange}
          disabled={isFormLocked}
        />
      </div>
    </div>
  </>
);

export default ShippingForm;
