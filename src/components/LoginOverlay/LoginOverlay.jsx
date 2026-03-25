import React, { useState } from "react";
import { useProductsContext } from "../../context/Context";
import "./LoginOverlay.css";

const LoginOverlay = ({ onRedirect, onClose }) => {
  const { login } = useProductsContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) return;

    setLoading(true);
    setError(null);

    const res = await login(email, password); // llamada al contexto

    if (res.success) {
      onClose(); // cerrar modal al iniciar sesión
    } else {
      setError(res.message || "Error al iniciar sesión");
    }

    setLoading(false);
  };

  return (
    <div className="login-overlay fade-in">
      <div className="login-modal shadow-lg p-5 bg-white position-relative text-center">
        <button
          className="btn-close position-absolute top-0 end-0 m-4"
          onClick={onClose}
        ></button>

        <div className="mb-4">
          <h3 className="fw-bold mb-1" style={{ color: "var(--color-primary)" }}>
            Bienvenido de nuevo
          </h3>
          <p className="text-muted small">
            Ingresá tus credenciales para continuar
          </p>
        </div>

        {error && <div className="alert alert-danger py-2">{error}</div>}

        <div className="form-floating mb-3 text-start">
          <input
            type="email"
            className="form-control custom-input"
            id="floatingEmail"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingEmail">Correo Electrónico</label>
        </div>

        <div className="form-floating mb-4 text-start">
          <input
            type="password"
            className="form-control custom-input"
            id="floatingPassword"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Contraseña</label>
        </div>

        <button
          className="btn btn-login w-100 py-3 fw-bold rounded-pill shadow-sm"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </button>

        <button
          className="btn btn-link mt-3 w-100 text-decoration-none redirect-btn"
          onClick={onRedirect}
        >
          ¿No tenés cuenta? <strong style={{ color: 'var(--color-primary)' }}>Registrate</strong>
        </button>
      </div>
    </div>
  );
};

export default LoginOverlay;
