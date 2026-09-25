//!it don't belong in the Restaurant Manager projects, its only for useReducer Educational Purpose

import { useReducer } from 'react';

type Action =
  { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'set', value: number }


function counterReducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return 0;

    case "set":
      return action.value;

    default:
      return state;
  }
};

export function Counter
  () {
  const [count, dispatch] = useReducer(counterReducer, 0);
  return (
    <div className='flex justify-center gap-5 flex-columns'>
      <button onClick={() => {
        dispatch({ type: "increment" });
      }}>
        increment
      </button >
      <button onClick={() => {
        dispatch({ type: "decrement" });
      }}>
        decrement
      </button >
      <button onClick={() => {
        dispatch({ type: "reset" });
      }}>
        reset
      </button >
      <button onClick={() => {
        dispatch({ type: "set", value: 15 })
      }}>
        value : 15
      </button>
      <p> Your count is: {count} </p>
    </div >
  );

}