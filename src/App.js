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
import { ProductsProvider } from "./context/Context";
import ScrollToTop from "./components/ScrollTop";



import "aos/dist/aos.css";

import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula el tiempo de carga de la página durante 2 segundos
    setTimeout(() => {
      setIsLoading(false);
      aos_init();
    }, 3000);
  }, []);

  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", () => {
    aos_init();
  });
  return (
    <div className="App">
      {isLoading ? (
        <div className="body-loader">
          <Preloader />
          {/* <Loading /> */}
        </div>
      ) : (
        <>
          <ProductsProvider>
            <Header />
            <ScrollToTop/>
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/CartPage" element={<CartPage />} />
            </Routes>
            <ScrollTop />
            <Footer />
          </ProductsProvider>
        </>
      )}
    </div>
  );
}

export default App;
