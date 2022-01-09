import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Login } from '../pages/index';

function App() {
  return (
    <div>
    <Routes>
      <Route path = "/Login" element = {<Login />} />
    </Routes>
    </div>
  );
}

export default App;