import React, { useState } from 'react';
import './style.css';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ArrayState from './components/ArrayState';

export default function App() {
  return (
    <div className="app">
      <h1>ReactJS | useState Hook</h1>
      <Welcome />
      <Counter />
      <ArrayState />
    </div>
  );
}
