import React, { useState, useEffect } from 'react';

const Api = () => {
  const [imagenes, setImagenes] = useState([]);
  const [categoria, setCategoria] = useState('ropa');
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const buscarImagenes = async () => {
      const apiKey = '37666655-1ed16e2b7069cce9f642017e9';
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${categoria}&image_type=photo`;

      try {
        setCargando(true);
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setImagenes(resultado.hits);
        setCargando(false);
      } catch (error) {
        console.error('Error al obtener las imágenes:', error);
        setCargando(false);
      }
    };

    buscarImagenes();
  }, [categoria]);

  const handleCategoriaChange = event => {
    setCategoria(event.target.value);
  };

  return (
    <div className="container my-5">
      <div className="jumbotron">
        <h2 className="text-center">Galería de Imágenes</h2>
        <label htmlFor="categoria">Selecciona una categoría:</label>
        <select id="categoria" value={categoria} onChange={handleCategoriaChange}>
          <option value="ropa">Ropa</option>
          <option value="comida">Comida</option>
          <option value="naturaleza">Naturaleza</option>
          {/* Agrega más opciones de categorías según tus necesidades */}
        </select>
      </div>
      <div className="row">
        {cargando ? (
          <div>Cargando...</div>
        ) : (
          imagenes.map(imagen => (
            <div key={imagen.id} className="col-md-4 mb-4">
              <img src={imagen.webformatURL} alt={imagen.tags} className="img-fluid" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Api;