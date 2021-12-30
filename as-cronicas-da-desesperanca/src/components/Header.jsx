import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import solidFeather from '../images/feather-solid.svg';
import solidBook from '../images/book-open-solid.svg';
import solidComment from '../images/comments-solid.svg';
import solidCat from '../images/cat-solid.svg';
import './Header.css';

export default function Header() {
  const { toFixed, setToFixed } = useContext(AppContext);

  let theHeader = {
    backgroundColor: "rgba(18, 17, 17, 1)",
    color: "whitesmoke",
  };

  if (toFixed && window.innerWidth > 1049) {
    theHeader = {
      backgroundColor: "rgba(18, 17, 17, 1)",
      color: "whitesmoke",
      position: "fixed",
      width: "100%",
    }
  }

  function handleChapterClick() {
    setToFixed(false);
  }

  return (
    <header style={theHeader}>
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
            onClick={ handleChapterClick }
          >
            <p className='navLinks'>SOBRE</p>
          </Link>
        </section>
        <section className='divNav'>
          <img src={ solidFeather } alt="writerIcon" width={ 30 } height={ 30 } className="icon" />
          <Link
            to='/author'
            style={{ textDecoration: 'none' }}
            onClick={ handleChapterClick }
          >
            <p className='navLinks'>AUTOR</p>
          </Link>
        </section>
        <section className='divNav'>
          <img src={ solidComment } alt="writerIcon" width={ 30 } height={ 30 } className="icon" />
          <Link
            to='/feedback'
            style={{ textDecoration: 'none' }}
            onClick={ handleChapterClick }
          >
            <p className='navLinks'>FEEDBACK</p>
          </Link>
        </section>
      </nav>
    </header>
  );
}
