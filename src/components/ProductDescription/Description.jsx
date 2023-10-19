import React from "react";

const Description = ({ description }) => {
  return (
    <div className="description-text-area container">
      {description ? (
        <p className="description container">{description}</p>
      ) : (
        <p className="description container">
          Lo sentimos no se pudo acceder a la descripción.
        </p>
      )}
    </div>
  );
};

export default Description;
