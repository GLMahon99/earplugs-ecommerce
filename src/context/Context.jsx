import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment-timezone";

const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalProductsInCart, setTotalProductsInCart] = useState(0);
  const [priceShipp, setPriceShipp] = useState([]);
  const [dateNow, setDateNow] = useState([]);
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Loader global
  const [loading, setLoading] = useState(true);

  // --------------------- AUTENTICACIÓN REAL ---------------------
  const login = async (email, password) => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://adminearplugs.up.railway.app/api/auth/login",
        { email, password }
      );

      if (res.data.success) {
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        return { success: true };
      } else {
        return { success: false, message: res.data.message };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: err.response?.data?.message || "Error del servidor" };
    } finally {
      setLoading(false);
    }
  };

const register = async (formData) => {
  try {
    setLoading(true);

    // Llamada al backend
    const res = await axios.post(
      "https://adminearplugs.up.railway.app/api/auth/register",
      formData
    );

    if (res.data.success) {
      // 🔹 Crear objeto usuario para sesión
      const userObj = {
        id: res.data.insertId || res.data.user?.id, // según lo que devuelva tu backend
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        numero_identificacion: formData.numero_identificacion,
        tipo_identificacion: formData.tipo_identificacion,
        condicion_iva: formData.condicion_iva,
        telefono: formData.telefono,
      };

      // 🔹 Guardar sesión en estado y localStorage
      setUser(userObj);
      localStorage.setItem("user", JSON.stringify(userObj));

      // 🔹 Devolver también el user para el frontend
      return { success: true, user: userObj };
    } else {
      return { success: false, message: res.data.message };
    }
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message: err.response?.data?.message || "Error del servidor",
    };
  } finally {
    setLoading(false);
  }
};


  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Cargar sesión desde localStorage al iniciar
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const canAddToCart = () => !!user;

  // --------------------- FECHA Y HORA ---------------------
  useEffect(() => {
    const now = moment().tz("America/Argentina/Buenos_Aires");
    setDateNow(now.format("YYYY-MM-DD HH:mm:ss"));
  }, []);

  // --------------------- CARGA INICIAL ---------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, shippingRes] = await Promise.all([
          axios.get("https://adminearplugs.up.railway.app/api/products"),
          axios.get("https://adminearplugs.up.railway.app/api/shipping"),
        ]);

        setProducts(productsRes.data);
        setPriceShipp(shippingRes.data);
      } catch (error) {
        console.error("Error cargando datos iniciales:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --------------------- CÁLCULO DE TOTALES ---------------------
  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + item.precio * item.quantity, 0));
    setTotalProductsInCart(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, [cart]);

  // --------------------- FUNCIONES DEL CARRITO ---------------------
  const addToCart = (producto_id, titulo, codigo, precio, img, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.producto_id === producto_id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.producto_id === producto_id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { producto_id, titulo, codigo, precio, img, quantity }];
      }
    });
  };

  const deleteItemCart = (producto_id) => {
    setCart((prevCart) => prevCart.filter((item) => item.producto_id !== producto_id));
  };

  const incrementQuantity = (producto_id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.producto_id === producto_id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (producto_id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.producto_id === producto_id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        addToCart,
        cart,
        deleteItemCart,
        incrementQuantity,
        decreaseQuantity,
        total,
        totalProductsInCart,
        priceShipp,
        setTotal,
        dateNow,
        user,
        login,
        register,
        logout,
        canAddToCart,
        showLoginModal,
        setShowLoginModal,
        loading,
        setLoading,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
