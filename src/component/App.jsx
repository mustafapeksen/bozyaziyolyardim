import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

// Main application component
function App() {
  return (
    <>
      {/* Header component, displayed on every page */}
      <Header />
      {/* Outlet component renders the matched child route's element */}
      <Outlet />
      {/* Footer component, displayed on every page */}
      <Footer />
    </>
  );
}

export default App;
