import React from "react";
import { Link } from "react-router-dom";
import { optimizeCloudinaryUrl } from "../../utils/cloudinaryUtils";

const ProductsItem = ({ title, imagen, id, size }) => {
  const isSmall = size === "small";

  return (
    <div className={isSmall ? "col-product-small" : "col-product-large"} data-aos="fade-up">
      <Link to={`/products/${id}`} className="text-decoration-none">
        <div className="product-item rounded-4 shadow-sm h-100">
          <div className="button-description text-center d-flex flex-column align-items-center">
            <i className="bi bi-eye-fill icon-button-description"></i>
            <p className="text-button-description small">Ver Detalle</p>
          </div>

          <div className={`container-img-product ${isSmall ? "img-small" : ""}`}>
            <img 
              src={optimizeCloudinaryUrl(imagen)} 
              alt={title} 
              className="img-productList" 
              loading="lazy"
            />
          </div>

          <div className="container-product-title mt-3">
            <h4 className={`product-title ${isSmall ? "title-small" : "title-large"}`}>
              {title}
            </h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductsItem;
