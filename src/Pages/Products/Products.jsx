import React, { useState } from "react";
import "./Products.css";
import { useProductsContext } from "../../context/Context";

import ProductsList from "./ProductsList";

const Products = () => {
  const { products, productsError, fetchProductsData } = useProductsContext();
  const [filters, setFilters] = useState({ categoria: "all" });
  const [categoryActive, setCategoryActive] = useState("all");

  console.log("context del product", products);

  const handleCategoryChange = (category) => {
    setFilters({ categoria: category });
    setCategoryActive(category);
  };

  const filterProducts = (productsList) => {
    if (!productsList) return [];
    return productsList.filter((product) => {
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

        {productsError && products.length > 0 && (
          <div className="catalog-warning-banner" data-aos="fade-down">
            <span>
              <i className="bi bi-cloud-slash-fill me-2"></i>
              No pudimos sincronizar los productos más recientes. Mostrando catálogo guardado localmente.
            </span>
            <button className="btn-retry-sm" onClick={fetchProductsData}>
              <i className="bi bi-arrow-clockwise me-1"></i>
              Reintentar
            </button>
          </div>
        )}

        {productsError && products.length === 0 ? (
          <div className="catalog-error-container" data-aos="zoom-in">
            <i className="bi bi-exclamation-triangle-fill catalog-error-icon"></i>
            <h3 className="catalog-error-title">No se pudieron cargar los productos</h3>
            <p className="catalog-error-text">
              Hubo un problema de conexión con el servidor. Por favor, comprueba tu conexión a internet e intenta nuevamente.
            </p>
            <button className="btn-retry" onClick={fetchProductsData}>
              <i className="bi bi-arrow-clockwise me-2"></i>
              Intentar nuevamente
            </button>
          </div>
        ) : (
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
              {filteredProducts.length > 0 ? (
                <ProductsList filteredProducts={filteredProducts} />
              ) : (
                <div className="col-12 text-center py-5">
                  <p className="text-muted">No se encontraron productos en esta categoría.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
