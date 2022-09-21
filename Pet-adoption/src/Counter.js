// Throws some render error.

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="search-params">
      <h1>Count: {count}</h1>
      <button onClick={(e) => setCount(count + 1)}>Add</button>
      <button onClick={(e) => setCount(count - 1)}>Subtract</button>
    </div>
  );
};

export default Counter;
