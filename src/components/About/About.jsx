import React from "react";
import "./About.css";

const Aboout = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Nosotros</h2>
          <p>
            Dale a tus oídos el cuidado que se merecen. Disfruta de noches de
            sueño ininterrumpido y revitalizante. Evita infecciones y dolor por
            el ingreso de agua.{" "}
          </p>
        </div>

        <div className="row gy-4">
          <div className="col-lg-6">
            <h3>Conoce más sobre Earplugs</h3>
            <img
              src="https://i.ibb.co/cyXMVs6/Sin-t-tulo-2.png"
              className="img-fluid border-rounded mb-4"
              alt=""
            />
            <p>
              Earplugs es una empresa líder en Argentina dedicada a la
              fabricación de tapones para oídos de alta calidad. Con más de 10
              años de experiencia en el mercado, nos hemos convertido en la
              opción preferida de los consumidores que buscan proteger su
              audición y mejorar la calidad de su sueño.
            </p>
            <p>
              Nuestros tapones para oídos están diseñados para ofrecer una
              protección óptima contra el ruido, lo que permite a nuestros
              clientes disfrutar de un descanso tranquilo y reparador. Ya sea
              para bloquear ronquidos, el ruido del tráfico vehicular u otros
              sonidos molestos, proporcionando una barrera efectiva para
              garantizar un entorno silencioso. Además de su función de
              protección auditiva, nuestros tapones para oídos impiden la
              entrada de agua en los oídos, ayudando a prevenir infecciones y
              problemas de salud relacionados. Son especialmente recomendados
              por médicos otorrinolaringólogos, quienes valoran su eficacia y
              calidad.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="content ps-0 ps-lg-5">
              <p className="fst-italic">Nuestros productos se destacan por:</p>
              <ul>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  <strong>Protección de calidad:</strong> Tapones Earplugs
                  brindan una protección excepcional contra el ruido y el agua.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>{" "}
                  <strong>Comodidad y ajuste perfecto:</strong> Diseñados para
                  adaptarse cómodamente al oído, ofrecen un ajuste perfecto y
                  sin molestias.
                </li>
                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  <strong> Ampliamente confiables:</strong> Los tapones Earplugs
                  son ampliamente reconocidos por su calidad y confiabilidad.
                </li>
              </ul>
              <p>
                En Earplugs nos enorgullece utilizar materia prima importada de
                la mejor calidad para la fabricación de nuestros productos. Esto
                garantiza la durabilidad, comodidad y eficacia de nuestros
                tapones para oídos, y nos permite mantenernos a la vanguardia en
                términos de innovación y rendimiento. Gracias a nuestro
                compromiso con la excelencia y a la satisfacción de nuestros
                clientes, Earplugs se ha convertido en la empresa líder en
                ventas de tapones para oídos en Argentina. Nuestro éxito se basa
                en la calidad de nuestros productos, respaldada por la confianza
                que los consumidores depositan en nosotros.
              </p>
              <p>
                Nuestro objetivo principal es proporcionar soluciones efectivas
                y cómodas para mejorar la calidad de vida de las personas.{" "}
              </p>
              <div className="position-relative mt-4">
                <img
                  src="https://i.ibb.co/ZKSmkL8/portada-splash.png"
                  className="img-fluid border-rounded"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboout;
