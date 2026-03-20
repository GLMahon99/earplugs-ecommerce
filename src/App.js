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
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const { showLoginModal, setShowLoginModal, user, login, loading } =
    useProductsContext();

  const [showLoader, setShowLoader] = useState(true);
  const [fadeLoader, setFadeLoader] = useState(false);
  const navigate = useNavigate();

  // Loader control
  useEffect(() => {
    if (!loading) {
      const fadeTimer = setTimeout(() => {
        setFadeLoader(true);
      }, 1500); // Empieza a desaparecer a los 1.5s (ajustable)

      const removeTimer = setTimeout(() => {
        setShowLoader(false);
      }, 2300); // Se desmonta a los 2.3s después del fade-out

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [loading]);

  // Mostrar overlay login si no hay usuario
  useEffect(() => {
    if (!user) {
      setShowLoginModal(true);
    }
  }, [user, setShowLoginModal]);

  // Init AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const handleLogin = () => {
    const dummyUser = { name: "Gastón", email: "ejemplo@mail.com" };
    login(dummyUser);
    setShowLoginModal(false);
  };

  const handleRedirect = () => {
    setShowLoginModal(false);
    navigate("/LoginRegister");
  };

  return (
    <div className="App">
      {showLoader && (
        <div className={`body-loader ${fadeLoader ? "fade-out" : ""}`}>
          <Preloader />
          <Loading />
        </div>
      )}
      {!showLoader && (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <ScrollTop />
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/products"
              element={
                <>
                  <Header />
                  <ScrollTop />
                  <Products />
                  <Footer />
                </>
              }
            />
            <Route
              path="/products/:id"
              element={
                <>
                  <Header />
                  <ScrollTop />
                  <ProductDetail />
                  <Footer />
                </>
              }
            />
            <Route
              path="/CartPage"
              element={
                <>
                  <Header />
                  <ScrollTop />
                  <CartPage />
                  <Footer />
                </>
              }
            />
            <Route path="/LoginRegister" element={<SectionLoginRegister />} />
            <Route
              path="/profile"
              element={
                <>
                  <Header />
                  <UserProfile />
                  <Footer />
                </>
              }
            />
          </Routes>

          {/* Overlay de login solo si no hay sesión */}
          {!user && showLoginModal && (
            <LoginOverlay
              onLogin={handleLogin}
              onRedirect={handleRedirect}
              onClose={() => setShowLoginModal(false)}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
