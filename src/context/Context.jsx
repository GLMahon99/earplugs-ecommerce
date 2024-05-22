import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";





const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState([]);
  const [totalProductsInCart, setTotalProductsInCart] = useState([]);



  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products: ", error);
      });
  }, []);

  useEffect(() => {
    // Cada vez que el carrito cambia, actualizamos el total
    const newTotal = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    setTotal(newTotal);
  }, [cart]);

  useEffect(() => {
    // Cada vez que el carrito cambia, actualizamos el total
    const newTotalProductsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalProductsInCart(newTotalProductsInCart);
  }, [cart]);


  const addToCart = (producto_id, titulo, codigo, precio, img, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.producto_id === producto_id
      );

      if (existingProduct) {
        // Si el producto ya existe en el carrito, incrementamos su cantidad
        return prevCart.map((item) =>
          item.producto_id === producto_id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Si el producto no está en el carrito, lo agregamos con la cantidad especificada
        return [
          ...prevCart,
          { producto_id, titulo, codigo, precio, img, quantity },
        ];
      }
    });
  };

  const deleteItemCart = (producto_id) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.producto_id !== producto_id);
    });
  };

  const incrementQuantity = (producto_id, quantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.producto_id === producto_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  const decreaseQuantity = (producto_id, quantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.producto_id === producto_id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
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
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
