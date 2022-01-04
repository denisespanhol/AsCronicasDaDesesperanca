import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import divisorImg from '../images/divider-4715969.png';
import './Feedback.css';

export default function Feedback() {
  const { disableSubmit, setDisableSubmit,
    inputsValues, setInputsValues } = useContext(AppContext);

  function thanks() {
    window.alert('Feedback enviado! Muito obrigado!');
  }

  function handleChangeName({ target: { value, name }}) {
    setInputsValues((inputsValues) => ({
      ...inputsValues,
      [name]: value
    }));

    if (inputsValues.name.length > 2) {
      setDisableSubmit(false);
    }
    if (inputsValues.name.length <= 2) {
      setDisableSubmit(true);
    }
  }

  return (
    <section className='feedbackBackground'>
      <Header />
      <main className='toCentralizeReadingFeedbackBox'>
        <section className='readingFeedbackBox'>
          <section className='titleFeedbackBox'>
            <p className='feedbackTitle'>ME CONTA O QUE ACHOU!</p>
          </section>
          <form className='textFeedbackBox' action='mailto:denisgfespanhol@gmail.com' method='post'>
            <img src={ divisorImg } alt='divisor' className='divisorImgTop' />
            <label htmlFor='name'>
              1 - Nome ou apelido
              <input
                id='name'
                name='name'
                type='text'
                placeholder='Insira como deseja se identificar'
                onChange={ handleChangeName }
              />
            </label>
            <label htmlFor='email'>
              2 - E-mail
              <input
                id='email'
                name='email'
                type='email'
                placeholder='ex: pietro_hgatim@gmail.com'
                onChange={ handleChangeName }
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
              disabled={ disableSubmit }
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
