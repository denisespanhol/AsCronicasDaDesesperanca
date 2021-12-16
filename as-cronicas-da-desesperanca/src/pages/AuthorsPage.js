import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import photoDenis from '../images/Denis2.png';
import './AuthorsPage.css';

export default function AuthorsPage() {
  return (
    <section className='authorBackground'>
      <Header />
      <main className='toCentralizeReadingAuthorBox'>
        <section className='readingAuthorBox'>
          <section className='titleAuthorBox'>
            <p className='authorTitle'>SOBRE O AUTOR</p>
          </section>
          <section className='textAuthorBox'>
            <section className='authorBoxDescription'>
              <img src={ photoDenis } alt='authorPhoto' className='authorPhoto'/>
              <section>
                <p className='textDescription'><strong>Idade:</strong> 29.</p>
                <p className='textDescription'><strong>Signo Solar:</strong> Câncer.</p>
                <p className='textDescription'><strong>Gosta de:</strong> Açaí com morango, RPG's, literatura fantástica, programação, chuvinha e batata doce.</p>
                <p className='textDescription'><strong>Não gosta de:</strong> Beterraba. :S</p>
              </section>
            </section>
            <p>
              Denis Espanhol é autor de contos, peças de teatro e de um livro infantil, e ainda se encontra no desafio de finalizar seu primeiro romance (o que é um dos motivos para este site existir).
            </p>
            <p>
              Pedagogo e artista, também está estudando desenvolvimento web, enquanto ministra aulas de robótica para o fundamental I, no Núcleo de Educação Integrada da Fundação Romi, em Santa Bárbara D'Oeste, onde reside.
            </p>
            <p className='toFinalSpace'>
              Acredita no poder da arte e da educação, mas principalmente na força de conseguir alcançar as pessoas através de sua escrita.
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </section>
  );
}
