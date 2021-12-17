import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import "./StartPage.css";

export default function StartPage() {
  const { setToFixed } = useContext(AppContext);

  function handleChapterClick() {
    setToFixed(true);
  }

  function handleAuthorClick() {
    setToFixed(false);
  }

  function handleAboutClick() {
    setToFixed(false);
  }

  return (
    <main>
      <section className="toCentralizeTitle">
        <p className="asCronicasDa">AS CRÔNICAS DA</p>
        <p className="desesperança">DESESPERANÇA</p>
        <p className="eODiaDeCaim">E O DIA DE CAIM</p>
        <p className="livroI">LIVRO I</p>
      </section>
      <footer className="startFooter toCentralizeFooter">
        <section className="toCentralizeButtonPrincipal">
          <Link to="/Chapters" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              className="designButtonPrincipal"
              onClick={ handleChapterClick }
            >
              IR PARA O SITE
            </button>
          </Link>
        </section>
        <section className="toCentralizeOthersButtons">
          <Link to="/author" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              className="designOthersButtons"
              onClick={ handleAuthorClick }
            >
              SOBRE O AUTOR
            </button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              className="designOthersButtons"
              onClick={ handleAboutClick }
            >
              CONHEÇA O PROJETO
            </button>
          </Link>
        </section>
      </footer>
    </main>
  );
}
