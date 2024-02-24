import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Counter Test</h2>
      <div className="counter">
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
          Decrease
        </button>
        <span data-testid="count">{count}</span>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    </>
  );
};

export default Counter;
