import React from 'react';

const Indications = ({indications}) => {
    // if (!indications || !Array.isArray(indications)) {
    //     return <div>Error: No se pudo acceder a la información de las indicaciones</div>;
    //   }

    // return ( <div className='indicaciones-text-area container'>
    //     {indications.map((item, index) => (
    //         <p className='indicaciones' key={index}>{item}</p>
    //     ))}
    // </div> );
    return(
        <div className="indicaciones-text-area container">
        {indications ? (
          <p className="indicaciones container">{indications}</p>
        ) : (
          <p className="indicaciones container">
            Lo sentimos no se pudo acceder a las indicaciones.
          </p>
        )}
      </div>
    )
}
 
export default Indications;