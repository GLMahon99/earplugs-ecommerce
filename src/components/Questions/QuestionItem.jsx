import React from 'react';



const QuestionItem = ({data}) => {
    return (     <>
        {data.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h3 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#faq-content-${index}`} // Generar un id único para cada pregunta
              >
                <span className="num">{item.num}.</span>
                {item.question}
              </button>
            </h3>
            <div
              id={`faq-content-${index}`} // Asignar el mismo id único generado para cada pregunta
              className="accordion-collapse collapse"
              data-bs-parent="#faqlist"
            >
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </>
     );
}
 
export default QuestionItem;