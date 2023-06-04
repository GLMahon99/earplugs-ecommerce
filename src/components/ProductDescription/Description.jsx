import React from 'react';


const Description = ({description}) => {

    if (!description || !Array.isArray(description)) {
        return <div>Error: No se pudo acceder a la información de la description</div>;
      }

    return ( <div className='description-text-area container'>
        {description.map((item, index) => (
            <p className='description' key={index}>{item}</p>
        ))}
    </div>
        // <p className="description container">{}</p>
    );
}
 
export default Description;