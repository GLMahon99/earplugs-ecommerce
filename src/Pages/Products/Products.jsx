import React, { useState } from "react";
import "./Products.css";
import { useProductsContext } from "../../context/Context";

import ProductsList from "./ProductsList";

const Products = () => {
  const { products } = useProductsContext();
  const [filters, setFilters] = useState({ categoria: "all" });
  const [categoryActive, setCategoryActive] = useState("all");

  console.log("context del product", products);

  const handleCategoryChange = (category) => {
    setFilters({ categoria: category });
    setCategoryActive(category);
  };

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        filters.categoria === "all" || product.categoria === filters.categoria
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <section id="products" className="products sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Productos</h2>
          <p>
            Tapones para oídos de la más alta calidad que vas a encontrar en el
            mercado.
          </p>
        </div>

        <div
          className="products-isotope"
          data-products-filter="*"
          data-products-layout="masonry"
          data-products-sort="original-order"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div>
            <ul className="filter-products">
              <li className={categoryActive === "all" ? "active" : ""} onClick={() => handleCategoryChange("all")}>
                Todos los productos
              </li>
              <li className={categoryActive === "both" ? "active" : ""} onClick={() => handleCategoryChange("both")}>
                Proteccion agua y ruido
              </li>
              <li className={categoryActive === "sound" ? "active" : ""} onClick={() => handleCategoryChange("sound")}>
                Reductores de sonido
              </li>
              <li className={categoryActive === "water" ? "active" : ""} onClick={() => handleCategoryChange("water")}>
                Deportes acuaticos
              </li>
            </ul>
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4 products-container">
            <ProductsList filteredProducts={filteredProducts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
