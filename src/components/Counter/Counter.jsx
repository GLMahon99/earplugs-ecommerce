import React from 'react';
import './Counter.css';
import CountUp from 'react-countup';


const Counter = () => {

return ( <section id="stats-counter" className="stats-counter">
    <div className="container" data-aos="fade-up">

        <div className="row gy-4 align-items-center">

            <div className="col-lg-6">
                <img src="https://i.ibb.co/Hp1NN5Q/Data-report-pana.png" alt="" className="img-fluid" />
                <a className='invisible' href="https://storyset.com/data">Data illustrations by Storyset</a>
            </div>

            <div className="col-lg-6">

                <div className="stats-item d-flex align-items-center">
                    <span className="purecounter">
                        <CountUp start={0} end={3671} duration={6}/>
                    </span>
                    
                    <p><strong>Clientes satisfechos y contando</strong> Tu satisfacción es nuestro mayor logro.</p>
                </div>

                <div className="stats-item d-flex align-items-center">
                <span className="purecounter">
                        <CountUp start={0} end={Math.floor(Math.random() * (70 - 34 + 1)) + 34} duration={6}/>
                    </span>
                    <p><strong>Tapones vendidos esta semana</strong> Protegiendo audiciones, mejorando vidas.</p>
                </div>

                <div className="stats-item d-flex align-items-center">
                <span className="purecounter">
                        <CountUp start={0} end={120} duration={6}/>
                    </span>
                    <p><strong>Promedio de horas semanales de proteccion</strong> Uso continuo de 10 horas diarias como máximo</p>
                </div>

            </div>

        </div>

    </div>
</section> );
}

export default Counter;