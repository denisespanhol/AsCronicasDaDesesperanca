import React from 'react';
import Provider from './context/Provider';
import ToRoutes from './ToRoutes';
import './App.css';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Provider>
      <ScrollToTop />
      <ToRoutes />
    </Provider>
  );
}

export default App;
