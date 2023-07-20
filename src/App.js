import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Section1 from "./seccionInicio";
import Section2 from "./seccionQuienesSomos";
import Section3 from "./seccionAgendaTuVisita";
import Section4 from "./seccionCompraAqui";
import Header from "./encabezado";
import Api from "./api";

function Pagina() {
  return (
    <Router>
      <div className="Pagina">
        <Header />
        <Routes>
          <Route exact path="/seccionInicio" element={<Section1 />} />
          <Route exact path="/seccionQuienesSomos" element={<Section2 />} />
          <Route exact path="/seccionAgendaTuVisita" element={<Section3 />} />
          <Route exact path="/seccionCompraAqui" element={<Section4 />} />
          <Route exact path="/api" element={<Api />} />

          <Route path="/" element={<Section1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Pagina;
