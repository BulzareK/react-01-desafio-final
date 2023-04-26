import { useEffect, useState } from "react";

const MiApi = () => {
  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const fetchApiRickandMorty = async () => {
      const endpointPersonajes =
        "https://rickandmortyapi.com/api/character?page=" + pagina;
      try {
        const respuesta = await fetch(endpointPersonajes);
        const dataPersonajes = await respuesta.json();
        setPersonajes(dataPersonajes.results);

        console.log(dataPersonajes.results[4]);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchApiRickandMorty();
  }, [pagina]);

  const estilosTarjeta = {
    display: "inline-block",
    backgroundColor: "indigo",
    width: "180px",
    borderRadius: "5px",
    boxShadow: "2px 3px 8px black",
    margin: "10px",
  };

  const paginarAdelante = () => {
    if (pagina === 42) {
      setPagina(42);
    } else {
      setPagina(pagina + 1);
    }
  };

  const paginarAtras = () => {
    if (pagina <= 1) {
      setPagina(1);
    } else {
      setPagina(pagina - 1);
    }
  };

  const estilosInput = {
    borderRadius: "6px",
    fontSize: "19px",
    padding: "3px",
    margin: "10px",
    width: "50%",
    backgroundColor: "white",
    color: "black",
  };

  return (
    <div className="App">
      <input
        type="search"
        value={busqueda}
        style={estilosInput}
        placeholder="Busca por nombre"
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <div>
        <button className="botones" onClick={paginarAtras}>
          Ir hacia atrás
        </button>
        <button className="botones" onClick={paginarAdelante}>
          Ir hacia adelante
        </button>
        <br />
        {pagina}
      </div>
      {personajes ? (
        personajes
          .filter((personaje) => {
            return personaje.name
              .toLowerCase()
              .includes(busqueda.toLowerCase());
          })
          .sort((a, b) => {
            return a.name > b.name ? 1 : -1;
          })
          .map((personaje) => {
            return (
              <div key={personaje.id} style={estilosTarjeta}>
                <img src={personaje.image} height="180" />
                <br />
                <h3>{personaje.name}</h3>
                {personaje.status === "Alive" ? (
                  <h5>
                    <span className="status alive">Vivo 😀</span>
                  </h5>
                ) : (
                  <h5>
                    <span className="status dead">Muerto 💀 </span>
                  </h5>
                )}
              </div>
            );
          })
      ) : (
        <h2> Aún cargando...</h2>
      )}
    </div>
  );
};

export default MiApi;
