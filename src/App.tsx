import React, { useState } from 'react';

const App: React.FC = () => {

  const [count, setCount] = useState(10);

  return (
    <div className="container">
      <h1>TypeScript</h1>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
