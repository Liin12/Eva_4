import React, { useState } from 'react';

const Section2 = () => {
  // Estado para controlar la visibilidad de la sección 3
  const [seccion3Visible, setSeccion3Visible] = useState(false);

  // Lógica para mostrar la sección 3
  const mostrarSeccion3 = () => {
    setSeccion3Visible(true);
  };

  return (
    <>
      {/* Sección 2 */}
      <section className="section" id="seccion2">
      <h1 style={{ textAlign: "center" }}>Quienes</h1>
        <a id="Quienes_Somos"></a>
        <img
          className="imagenquienessomos"
          src="https://img.freepik.com/foto-gratis/ecologia-voluntario-reciclar-camiseta_23-2147826127.jpg?w=740&t=st=1687648503~exp=1687649103~hmac=991c8bfc9f3593f71947b0dd88fb5cd54f9ec956e2fb67eae544c14d3f8194c1"
          alt="Imagen 3"
        />

        <p className="parrafo">
          Considerando que una prenda puede tardar hasta 200 años en descomponerse, las empresas textiles han tomado cada
          vez más conciencia y han implementado acciones para contrarrestar este impacto. <br />
          <br />
          Bajo la estrategia Reutiliza, Tienda Recyclothing, implementó medidas para promover la economía circular y
          extender la vida útil de cualquier prenda. Bajo el concepto de “nada se pierde, todo se reutiliza”, la empresa
          nacional ha creado distintos servicios para que todos puedan llevar su ropa vieja y darle una nueva vida. <br />
          <br />
          En Recyclothing te damos la posibilidad de darle un nuevo uso a tus prendas que ya no utilizas, con la opción
          de la "permuta". Sólo debes incscribirte en el formulario{' '}
          <a href="#Agenda_tu_visita" onClick={mostrarSeccion3}>
            Agenda tu visita
          </a>
          , y te agendaremos una hora para que veas todo lo que tenemos para ofrecerte en prendas de selección Premium.
        </p>
      </section>

      {/* Sección 3 (solo se mostrará si seccion3Visible es true) */}
      {seccion3Visible && (
        <section className="section" id="seccion3">
          {/* Contenido de la sección 3 */}
        </section>
      )}
    </>
  );
};

export default Section2;