import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const { name, email, subject, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Valida los campos requeridos...

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }

    if (subject.trim() === "") {
      alert("Please enter the subject.");
      return;
    }

    if (message.trim() === "") {
      alert("Please enter your message.");
      return;
    }

    setIsSending(true);

    try {
      // Envia el correo electrónico utilizando EmailJS
      await emailjs.sendForm(
        "service_zhxfdzm",
        "template_ykeoo2c",
        e.target,
        "TzgSyFWDddnrBKKph"
      );

      setIsSending(false);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 4000);
    } catch (error) {
      setIsSending(false);
      alert("Error al enviar el mensaje. Por favor, inténtalo nuevamente.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Contacto</h2>
          <p>
            ¡Estamos aquí para ti! Ponte en contacto con nosotros y permítenos
            brindarte la atención personalizada que necesitas.
          </p>
        </div>

        <div className="row gx-lg-0 gy-4">
          <div className="col-lg-4">
            <div className="info-container d-flex flex-column align-items-center justify-content-center">
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Ubicación:</h4>
                  <p>Buenos Aires, Argentina.</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>tjmearplugs@hotmail.com</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Teléfono:</h4>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-clock flex-shrink-0"></i>
                <div>
                  <h4>Horarios de atención:</h4>
                  <p>Lun - Vier: 9AM - 18PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Nombre y Apellido"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Asunto"
                  value={subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="7"
                  placeholder="Mensaje"
                  value={message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="my-3">
                {showSuccessMessage && (
                  <div className="alert alert-success" role="alert">
                    Su mensaje ha sido enviado. Pronto nos estaremos
                    comunicando.
                  </div>
                )}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className={
                    isSending ? "sending" : showSuccessMessage ? "sent" : ""
                  }
                  disabled={isSending || showSuccessMessage}
                >
                  {isSending ? (
                    <>
                      <span className="sending-text">Enviando</span>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    </>
                  ) : showSuccessMessage ? (
                    <div className="sent">
                      <span>Enviado</span>
                      <i className="bi bi-check2"></i>
                    </div>
                  ) : (
                    <span>Enviar mensaje</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
