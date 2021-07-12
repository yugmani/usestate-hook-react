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
      <p>
        It is{' '}
        <span className="odd-even"> {click % 2 === 0 ? 'Even' : 'Odd'}</span>.
      </p>
      <button onClick={() => setClick(click + 1)}>Click Me</button>
    </div>
  );
}

// we are using an arrow function inside setClick() that fetches the previous value of click and uses it to update it with the new value. 
// This form is useful in cases where it is necessary to perform data manipulations based on the value of the state variable. 
// Passing a function is also useful in cases where one of the older values from the stack is captured and changed instead of the most recent value.

export default Counter;
