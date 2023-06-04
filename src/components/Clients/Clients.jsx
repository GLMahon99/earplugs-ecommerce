import React, {useEffect, useState} from 'react';
import './Clients.css';


import { db } from '../../firebase/firebase';

import { collection, getDocs} from 'firebase/firestore';

import ClientsSwiper from './ClientsSwiper';

const Clients = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "clientsFarm"));
      const documents = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(documents);
    };

    fetchData();
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