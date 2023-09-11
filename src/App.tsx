import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Mainrouter } from './router/Mainrouter';

function App() {
  return (
    <div className="App">
  <RouterProvider router={Mainrouter} />
    </div>
  );
}

export default App;
