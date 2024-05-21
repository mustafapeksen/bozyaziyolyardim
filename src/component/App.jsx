import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
