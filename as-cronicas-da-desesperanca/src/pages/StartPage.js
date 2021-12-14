import React from 'react';
import { Link } from 'react-router-dom';
import "./StartPage.css";

export default function StartPage() {
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
              textDecoration="none"
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
            >
              SOBRE O AUTOR
            </button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <button
              type="button"
              className="designOthersButtons"
            >
              CONHEÇA O PROJETO
            </button>
          </Link>
        </section>
      </footer>
    </main>
  );
}
