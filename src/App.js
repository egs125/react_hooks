import React, { Component, useState } from 'react';
import './App.css';

const useInput = (initialValue) => {
  const [ value, setValue ] = useState(initialValue);
  const onChange = e => {
    console.log(e.target);
  }
  return { value, onChange }
};

const App = () => {
  const name = useInput("Mr."); 
  return (
    <div>
      <h1>Hello</h1>
      <input placeholder="Name" {...name}/>
    </div>
  )
}

export default App;