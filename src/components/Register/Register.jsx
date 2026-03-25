import React, { useState, useEffect } from "react";
import { useProductsContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

export const Register = ({ onRegisterSuccess }) => {
  const { register } = useProductsContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    iva: "Consumidor Final",
    tipo_identificacion: "DNI",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "password") {
      const validLength = value.length >= 8 && value.length <= 20;
      setIsValidPassword(validLength);
      setPasswordMatch(formData.confirmPassword === value);
    }

    if (name === "confirmPassword") {
      setPasswordMatch(value === formData.password);
    }
  };

  const isFormComplete =
    formData.nombre &&
    formData.apellido &&
    formData.dni &&
    formData.email &&
    formData.phone &&
    isValidPassword &&
    passwordMatch;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormComplete) return;

    setLoading(true);
    setError(null);

    const payload = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      email: formData.email,
      password: formData.password,
      tipo_identificacion: formData.tipo_identificacion,
      numero_identificacion: formData.dni,
      condicion_iva: formData.iva,
      telefono: formData.phone,
    };

    const res = await register(payload);

    if (res.success) {
      setRegisterSuccess(true);
      if (onRegisterSuccess) onRegisterSuccess();
    } else {
      setError(res.message || "Error al registrarse");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (registerSuccess) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [registerSuccess, navigate]);

  return (
    <div className="register-container fade-in w-100">
      <div className="text-center mb-4">
        <h3 className="fw-bold mb-1" style={{ color: "var(--color-primary)" }}>
          Crear Cuenta
        </h3>
        <p className="text-muted small">Completá tus datos para registrarte</p>
      </div>

      {error && <div className="alert alert-danger py-2 rounded-3 shadow-sm">{error}</div>}

      <form onSubmit={handleSubmit} className="register-form px-1">
        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                name="nombre"
                className="form-control custom-input"
                id="floatingNombre"
                placeholder="Nombre"
                onChange={handleChange}
                value={formData.nombre}
              />
              <label htmlFor="floatingNombre">Nombre</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                name="apellido"
                className="form-control custom-input"
                id="floatingApellido"
                placeholder="Apellido"
                onChange={handleChange}
                value={formData.apellido}
              />
              <label htmlFor="floatingApellido">Apellido</label>
            </div>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                name="dni"
                className="form-control custom-input"
                id="floatingDni"
                placeholder="Identificación"
                onChange={handleChange}
                value={formData.dni}
              />
              <label htmlFor="floatingDni">Nro Documento</label>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-floating">
              <select
                name="tipo_identificacion"
                className="form-select custom-input"
                id="floatingTipo"
                onChange={handleChange}
                value={formData.tipo_identificacion}
              >
                <option value="DNI">DNI</option>
                <option value="CUIT">CUIT</option>
              </select>
              <label htmlFor="floatingTipo">Tipo</label>
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-floating">
              <select
                name="iva"
                className="form-select custom-input"
                id="floatingIva"
                onChange={handleChange}
                value={formData.iva}
              >
                <option value="Consumidor Final">Consumidor Final</option>
                <option value="Resp. Inscripto">Resp. Inscripto</option>
                <option value="IVA Exento">IVA Exento</option>
                <option value="Monotributo">Monotributo</option>
              </select>
              <label htmlFor="floatingIva">Condición IVA</label>
            </div>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-md-6">
             <div className="form-floating">
              <input
                type="text"
                name="phone"
                className="form-control custom-input"
                id="floatingPhone"
                placeholder="Teléfono"
                onChange={handleChange}
                value={formData.phone}
              />
              <label htmlFor="floatingPhone">Teléfono</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="email"
                name="email"
                className="form-control custom-input"
                id="floatingRegEmail"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
              />
              <label htmlFor="floatingRegEmail">Email</label>
            </div>
          </div>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <div className="form-floating mb-1">
              <input
                type="password"
                name="password"
                className={`form-control custom-input ${formData.password ? (isValidPassword ? "is-valid" : "is-invalid") : ""}`}
                id="floatingRegPassword"
                placeholder="Contraseña"
                onChange={handleChange}
                value={formData.password}
              />
              <label htmlFor="floatingRegPassword">Contraseña</label>
            </div>
            <span className="small d-block ms-1" style={{ color: isValidPassword ? '#10b981' : '#64748b' }}>
              {isValidPassword ? "✔ Contraseña válida" : "Entre 8 y 20 caracteres"}
            </span>
          </div>
          <div className="col-md-6">
            <div className="form-floating mb-1">
              <input
                type="password"
                name="confirmPassword"
                className={`form-control custom-input ${formData.confirmPassword ? (passwordMatch ? "is-valid" : "is-invalid") : ""}`}
                id="floatingConfirm"
                placeholder="Confirmar Contraseña"
                onChange={handleChange}
                value={formData.confirmPassword}
              />
              <label htmlFor="floatingConfirm">Repetir Contraseña</label>
            </div>
            <span className="small d-block ms-1" style={{ color: passwordMatch && formData.confirmPassword ? '#10b981' : '#64748b' }}>
              {passwordMatch && formData.confirmPassword ? "✔ Las contraseñas coinciden" : (formData.confirmPassword ? "❌ No coinciden" : " ")}
            </span>
          </div>
        </div>

         <button
          type="submit"
          className="btn btn-login w-100 py-3 fw-bold rounded-pill shadow-sm"
          disabled={!isFormComplete || loading || registerSuccess}
          style={{ transition: 'all 0.3s ease' }}
        >
          {registerSuccess
            ? "¡Registro exitoso! Redirigiendo..."
            : loading
            ? "Registrando..."
            : "Completar Registro"}
        </button>
      </form>
    </div>
  );
};
