import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [toFixed, setToFixed] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [nameValue, setNameValue] = useState('');

  const state = {
    toFixed,
    setToFixed,
    disableSubmit,
    setDisableSubmit,
    nameValue,
    setNameValue
  }

  return (
    <AppContext.Provider value={ state }>
      { children }
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
