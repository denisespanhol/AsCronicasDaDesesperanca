import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import solidInstagram from '../images/instagram-square-brands.svg';
import './Footer.css';

export default function Footer() {
  const { toFixed } = useContext(AppContext);

  let theFooter = {
    display: "flex",
    justifyContent: "center",
    marginTop: "auto",
    backgroundColor: "rgb(18, 17, 17, 1)",
  };

  if (toFixed) {
    theFooter = {
      display: "flex",
      justifyContent: "center",
      marginTop: "auto",
      backgroundColor: "rgb(18, 17, 17, 1)",
      position: "fixed",
      bottom: "0",
      left: "0",
      width: "100%",
    }
  }

  return (
    <footer className='toCentralizeFooter2' style={theFooter}>
      <p className='eODiaDeCaimFooter'>E o Dia de Caim | Livro I</p>
      <nav className='instaIcon'>
        <img src={ solidInstagram } alt='instaIcon' className='iconSize' />
      </nav>
      <p className='copyright'>Copyright © 2022 | Denis Espanhol</p>
    </footer>
  );
}
