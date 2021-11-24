import React from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function Provider({ children }) {
  return (
    <AppContext.Provider >
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
