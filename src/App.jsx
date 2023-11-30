// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/UI/Header';
import React from 'react';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;