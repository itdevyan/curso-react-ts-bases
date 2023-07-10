import React, { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 0 }: Props) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (value: number) => {
    setCounterState(({ counter, clicks }) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }));

    //  Otra forma
    // setCounterState({
    //   counter: counterState.counter + value,
    //   clicks: counterState.clicks + 1,
    // });
  };

  // esto se puede desestructurar directamente en el useState
  // const { counter, clicks } = counterState;

  return (
    <>
      {/* No se puede imprimir directamente un objeto */}
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
