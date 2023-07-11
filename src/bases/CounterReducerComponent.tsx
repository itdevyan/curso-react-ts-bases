import React, { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 10,
  previous: 20,
  changes: 30,
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
  switch (action.type) {
    case "increaseBy":
      break;
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
  const [{ counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleClick = () => {
    dispatch({
      type: "reset",
    });
  };

  return (
    <>
      <h1>CounterReducerComponent: {counter}</h1>
      <button onClick={handleClick}>reset</button>
    </>
  );
};
