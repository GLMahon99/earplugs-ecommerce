import React from "react";
import { useProductsContext } from "../../context/Context";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const { user, logout } = useProductsContext();

  if (!user) {
    return (
      <div className="user-profile-empty">
        <i className="bi bi-person-x-fill empty-icon"></i>
        <h3>No hay sesión activa</h3>
        <p>Iniciá sesión para ver tu perfil.</p>
        <Link to="/LoginRegister" className="btn-profile-login">
          Iniciar Sesión
        </Link>
      </div>
    );
  }

  const initials = `${user.nombre?.charAt(0) || ""}${user.apellido?.charAt(0) || ""}`.toUpperCase();

  const fields = [
    { icon: "bi-person-fill", label: "Nombre", value: user.nombre },
    { icon: "bi-person-fill", label: "Apellido", value: user.apellido },
    { icon: "bi-envelope-fill", label: "Email", value: user.email },
    { icon: "bi-telephone-fill", label: "Teléfono", value: user.telefono || "No registrado" },
    { icon: "bi-card-text", label: "Tipo de identificación", value: user.tipo_identificacion },
    { icon: "bi-hash", label: "N° de identificación", value: user.numero_identificacion },
    { icon: "bi-receipt", label: "Condición IVA", value: user.condicion_iva },
  ];

  return (
    <section id="user-profile-page">
      <div className="container">

        {/* Header Card */}
        <div className="profile-header-card" data-aos="fade-up">
          <div className="profile-avatar">
            {initials}
          </div>
          <div className="profile-header-info">
            <h1 className="profile-name">{user.nombre} {user.apellido}</h1>
            <p className="profile-email">
              <i className="bi bi-envelope me-2"></i>
              {user.email}
            </p>
            <span className="profile-badge">
              <i className="bi bi-patch-check-fill me-1"></i>
              Cliente verificado
            </span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="profile-info-grid" data-aos="fade-up" data-aos-delay="100">
          <h2 className="profile-section-title">
            <i className="bi bi-person-lines-fill me-2"></i>
            Información personal
          </h2>

          <div className="row g-4 mt-1">
            {fields.map((field, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="profile-field-card">
                  <div className="profile-field-icon">
                    <i className={`bi ${field.icon}`}></i>
                  </div>
                  <div className="profile-field-content">
                    <span className="profile-field-label">{field.label}</span>
                    <span className="profile-field-value">{field.value}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="profile-actions" data-aos="fade-up" data-aos-delay="200">
          <Link to="/" className="btn-profile-action secondary">
            <i className="bi bi-arrow-left me-2"></i>
            Volver al inicio
          </Link>
          <button className="btn-profile-action danger" onClick={logout}>
            <i className="bi bi-box-arrow-right me-2"></i>
            Cerrar sesión
          </button>
        </div>

      </div>
    </section>
  );
};

export default UserProfile;
