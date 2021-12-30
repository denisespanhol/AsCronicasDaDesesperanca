import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import divisorImg from '../images/divider-4715969.png';
import './Feedback.css';

export default function Feedback() {
  return (
    <section className='feedbackBackground'>
      <Header />
      <main className='toCentralizeReadingFeedbackBox'>
        <section className='readingFeedbackBox'>
          <section className='titleFeedbackBox'>
            <p className='feedbackTitle'>ME CONTA O QUE ACHOU!</p>
          </section>
          <form className='textFeedbackBox'>
            <img src={ divisorImg } alt='divisor' className='divisorImgTop' />
            <label htmlFor='theName'>
              1 - Nome ou apelido
              <input
                id='theName'
                type='text'
                placeholder='Insira como deseja se identificar'
              />
            </label>
            <label htmlFor='email'>
              2 - E-mail
              <input
                id='email'
                type='email'
                placeholder='ex: pietro_hgatim@gmail.com'
              />
            </label>
            <label htmlFor='chapter'>
              3 - Escolha o capítulo
              <select
                id='chapter'
                placeholder='Selecione o capítulo'
              >
                <option>Prólogo</option>
                <option>Capítulo I</option>
              </select>
            </label>
          </form>
        </section>
      </main>
      <Footer />
    </section>
  );
}
