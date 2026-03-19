import React from "react";
import { Link } from "react-router-dom";

const ProductsItem = ({ title, imagen, id }) => {
  return (
    // <div className="col products-item filter-product">
    //   <div className="products-wrap">
    //     <Link
    //       to={`/products/${id}`}
    //       data-gallery="products-gallery-app"
    //       className="glightbox"
    //     >
    //       <div className="container">
    //         <img src={imagen} className="img-fluid" alt="" />
    //       </div>

    //       <div className="products-info container">
    //         <h4>{title}</h4>
    //       </div>
    //     </Link>
    //   </div>
    // </div>

    <Link to={`/products/${id}`} data-gallery="products-gallery-app">
      <div className="col product-item  shadow-sm rounded">
        <div className="button-description text-center d-flex flex-column">
          <i class="bi bi-plus-square icon-button-description"></i>
          <p className="text-button-description">Accede a la descripción del producto</p>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <div className="container-img-product">
            <img src={imagen} alt="img-product" className="img-productList" />
          </div>
          <div className="container-product-title">
            <h4 className="product-title d-flex justify-content-center">
              {title}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductsItem;
