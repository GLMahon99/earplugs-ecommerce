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
        <div className="section-header mb-5">
          <h2 className="title-section">Nuestro Catálogo</h2>
          <p className="subtitle-section">
            Descubre nuestra selección de tapones de las mas alta calidad, diseñados para tu máximo confort y protección en cualquier entorno.
          </p>
        </div>

        <div
          className="products-isotope"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="d-flex justify-content-center">
            <ul className="filter-products">
              <li className={categoryActive === "all" ? "active" : ""} onClick={() => handleCategoryChange("all")}>
                Todos
              </li>
              <li className={categoryActive === "both" ? "active" : ""} onClick={() => handleCategoryChange("both")}>
                Agua y Ruido
              </li>
              <li className={categoryActive === "sound" ? "active" : ""} onClick={() => handleCategoryChange("sound")}>
                Reductores de Sonido
              </li>
              <li className={categoryActive === "water" ? "active" : ""} onClick={() => handleCategoryChange("water")}>
                Deportes Acuáticos
              </li>
            </ul>
          </div>

          <div className="row g-4 products-container justify-content-center">
            <ProductsList filteredProducts={filteredProducts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
