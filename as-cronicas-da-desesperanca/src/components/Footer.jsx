import React from 'react';
import solidInstagram from '../images/instagram-square-brands.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='toCentralizeFooter2 theFooter'>
      <p className='eODiaDeCaimFooter'>E o Dia de Caim | Livro I</p>
      <nav className='instaIcon'>
        <img src={ solidInstagram } alt='instaIcon' className='iconSize' />
      </nav>
      <p className='copyright'>Copyright © 2022 | Denis Espanhol</p>
    </footer>
  );
}
