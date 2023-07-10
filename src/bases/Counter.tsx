import React, { useState } from "react";

interface Props {
  initialValue?: number;
}

// También puedo poner implicitamente el valor del argumento,
// sin necesidad de agregar una interface
// Ejemplo:
// export const Counter = ({ initialValue = 0 }:) => {
// en el caso de poner "initialValue:number = 0" no sirve, porque es una desestructuración
// y en desestructuración los : significa que renombra el argumento
// export const Counter = ({ initialValue:otroNombre = 0 }: Props) => {

export const Counter = ({ initialValue = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => {
    setCounter(counter + 1);
    //setCounter(counter++) esto no se puede hacer
    // otra forma
    // setCounter( prev => prev + 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
