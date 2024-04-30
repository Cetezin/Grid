import React from "react";

function UseCounter(initialValue = 0) {
  // increase, decrease, reset
  const [count, setCount] = React.useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const increaseBy100 = ()=> setCount(count + 100)
  const decreaseBy100 = ()=> setCount(count - 100)

  return {
    count,
    increment,
    decrement,
    reset,
    increaseBy100,
    decreaseBy100
  };
}

export default UseCounter
