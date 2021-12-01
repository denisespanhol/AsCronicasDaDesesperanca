import React from 'react';
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
      <footer className="footer toCentralizeFooter">
        <section className="toCentralizeButtonPrincipal">
          <button
            type="button"
            className="designButtonPrincipal"
          >
            IR PARA O SITE
          </button>
        </section>
        <section className="toCentralizeOthersButtons">
          <button
            type="button"
            className="designOthersButtons1"
          >
            SOBRE O AUTOR
          </button>
          <button
            type="button"
            className="designOthersButtons2"
          >
            CONHEÇA O PROJETO
          </button>
        </section>
      </footer>
    </main>
  );
}
