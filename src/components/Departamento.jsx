import "./departamento.css"
import { DataContext } from "../context/Contexto";
import { useContext, useState } from "react";

const Departamento = ({name, userId}) => {

  const {putData} = useContext(DataContext)

  const handleClick = () =>{
    putData(userId)
  }

  return (
    <>
      <button className="contenedorBotones" onClick={handleClick}>
        <h1 className="tituloBotones">{name}</h1>
      </button>
    </>
  );
};

export default Departamento;
