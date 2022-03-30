import React from 'react';
import { Link } from 'react-router-dom';
import solidFeather from '../images/feather-solid.svg';
import solidBook from '../images/book-open-solid.svg';
import solidComment from '../images/comments-solid.svg';
import solidCat from '../images/cat-solid.svg';
import './Header.css';

export default function Header() {
  return (
    <header>
      <section className="toCentralizeTitleInHeader">
        <Link
          to='/'
          style={{ textDecoration: 'none' }}
        >
          <p className="asCronicasDaHeader">AS CRÔNICAS DA</p>
          <p className="desesperançaHeader">DESESPERANÇA</p>
        </Link>
      </section>
      <nav>
        <section className='divNav'>
          <img src={ solidBook } alt="writerIcon" width={ 30 } height={ 30 } className="icon"  />
          <Link to='/chapters' style={{ textDecoration: 'none' }}>
            <p className='navLinks'>CAPÍTULOS</p>
          </Link>
        </section>
        <section className='divNav'>
          <img src={ solidCat } alt="writerIcon" width={ 30 } height={ 30 } className="icon" />
          <Link
            to='/about'
            style={{ textDecoration: 'none' }}
          >
            <p className='navLinks'>SOBRE</p>
          </Link>
        </section>
        <section className='divNav'>
          <img src={ solidFeather } alt="writerIcon" width={ 30 } height={ 30 } className="icon" />
          <Link
            to='/author'
            style={{ textDecoration: 'none' }}
          >
            <p className='navLinks'>AUTOR</p>
          </Link>
        </section>
        <section className='divNav'>
          <img src={ solidComment } alt="writerIcon" width={ 30 } height={ 30 } className="icon" />
          <Link
            to='/feedback'
            style={{ textDecoration: 'none' }}
          >
            <p className='navLinks'>FEEDBACK</p>
          </Link>
        </section>
      </nav>
    </header>
  );
}
