import React from 'react';

const Section1 = () => {
  return (
    <section className="section" id="seccion1">
      <div id="Inicio" />
      <div className="carousel">
        <div className="section1-grid">
          <div className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2018/10/28/18/25/used-clothing-3779497_1280.jpg"
              alt="Imagen 1"
            />
          </div>
          <div className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2014/04/03/11/35/shopping-311924_1280.png"
              alt="Imagen 2"
            />
            <h1>RECYCLOTHING</h1>
          </div>
          <div className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2016/04/08/18/46/shopping-mall-1316787_1280.jpg"
              alt="Imagen 3"
            />
          </div>
        </div>
      </div>
      <footer>
        <p>Contáctanos:</p>
        <p>Ayleen Vásquez Norambuena</p>
        <div className="phone-symbol">&#9742;</div>
        <div className="phone-number">+56971366552</div>
        <div className="footer-text">&copy; 2023 Reciclothing. Todos los derechos reservados</div>
      </footer>
    </section>
  );
};

export default Section1;