import React from "react";
import { Helmet } from "react-helmet-async";

function ViewCount({ count }) {
  return (
    <section>
      <h2>{count}</h2>
    </section>
  );
}

function ClickController({ setCount }) {
  return (
    <div className="counter">
      <button onClick={() => setCount((prev) => prev - 1)}>decrase by 1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prev) => prev + 1)}>incrase by 1</button>
    </div>
  );
}

function CounterButton() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <>
        <Helmet title={`count is ${count}`} />
        <ViewCount count={count} />
        <ClickController setCount={setCount} count={count} />
      </>
    </div>
  );
}

function Counter() {
  return (
    <div>
      <h2>Counter</h2>
      <CounterButton />
    </div>
  );
}

export default Counter;
