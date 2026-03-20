import React from "react";
import "./Preloader.css";
import { LogoMiniEarplugs } from "../components/LogoMiniEarplugs/LogoMiniEarplugs";

const Preloader = () => {
  return (
    <>
      <div>
        <div className="loader">
          <div className="face">
            <div className="circle"></div>
          </div>
          <div className="face">
            <div className="circle"></div>
          </div>
          {/* Añade el SVG en el centro del preloader */}
          <div className="center-svg">
            <LogoMiniEarplugs/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
