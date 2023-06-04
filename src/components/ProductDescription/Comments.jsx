import React from "react";

const Comments = ({comments}) => {

  if (!comments || !Array.isArray(comments)) {
    return <div>Error: No se pudo acceder a la información de las comentarios</div>;
  }

  return (<>
  {comments.map((item, index) => (
            <div>
            <div className="mb-2">
              <span className="bi bi-star-fill"></span>
              <span className="bi bi-star-fill"></span>
              <span className="bi bi-star-fill"></span>
              <span className="bi bi-star-fill"></span>
              <span className="bi bi-star-fill"></span>
            </div>
            <p className="comments-text" key={index}>
              {item}
            </p>
          </div>
        ))}
    
    </>
  );
};

export default Comments;
