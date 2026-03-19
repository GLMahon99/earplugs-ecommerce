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
    <div className="login-overlay">
      <div className="login-modal shadow p-4 bg-white rounded position-relative">
        <button
          className="btn-close position-absolute top-0 end-0 m-3"
          onClick={onClose}
        ></button>

        <h4 className="mb-3">Bienvenido</h4>

        {error && <div className="alert alert-danger">{error}</div>}

        <input
          type="email"
          className="form-control mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-login w-100"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Ingresando..." : "Iniciar sesión"}
        </button>

        <button className="btn btn-link mt-2 w-100" onClick={onRedirect}>
          ¿No tenés cuenta? Registrate
        </button>
      </div>
    </div>
  );
};

export default LoginOverlay;
