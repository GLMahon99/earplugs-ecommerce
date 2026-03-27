import React, { useState, useEffect } from "react";
import axios from "axios";
import { useProductsContext } from "../../context/Context";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const { user, logout } = useProductsContext();
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      try {
        setLoadingOrders(true);
        // Intentamos obtener las órdenes. Si el backend requiere user_id o email, 
        // lo pasamos como parámetro. 
        const res = await axios.get("https://adminearplugs.up.railway.app/api/auth/orders", {
          params: { email: user.email } // Comúnmente se usa el email o ID
        });

        if (res.data && Array.isArray(res.data)) {
          setOrders(res.data);
        } else if (res.data.orders && Array.isArray(res.data.orders)) {
          setOrders(res.data.orders);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoadingOrders(false);
      }
    };

    fetchOrders();
  }, [user]);

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

        {/* Orders Section */}
        <div className="profile-orders-section" data-aos="fade-up" data-aos-delay="150">
          <h2 className="profile-section-title">
            <i className="bi bi-bag-check-fill me-2"></i>
            Historial de compras
          </h2>

          {loadingOrders ? (
            <div className="orders-loading">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
              <p>Cargando tus pedidos...</p>
            </div>
          ) : orders.length > 0 ? (
            <div className="orders-list mt-4">
              {orders.map((order) => (
                <div className="order-card" key={order.id}>
                  <div className="order-header">
                    <div className="order-info">
                      <span className="order-number">Pedido #{order.id}</span>
                      <span className="order-date">
                        <i className="bi bi-calendar3 me-1"></i>
                        {new Date(order.fecha || order.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div className={`order-status status-${(order.estado || 'completado').toLowerCase()}`}>
                      {order.estado || 'Completado'}
                    </div>
                  </div>
                  <div className="order-body">
                    <div className="order-items-summary">
                      {/* Si el backend devuelve items, se podrían iterar aquí. 
                          Por ahora mostramos el total y la cantidad de productos */}
                      <p className="order-total-label">Total pagado</p>
                      <p className="order-total-value">${Number(order.total).toLocaleString('es-AR')}</p>
                    </div>
                    <div className="order-details-link">
                        <button className="btn-view-details">
                            Ver detalles
                        </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="orders-empty-state">
              <i className="bi bi-cart-x"></i>
              <p>Aún no has realizado ninguna compra.</p>
              <Link to="/Products" className="btn-shop-now">
                Ir a la tienda
              </Link>
            </div>
          )}
        </div>
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
