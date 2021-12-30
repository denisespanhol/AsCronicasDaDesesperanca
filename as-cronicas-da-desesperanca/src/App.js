import React from 'react';
import Provider from './context/Provider';
import ToRoutes from './ToRoutes';
import './App.css';

function App() {
  return (
    <Provider>
      <ToRoutes />
    </Provider>
  );
}

export default App;
