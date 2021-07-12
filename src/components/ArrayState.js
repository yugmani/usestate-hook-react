import React, { useState } from 'react';

function ArrayState() {
  const [click, setClick] = useState([]);

  // State variables can be arrays too.
  // This is especially useful when one needs to deal with multiple values without finding the need to declare multiple state variables using useState().
  const addNumber = () => {
    setClick([
      ...click,
      {
        id: click.length,
        value: Math.random() * 10
      }
    ]);
  };

  // useState() works differently from the setState() function (which is used to change the value of state variables in class-based components) when it comes to using arrays.
  // setClick() does not merge new values with the existing ones on being called, it simply overwrites them with the new value. 
  // Hence, it is necessary to find a workaround for appending the existing values, which is done inside the addNumber() internal function with the help of the spread operator. 
  // The function creates a new variable with a certain id and value and adds it to the existing array (whose values are copied into the function using the spread operator). 

  return (
    <div className="counter-box">
      <h2>State of arrays: Generate random Numbers</h2>
      <ul>
        {click.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Click me</button>
    </div>
  );
}

export default ArrayState;
