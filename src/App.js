import React, { useState } from 'react';
import './style.css';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import ArrayState from './components/ArrayState';
import ObjectState from './components/ObjectState';

export default function App() {
  return (
    <div className="app">
      <h1>ReactJS | useState Hook</h1>
      <Welcome />
      <Counter />
      <ArrayState />
      <ObjectState />
    </div>
  );
}
