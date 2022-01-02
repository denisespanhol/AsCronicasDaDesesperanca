import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import divisorImg from '../images/divider-4715969.png';
import './Feedback.css';

export default function Feedback() {
  function thanks() {
    window.alert('Feedback enviado! Muito obrigado!');
  }

  return (
    <section className='feedbackBackground'>
      <Header />
      <main className='toCentralizeReadingFeedbackBox'>
        <section className='readingFeedbackBox'>
          <section className='titleFeedbackBox'>
            <p className='feedbackTitle'>ME CONTA O QUE ACHOU!</p>
          </section>
          <form className='textFeedbackBox' action='https://api.staticforms.xyz/submit' method='post'>
            <input type="hidden" name="accessKey" value="dc2bd44b-3e15-4b72-a236-a113a0b8b91b" />
            <input type="hidden" name="redirectTo" value="http://ascronicasdadesesperanca.com.br/feedback"></input>
            <img src={ divisorImg } alt='divisor' className='divisorImgTop' />
            <label htmlFor='name'>
              1 - Nome ou apelido
              <input
                id='name'
                name='name'
                type='text'
                placeholder='Insira como deseja se identificar'
              />
            </label>
            <label htmlFor='email'>
              2 - E-mail
              <input
                id='email'
                name='email'
                type='email'
                placeholder='ex: pietro_hgatim@gmail.com'
              />
            </label>
            <label htmlFor='$chapter'>
              3 - Escolha o capítulo
              <select
                id='$chapter'
                name='$chapter'
                placeholder='Selecione o capítulo'
              >
                <option disabled selected>Selecione o capítulo</option>
                <option>Prólogo</option>
              </select>
            </label>
            <label htmlFor='$toLike'>
              4 - Me fala o que curtiu!
              <textarea
                id='$toLike'
                name='$toLike'
                cols='50'
                rows='5'
                placeholder='Agradeço desde já!'
              />
            </label>
            <label htmlFor='$toNotLike'>
              5 - E o que não curtiu!
              <textarea
                id='$toNotLike'
                name='$toNotLike'
                cols='50'
                rows='5'
                placeholder='Agradeço desde já!'
              />
            </label>
            <label htmlFor='$portuguese'>
              6 - Algum erro de português?
              <textarea
                id='$portuguese'
                name='$portuguese'
                cols='50'
                rows='5'
                placeholder='Agradeço desde já!'
              />
            </label>
            <img src={ divisorImg } alt='divisor' className='divisorImgBot' />
            <button
              type='submit'
              className='designFeedbackButtons'
              onClick={ thanks }
            >
              Enviar!
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </section>
  );
}
