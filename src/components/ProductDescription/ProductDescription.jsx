import React, { useState } from "react";
import "./ProductDescription.css";
import Description from "./Description";
import Indications from "./Indications";
import Comments from "./Comments";

const ProductDescription = ({ description, indications, comments, classification }) => {
  const [activeTab, setActiveTab] = useState("Descripcion");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: ""
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCommentSubmit = () => {
    setIsSending(true);
    // Simulación de envío
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        comment: ""
      });
    }, 2000);
  };

  return (
    <div className="description-area container">
      <ul className="nav nav-tabs mt-5">
        <li className="nav-item">
          <a
            className={`nav-link nav-link-description ${
              activeTab === "Descripcion" ? "active" : ""
            }`}
            href="#Descripcion"
            onClick={() => setActiveTab("Descripcion")}
          >
            Descripcion
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link nav-link-description ${
              activeTab === "indicaciones" ? "active" : ""
            }`}
            href="#indicaciones"
            onClick={() => setActiveTab("indicaciones")}
          >
            Indicaciones de uso
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link nav-link-description ${
              activeTab === "comments" ? "active" : ""
            }`}
            href="#comments"
            onClick={() => setActiveTab("comments")}
          >
            Comentarios
          </a>
        </li>
      </ul>

      <div className="tab-content py-4 container" id="ex1-content">
        <div
          className={`tab-pane fade ${
            activeTab === "Descripcion" ? "show active" : ""
          }`}
          id="Descripcion"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
          <Description  description={description}/>
        </div>
        <div
          className={`tab-pane fade ${
            activeTab === "indicaciones" ? "show active" : ""
          }`}
          id="indicaciones"
          role="tabpanel"
          aria-labelledby="ex1-tab-2"
        >
          <div>
            <Indications  indications={indications}/>
          </div>
        </div>
        <div
          className={`tab-pane fade ${activeTab === "comments" ? "show active" : ""}`}
          id="comments"
          role="tabpanel"
          aria-labelledby="ex1-tab-3"
        >
          <div className="container row row-cols-1 row-cols-lg-2">
            <div className="col">
              <div className="container w-75 mb-3">
                <div className="row row-cols-2">
                  <div className="col">
                    <h1 className="puntuacion d-flex flex-row-reverse">{classification}</h1>
                  </div>
                  <div className="col">
                    <span className="bi bi-star-fill"></span>
                    <span className="bi bi-star-fill"></span>
                    <span className="bi bi-star-fill"></span>
                    <span className="bi bi-star-fill"></span>
                    <span className="bi bi-star-half"></span>
                    <p>calificación</p>
                  </div>
                </div>
              </div>
              <div className="container">
                
                  <Comments comments={comments}/>
              </div>
            </div>
            <div className="col">
              <p className="mb-4">
                "¡Tu opinión nos importa! Comparte tu experiencia y ayúdanos a seguir mejorando."
              </p>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control mb-4"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="nombre y apellido"
                />
                <input
                  type="email"
                  className="form-control mb-4"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email"
                />
                <input
                  type="text"
                  className="form-control mb-4"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="teléfono"
                />
              </div>

              <div className="mb-4">
                <textarea
                  className="form-control"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="ingrese su comentario"
                ></textarea>
              </div>
              <div>
              {isSent && (
        <div className="alert alert-success mt-3" role="alert">
          Gracias por su comentario. ¡Valoramos su opinión!
        </div>
      )}
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleCommentSubmit}
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span className="ms-2">Enviando...</span>
                    </>
                  ) : (
                    "Enviar"
                  )}
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ProductDescription;
