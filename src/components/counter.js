import React from "react";
import { useObserver } from "mobx-react";
import useStore from "../useStore";

const Counter = () => {
  const { counter } = useStore();

  const increase = () => {
    counter.increase();
  };

  const decrease = () => {
    counter.decrease();
  };

  return useObserver(() => (
    <useObserver>
      <h1>{counter.number}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </useObserver>
  ));
};

export default Counter;
