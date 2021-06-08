import React, { useState } from 'react';
import './style.css';
import Welcome from './components/Welcome';
import Counter from './components/Counter';

export default function App() {
  return (
    <div>
      <h1>ReactJS | useState Hook</h1>
      <Welcome />
      <Counter />
    </div>
  );
}
