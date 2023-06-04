import React from 'react';
import { Link } from 'react-router-dom';

const ProductsItem = ({title, img, id}) => {
    return ( <div className="col products-item filter-product">
                <div className="products-wrap">
                  <Link to={`/product/${id}`} data-gallery="products-gallery-app" className="glightbox">
                    <div className='container'>
                      <img src={img} className="img-fluid" alt=""/>
                    </div>
                  </Link>
                  <div className="products-info container">
                    <h4><a href="products-details.html" title="detalle">{title}</a></h4>
                    
                  </div>
                </div>
              </div>
     );
}
 
export default ProductsItem;