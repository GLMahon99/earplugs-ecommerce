import React from 'react';
import ProductDescription from '../ProductDescription/ProductDescription';
import './ProductDetailContainer.css'

const ProductDetailContainer = ({data}) => {



    return ( 
        <div className='container my-5'>
            <div className='row row-cols-1 row-cols-md-2'>
                <div className='col container '>
                    <div className='container'>
                        <img src={data.img} alt="" className='img-product-detail mb-3'/>
                    </div>
                    
                </div>
                <div className='col container'>
                    <h3 className='title-product'>{data.title}</h3>
                    <hr />
                    <h5 className='code'>{data.code}</h5>
                    <ul className='items-product'>
                    {data.itemsProduct && data.itemsProduct.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
                        
                        
                    </ul>
                </div>
            </div>
            <ProductDescription description={data.description} comments={data.comments} indications={data.indications} classification={data.classification}/>
            
        </div>
    );
}
 
export default ProductDetailContainer;