import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import divisorImg from '../images/divider-4715969.png';
import './Feedback.css';

export default function Feedback() {
  const { disableSubmit, setDisableSubmit,
    inputsValues, setInputsValues } = useContext(AppContext);
  const { nameInput, email, selectedChapter,
    whatsYouLiked, whatsYouDontLiked } = inputsValues;
  const toCheckEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const likedCharactersNumbers = whatsYouLiked.length;
  const notLikedCharactersNumbers = whatsYouDontLiked.length;

  useEffect(() => {
    if (nameInput.length > 2 && toCheckEmail.test(email) === true && selectedChapter !== 'Selecione o capítulo' && whatsYouLiked.length >= 30 && whatsYouDontLiked.length >= 30) {
      setDisableSubmit(false);
    }
    if (nameInput.length <= 2 || toCheckEmail.test(email) === false || selectedChapter === 'Selecione o capítulo' || whatsYouLiked.length < 30 || whatsYouDontLiked.length < 30) {
      setDisableSubmit(true);
    }
  })

  function thanks() {
    window.alert('Feedback enviado! Muito obrigado!');
  }

  function handleChange({ target: { value, name }}) {
    setInputsValues((inputsValues) => ({
      ...inputsValues,
      [name]: value
    }));
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
            <span style={{color:'rgb(94, 30, 30)'}} className='requiredFields'>* Campos obrigatórios</span>
            <label htmlFor='name'>
              <div className='feedQuestion'>
                {`1 - Nome ou apelido `}
                <span style={{color:'rgb(94, 30, 30)'}}>*</span>
              </div>
              <input
                id='name'
                name='nameInput'
                type='text'
                placeholder='Insira como deseja se identificar'
                onChange={ handleChange }
                className={ nameInput.length <= 2 ? 'borderInputRed' : 'borderInputGreen'}
              />
            </label>
            <label htmlFor='email'>
              <div className='feedQuestion'>
                {`2 - E-mail `}
                <span style={{color:'rgb(94, 30, 30)'}}>*</span>
              </div>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='ex: pietro_hgatim@gmail.com'
                onChange={ handleChange }
                className={ toCheckEmail.test(email) === false ? 'borderInputRed' : 'borderInputGreen'}
              />
            </label>
            <label htmlFor='$chapter'>
              <div className='feedQuestion'>
                {`3 - Escolha o capítulo `}
                <span style={{color:'rgb(94, 30, 30)'}}>*</span>
              </div>
              <select
                id='$chapter'
                name='selectedChapter'
                placeholder='Selecione o capítulo'
                onChange={ handleChange }
                defaultValue="selected"
              >
                <option disabled value="selected">Selecione o capítulo</option>
                <option value="prologue">Prólogo</option>
              </select>
            </label>
            <label htmlFor='$toLike'>
              <div className='feedQuestion'>
                {`4 - Me fala o que curtiu! `}
                <span style={{color:'rgb(94, 30, 30)'}}>*</span>
              </div>
              <textarea
                id='$toLike'
                name='whatsYouLiked'
                cols='50'
                rows='5'
                placeholder='Agradeço desde já! (min: 30 / máx: 500)'
                maxLength="500"
                minLength="30"
                onChange={ handleChange }
                className={ whatsYouLiked.length < 30 ? 'borderInputRed' : 'borderInputGreen'}
              />
              <span className='lengthControl'>{`${likedCharactersNumbers}/500`}</span>
            </label>
            <label htmlFor='$toNotLike'>
              <div className='feedQuestion'>
                {`5 - E o que não curtiu! `}
                <span style={{color:'rgb(94, 30, 30)'}}>*</span>
              </div>
              <textarea
                id='$toNotLike'
                name='whatsYouDontLiked'
                cols='50'
                rows='5'
                placeholder='Agradeço desde já! (min: 30 / máx: 500)'
                maxLength="500"
                minLength="30"
                onChange={ handleChange }
                className={ whatsYouDontLiked.length < 30 ? 'borderInputRed' : 'borderInputGreen'}
              />
              <span className='lengthControl'>{`${notLikedCharactersNumbers}/500`}</span>
            </label>
            <label htmlFor='$portuguese'>
                <div className='feedQuestion'>
                  6 - Algum erro de português?
                </div>
              <textarea
                id='$portuguese'
                name='$portuguese'
                cols='50'
                rows='5'
                placeholder='Agradeço desde já!'
                className='borderInputGreen'
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
