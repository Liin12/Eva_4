import React, { useState, useEffect } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [correo, setCorreo] = useState("");
  const [tipo, setTipo] = useState([]);
  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [datos, setDatos] = useState([]);
  const [editarIndex, setEditarIndex] = useState(-1);
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("cotizaciones");
    if (data) {
      setDatos(JSON.parse(data));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los campos
    if (!nombre || !numero || !correo || tipo.length === 0 || !producto || !cantidad) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    const fechaHora = new Date().toLocaleString();

    const nuevaCotizacion = {
      nombre,
      numero,
      correo,
      tipo,
      producto,
      cantidad,
      fechaHora,
    };

    if (editarIndex === -1) {
      const nuevosDatos = [...datos, nuevaCotizacion];
      setDatos(nuevosDatos);
      localStorage.setItem("cotizaciones", JSON.stringify(nuevosDatos));
      setMensaje("Cotización Registrada");
    } else {
      const nuevosDatos = [...datos];
      nuevosDatos[editarIndex] = nuevaCotizacion;
      setDatos(nuevosDatos);
      localStorage.setItem("cotizaciones", JSON.stringify(nuevosDatos));
      setEditarIndex(-1);
      setMensaje("Cotización Editada");
    }

    // Mostrar mensaje de "Cotización Registrada" o "Cotización Editada" por 2 segundos
    setTimeout(() => {
      setMensaje("");
    }, 2000);

    // Restablecer los valores del formulario y el mensaje de error
    setNombre("");
    setNumero("");
    setCorreo("");
    setTipo([]);
    setProducto("");
    setCantidad("");
    setError("");
  };

  const handleDelete = (index) => {
    const nuevosDatos = [...datos];
    nuevosDatos.splice(index, 1);
    setDatos(nuevosDatos);
    localStorage.setItem("cotizaciones", JSON.stringify(nuevosDatos));
  };

  const handleEdit = (index) => {
    const cotizacion = datos[index];
    setNombre(cotizacion.nombre);
    setNumero(cotizacion.numero);
    setCorreo(cotizacion.correo);
    setTipo(cotizacion.tipo);
    setProducto(cotizacion.producto);
    setCantidad(cotizacion.cantidad);
    setEditarIndex(index);
    setError("");
    setMensaje("");
  };

  const handleExportJSON = () => {
    const data = localStorage.getItem("cotizaciones");
    if (data) {
      const cotizaciones = JSON.parse(data);
      const json = JSON.stringify(cotizaciones, null, 2);
      const blob = new Blob([json], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "cotizaciones.json";
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <section className="section" id="seccion3">
      <h1 style={{ textAlign: "center" }}>Formulario</h1>

      <form id="formulario" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          required
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="numero">Número de contacto:</label>
        <input
          type="number"
          id="numero"
          value={numero}
          required
          onChange={(e) => setNumero(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          value={correo}
          required
          onChange={(e) => setCorreo(e.target.value)}
        />
        <br />
        <br />

        <label>Permuta o Venta:</label>
        <br />
        <input
          type="checkbox"
          id="permuta"
          name="tipo"
          value="Permuta"
          checked={tipo.includes("Permuta")}
          onChange={(e) => {
            const selectedTipo = e.target.value;
            setTipo((prevTipo) =>
              prevTipo.includes(selectedTipo)
                ? prevTipo.filter((tipo) => tipo !== selectedTipo)
                : [...prevTipo, selectedTipo]
            );
          }}
        />
        Permuta
        <br />
        <input
          type="checkbox"
          id="venta"
          name="tipo"
          value="Venta"
          checked={tipo.includes("Venta")}
          onChange={(e) => {
            const selectedTipo = e.target.value;
            setTipo((prevTipo) =>
              prevTipo.includes(selectedTipo)
                ? prevTipo.filter((tipo) => tipo !== selectedTipo)
                : [...prevTipo, selectedTipo]
            );
          }}
        />
        Venta
        <br />
        <br />

        <label htmlFor="producto">Vestuario o Calzado:</label>
        <select
          id="producto"
          value={producto}
          required
          onChange={(e) => setProducto(e.target.value)}
        >
          <option value="">Seleccione una opción</option>
          <option value="Vestuario">Vestuario</option>
          <option value="Calzado">Calzado</option>
        </select>
        <br />
        <br />

        <label htmlFor="cantidad">Cantidad de Prendas:</label>
        <br />
        <input
          type="radio"
          id="prenda1"
          name="cantidad"
          value="1"
          required
          checked={cantidad === "1"}
          onChange={(e) => setCantidad(e.target.value)}
        />
        1
        <br />
        <input
          type="radio"
          id="prenda2"
          name="cantidad"
          value="2"
          checked={cantidad === "2"}
          onChange={(e) => setCantidad(e.target.value)}
        />
        2
        <br />
        <input
          type="radio"
          id="prenda3"
          name="cantidad"
          value="3"
          checked={cantidad === "3"}
          onChange={(e) => setCantidad(e.target.value)}
        />
        3
        <br />
        <input
          type="radio"
          id="prenda4"
          name="cantidad"
          value="4"
          checked={cantidad === "4"}
          onChange={(e) => setCantidad(e.target.value)}
        />
        4
        <br />
        <input
          type="radio"
          id="prenda6"
          name="cantidad"
          value="6+"
          checked={cantidad === "6+"}
          onChange={(e) => setCantidad(e.target.value)}
        />
        6+
        <br />
        <br />

        <input type="submit" value="Enviar" />
        
      </form>
      <button id="exportar-json" onClick={handleExportJSON}>
          Exportar a JSON
        </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}

      <h2>Datos almacenados</h2>

      <table id="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Número de contacto</th>
            <th>Correo</th>
            <th>Permuta o Venta</th>
            <th>Vestuario o Calzado</th>
            <th>Cantidad de Prendas</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((cotizacion, index) => (
            <tr key={index}>
              <td>{cotizacion.nombre}</td>
              <td>{cotizacion.numero}</td>
              <td>{cotizacion.correo}</td>
              <td>{cotizacion.tipo.join(", ")}</td>
              <td>{cotizacion.producto}</td>
              <td>{cotizacion.cantidad}</td>
              <td>{cotizacion.fechaHora}</td>
              <td>
                <button onClick={() => handleDelete(index)}>Eliminar</button>
                <button onClick={() => handleEdit(index)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Formulario;