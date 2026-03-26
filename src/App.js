import "./App.css";
import Home from "./Pages/Home";
import Loading from "./Pages/Loading";
import Preloader from "./Pages/Preloader";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Products from "./Pages/Products/Products";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartPage from "./Pages/Cart/CartPage";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import AOS from "aos";
import LoginOverlay from "./components/LoginOverlay/LoginOverlay";
import { SectionLoginRegister } from "./Pages/SectionLoginRegister/SectionLoginRegister";
import UserProfile from "./Pages/UserProfile/UserProfile";
import { useProductsContext } from "./context/Context";
import "aos/dist/aos.css";

import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Componente Layout para reutilizar módulos fijos sin recargarlos
const MainLayout = () => {
  return (
    <>
      <Header />
      <ScrollTop />
      {/* Outlet renderiza dinámicamente el contenido de la página actual */}
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const { showLoginModal, setShowLoginModal, user, loading } = useProductsContext();

  const [showLoader, setShowLoader] = useState(true);
  const [fadeLoader, setFadeLoader] = useState(false);
  const navigate = useNavigate();

  // 1. Control Inteligente del Loader (UX)
  // Desaparece en el milisegundo que loading pasa a false (vinculado directo a los datos reales),
  // pero ejecutando la transición visual animada.
  useEffect(() => {
    if (!loading) {
      // Inicia opacidad 0 inmediatamente (gracias a CSS transition 0.8s)
      setFadeLoader(true);
      
      // Destruye el DOM del loader cuando termina la animación
      const removeTimer = setTimeout(() => {
        setShowLoader(false);
      }, 800); 

      return () => clearTimeout(removeTimer);
    } else {
      setShowLoader(true);
      setFadeLoader(false);
    }
  }, [loading]);

  // Mostrar overlay login si no hay usuario
  useEffect(() => {
    if (!user) {
      setShowLoginModal(true);
    }
  }, [user, setShowLoginModal]);

  // Init AOS para animaciones
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  // 2. Limpieza de lógica residual del Login
  // Modificamos handleRedirect, el handleLogin falso se eliminó.
  const handleRedirect = () => {
    setShowLoginModal(false);
    navigate("/LoginRegister");
  };

  return (
    <HelmetProvider>
      <div className="App">
        {/* Renderizado dinámico del loader */}
        {showLoader && (
          <div className={`body-loader ${fadeLoader ? "fade-out" : ""}`}>
            <Preloader />
            <Loading />
          </div>
        )}
        
        {/* Renderizado de rutas mediante Outlet (protegidas del render prematuro) */}
        {!loading && (
          <>
            <Routes>
              {/* Todas las rutas anidadas aquí comparten Header y Footer mágicamente sin recargarlo */}
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/CartPage" element={<CartPage />} />
                <Route path="/profile" element={<UserProfile />} />
              </Route>

              {/* Rutas totalmente apartadas (como la de registro) no usan el Header/Footer */}
              <Route path="/LoginRegister" element={<SectionLoginRegister />} />
            </Routes>

            {/* Overlay de login con lógica purificada */}
            {!user && showLoginModal && (
              <LoginOverlay
                onRedirect={handleRedirect}
                onClose={() => setShowLoginModal(false)}
              />
            )}
          </>
        )}
      </div>
    </HelmetProvider>
  );
}

export default App;
