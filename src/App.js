import React, { useState } from "react";

function App () {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="cont">
      <h2>You've clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}><h2>Click me</h2></button>
    </div>
  );
}

export default App