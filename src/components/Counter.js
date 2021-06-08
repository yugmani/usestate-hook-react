import React, { useState } from 'react';

function Counter() {
  const [click, setClick] = useState(0);
  // using array destructuring here
  // to assign initial value 0
  // to click and a reference to the function
  // that updates click to setClick
  return (
    <div className="counter-box">
      <p>
        You clicked <span className="counter-num"> {click}</span> times
      </p>
      <button onClick={() => setClick(click + 1)}>Click Me</button>
    </div>
  );
}

export default Counter;
