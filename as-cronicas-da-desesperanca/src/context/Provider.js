import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [toFixed, setToFixed] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [inputsValues, setInputsValues] = useState({
    nameInput: '',
    email: '',
    selectedChapter: 'Selecione o capítulo',
    whatsYouLiked: '',
    whatsYouDontLiked: ''
  });

  const state = {
    toFixed,
    setToFixed,
    disableSubmit,
    setDisableSubmit,
    inputsValues,
    setInputsValues
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
