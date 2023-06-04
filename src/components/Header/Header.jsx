import React, { useEffect, useState } from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import Topbar from '../Topbar/Topbar';

const Header = () => {
  useEffect(() => {
    const headerFixed = () => {
      const header = document.querySelector('#header');
      if (header) {
        const offset = header.offsetTop;
        if (window.pageYOffset > offset) {
          header.classList.add('sticked');
        } else {
          header.classList.remove('sticked');
        }
      }
    };

    window.addEventListener('scroll', headerFixed);

    return () => {
      window.removeEventListener('scroll', headerFixed);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1300);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Topbar/>
      {isMobile ? <MobileNavbar /> : <Navbar />}
      
          
        
    </>
  );
};

export default Header;
