import React, { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

// No crece, no extiende y es mas extricto,
// no obstante igual se puede usar una interface
type CounterAction =
  | {
      type: "increaseBy";
      payload: { value: number };
    }
  | {
      type: "reset";
    };

// el reducer es una función pura,
// eso quiere decir que se puede resolver por si sola
// sin utilizar objetos o funciones externas
const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { counter, changes } = state;

  switch (action.type) {
    case "increaseBy":
      return {
        counter: counter + action.payload.value,
        previous: counter,
        changes: changes + 1,
      };
    case "reset":
      return {
        counter: 0,
        previous: 0,
        changes: 0,
      };

    default:
      return state;
  }

  return INITIAL_STATE;
};

export const CounterReducerComponent = () => {
  const [{ counter, previous, changes }, dispatch] = useReducer(
    counterReducer,
    INITIAL_STATE
  );

  const handleReset = () => {
    dispatch({
      type: "reset",
    });
  };

  const increaseBy = (value: number) => {
    dispatch({
      type: "increaseBy",
      payload: {
        value,
      },
    });
  };

  return (
    <>
      <h1>CounterReducerComponent: </h1>
      <h3>Counter: {counter}</h3>
      <h3>Previo: {previous}</h3>
      <h3>Cambios: {changes}</h3>
      <button onClick={() => increaseBy(1)}>+1</button>
      <button onClick={() => increaseBy(5)}>+5</button>
      <button onClick={() => increaseBy(10)}>+10</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
};
