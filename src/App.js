import React from 'react';
import { useState } from 'react';

function App() {
  let [ counter, changeCounter ] = useState(12);
  return (
    <h1>{counter}</h1>
  )
};

export default App;