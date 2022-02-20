import React from 'react';
import solidInstagram from '../images/InstaDesesperanca.png';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='toCentralizeFooter'>
      <p className='eODiaDeCaimFooter'>E o Dia de Caim | Livro I</p>
      <nav className='instaIcon'>
        <a href='https://www.instagram.com/ascronicasdadesesperanca/' target="_blank" rel="noreferrer">
          <img src={ solidInstagram } alt='instaIcon' className='iconSize' />
        </a>
      </nav>
      <p className='copyright'>Copyright © 2022 | Denis Espanhol</p>
    </footer>
  );
}
