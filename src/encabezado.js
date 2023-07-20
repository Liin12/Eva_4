import React from "react";
import { Link } from "react-router-dom";

/*Tab de inicio*/
const Header = () => {
  return (
    <nav className="header-nav">
      <ul className="header-ul">
        <Link to="/" className="header-link">
          <li className="header-li">Inicio</li>
        </Link>
        <Link to="/seccionQuienesSomos" className="header-link">
          <li className="header-li">Quienes Somos</li>
        </Link>
        <Link to="/seccionAgendaTuVisita" className="header-link">
          <li className="header-li">Agenda tu Visita</li>
        </Link>
        <Link to="/seccionCompraAqui" className="header-link">
          <li className="header-li">Compra Aquí</li>
        </Link>
        <Link to="/api" className="header-link">
          <li className="header-li">Galería de imágenes</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
