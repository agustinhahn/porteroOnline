import "./departamento.css"

const Departamento = ({ depto }) => {
  return (
    <>
      <button className="contenedorBotones">
        <h1 className="tituloBotones">{depto}</h1>
      </button>
    </>
  );
};

export default Departamento;
