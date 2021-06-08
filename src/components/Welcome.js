import React, { useState } from 'react';

export default function Welcome() {
  const click = useState('Yoog Grg');
  return (
    <div>
      <h2>
        Welcome <span className="user-main"> {click}</span>!
      </h2>
    </div>
  );
}
