import React from 'react';
import Provider from './context/Provider';
import toRoutes from './toRoutes';
import './App.css';

function App() {
  return (
    <Provider>
      <toRoutes />
    </Provider>
  );
}

export default App;
