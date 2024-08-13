import Departamento from "./components/Departamento";
import "./app.css";
import { DataContext } from "./context/Contexto";
import { useContext, useEffect } from "react";

function App() {
  const {data, fetchData} = useContext(DataContext)

  
  useEffect(()=>{
    fetchData()
  },[])

  const mostrar = () =>{
    console.log(data)
  }

  return (
    <div className="contenedorGral">
      <h1 className="tituloGral">ALEM 1946</h1>
      <div className="contenedorBotonesGral">
        {data.map((d, index) => {
          return <Departamento key={index} name={d.username} userId={d.id} />;
        })}
      </div>
      <button onClick={mostrar} className="botonmostrar">APRETARR</button>
    </div>
  );
}

export default App;
