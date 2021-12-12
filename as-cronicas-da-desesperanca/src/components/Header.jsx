import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header>
      <section className="toCentralizeTitleInHeader">
        <p className="asCronicasDaHeader">AS CRÔNICAS DA</p>
        <p className="desesperançaHeader">DESESPERANÇA</p>
      </section>
      <nav>
        <p className='navLinks'>CAPÍTULOS</p>
        <p className='navLinks'>AUTOR</p>
        <p className='navLinks'>SOBRE</p>
        <p className='navLinks'>FEEDBACK</p>
      </nav>
    </header>
  );
}
