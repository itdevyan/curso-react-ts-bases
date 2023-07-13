// el reducer es una función pura,
// eso quiere decir que se puede resolver por si sola

import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

// sin utilizar objetos o funciones externas
export const counterReducer = (
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
};
