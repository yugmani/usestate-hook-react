import React, { useState } from 'react';
import './style.css';

export default function App() {
  const click = useState('Yoog Grg');
  return (
    <div>
      <h1>Welcome {click}!</h1>
    </div>
  );
}
