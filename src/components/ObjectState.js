import React, { useState } from 'react';

function ObjectState() {

  // If one needs to deal with multiple types of data at once, the best way to go for is with an object. 
  // While the same work can be done with separate state variables, objects make work much more efficient in the long run (also one can make do with fewer useState() declarations). 
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [submit, submitted] = useState(false);

  const printValues = e => {
    e.preventDefault();
    setForm({
      username: data.username,
      password: data.password
    });
    submitted(true);
  };

  const updateField = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

//  the ‘data’ variable is used to temporarily store the entered values for the username and password fields. 
// The spread operator is used again, to copy the existing value of the fields and update it accordingly. 
// The ‘form’ variable is used to store the value of the values submitted through the form used in the component – which is then displayed below the form.

// Note that the spread operator isn’t used with setForm() while updating the ‘form’ state variable for the simple reason that one does not need to be bothered about the previously submitted values of the username and password fields.

  return (
    <div>
      <form onSubmit={printValues}>
        <label>
          Username:
          <input value={data.username} name="username" onChange={updateField} />
        </label>
        <br />
        <label>
          Password:
          <input
            value={data.password}
            name="password"
            type="password"
            onChange={updateField}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <p>{submit ? form.username : null}</p>
      <p>{submit ? form.password : null}</p>
    </div>
  );
}

export default ObjectState;
