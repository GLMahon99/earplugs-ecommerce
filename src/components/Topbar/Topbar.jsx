import React from 'react';

import './Topbar.css';

const Topbar = () => {
    return ( <section id="topbar" className="topbar d-flex align-items-center">
    <div className="container d-flex justify-content-center justify-content-md-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope d-flex align-items-center">
          <a href="mailto:tjmearplugs@hotmail.com">tjmearplugs@hotmail.com</a>
        </i>
        <i className="bi bi-phone d-flex align-items-center ms-4">
          <span>+1 5589 55488 55</span>
        </i>
      </div>
      <div className="social-links d-none d-md-flex align-items-center">
        <a href="/" className="twitter">
          <i className="bi bi-twitter"></i>
        </a>
        <a href="https://www.facebook.com/EarplugsTapones" Target="_blank" className="facebook">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/earplugs_tjm/" Target="_blank" className="instagram">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="/" className="linkedin">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </div>
  </section> );
}
 
export default Topbar;