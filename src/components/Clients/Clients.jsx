import React, {useEffect, useState} from 'react';
import './Clients.css';
import axios from 'axios';


import ClientsSwiper from './ClientsSwiper';

const Clients = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const cargarFaq = async () => {
      
      const response = await axios.get(
        `http://localhost:3000/api/images/farmacias`
      );
      setData(response.data);
      
    }
    cargarFaq();
  }, []);
 



return (
<section id="clients" className="clients">
  <div className="container" data-aos="zoom-out">
  <ClientsSwiper data={data}/>
   

  </div>
</section> 
);
}

export default Clients;