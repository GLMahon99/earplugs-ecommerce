import React from 'react';
import './Preloader.css';

const Preloader = () => {
    return ( 
        <div className='position-absolute top-50 start-50 translate-middle'>
        <div className='loader '>
  <         div className='face'>
                <div className='circle'></div>
            </div>
            <div className='face'>
                <div className='circle'></div>
            </div>
        </div>
        
        </div>
     );
}
 
export default Preloader;