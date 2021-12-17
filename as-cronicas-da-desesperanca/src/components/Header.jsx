import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import solidFeather from '../images/feather-solid.svg';
import solidBook from '../images/book-open-solid.svg';
import solidComment from '../images/comments-solid.svg';
import solidCat from '../images/cat-solid.svg';
import './Header.css';

export default function Header() {
  const { toFixed } = useContext(AppContext);

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

  console.log(toFixed);

  return (
    <header style={theHeader}>
      <section className="toCentralizeTitleInHeader">
        <p className="asCronicasDaHeader">AS CRÔNICAS DA</p>
        <p className="desesperançaHeader">DESESPERANÇA</p>
      </section>
      <nav>
        <section className='divNav'>
          <img src={ solidBook } alt="writerIcon" width={ 30 } height={ 30 } className="icon"  />
          <p className='navLinks'>CAPÍTULOS</p>
        </section>
        <section className='divNav'>
          <img src={ solidCat } alt="writerIcon" width={ 30 } height={ 30 } className="icon" />
          <p className='navLinks'>SOBRE</p>
        </section>
        <section className='divNav'>
          <img src={ solidFeather } alt="writerIcon" width={ 30 } height={ 30 } className="icon" />
          <p className='navLinks'>AUTOR</p>
        </section>
        <section className='divNav'>
          <img src={ solidComment } alt="writerIcon" width={ 30 } height={ 30 } className="icon" />
          <p className='navLinks'>FEEDBACK</p>
        </section>
      </nav>
    </header>
  );
}
