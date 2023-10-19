import React from 'react';
import { Link } from 'react-router-dom';

const ProductsItem = ({title, imagen, id}) => {


    return ( <div className="col products-item filter-product">
                <div className="products-wrap">
                  <Link to={`/product/${id}`} data-gallery="products-gallery-app" className="glightbox">
                    <div className='container'>
                      <img src={imagen} className="img-fluid" alt=""/>
                    </div>
                  
                  <div className="products-info container">
                    <h4>{title}</h4>
                    
                  </div>
                  </Link>
                </div>
              </div>
     );
}
 
export default ProductsItem;