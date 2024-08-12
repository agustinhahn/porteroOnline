import Departamento from "./components/Departamento";
import data from "./data.json";
import "./app.css";

function App() {
  return (
    <div className="contenedorGral">
      <h1 className="tituloGral">EDIFICIO ALEM 1946</h1>
      <div className="contenedorBotonesGral">
        {data.map((d, index) => {
          return <Departamento key={index} depto={d.departamento} />;
        })}
      </div>
    </div>
  );
}

export default App;
