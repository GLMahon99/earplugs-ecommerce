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
  const [registerSuccess, setRegisterSuccess] = useState(false); // Nuevo estado


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
      setRegisterSuccess(true); // Marca el registro como exitoso
      if (onRegisterSuccess) onRegisterSuccess();
    } else {
      setError(res.message || "Error al registrarse");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (registerSuccess) {
      const timer = setTimeout(() => {
        navigate("/"); // Redirige al home
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [registerSuccess, navigate]);

  return (
    <div>
      <h6>Registrarse</h6>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <div className="col-auto">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="form-control"
              onChange={handleChange}
              value={formData.nombre}
            />
          </div>
          <div className="col-auto">
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              className="form-control"
              onChange={handleChange}
              value={formData.apellido}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-auto">
            <input
              type="text"
              name="dni"
              placeholder="DNI CLI o CUIT"
              className="form-control"
              onChange={handleChange}
              value={formData.dni}
            />
          </div>
          <div className="col-auto">
            <select
              name="tipo_identificacion"
              className="form-select"
              onChange={handleChange}
              value={formData.tipo_identificacion}
            >
              <option value="DNI">DNI</option>
              <option value="CUIT">CUIT</option>
            </select>
          </div>
          <div className="col-auto">
            <select
              name="iva"
              className="form-select"
              onChange={handleChange}
              value={formData.iva}
            >
              <option value="Consumidor Final">Consumidor Final</option>
              <option value="Resp. Inscripto">Resp. Inscripto</option>
              <option value="IVA Exento">IVA Exento</option>
              <option value="Monotributo">Monotributo</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="phone"
            placeholder="Ingrese número de teléfono"
            className="form-control"
            onChange={handleChange}
            value={formData.phone}
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Ingrese Email"
            className="form-control"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="mb-3 row g-3 align-items-center">
          <div className="col-auto">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="form-control"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div className="col-auto">
            <span className="form-text">
              {isValidPassword ? "✔ Contraseña válida" : "❌ Entre 8 y 20 caracteres"}
            </span>
          </div>
        </div>

        <div className="mb-3 row g-3 align-items-center">
          <div className="col-auto">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repetir contraseña"
              className="form-control"
              onChange={handleChange}
              value={formData.confirmPassword}
            />
          </div>
          <div className="col-auto">
            <span className="form-text">
              {passwordMatch ? "✔ Contraseñas coinciden" : "❌ Las contraseñas no coinciden"}
            </span>
          </div>
        </div>

         <button
          type="submit"
          className="btn btn-confirm-register-login w-100"
          disabled={!isFormComplete || loading || registerSuccess}
        >
          {registerSuccess
            ? "Registro exitoso"
            : loading
            ? "Registrando..."
            : "Registrarse"}
        </button>
      </form>
    </div>
  );
};
