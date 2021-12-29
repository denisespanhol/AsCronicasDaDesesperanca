import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import testImage from '../images/full-moon-4824456_1280.webp';
import comingSoon from '../images/EM-BREVE.png';
import './ChaptersPage.css';


export default function ChaptersPage() {
  const { setToFixed } = useContext(AppContext)

  useEffect(() => {
    setToFixed(true);
  }, [])

  function handleChapterClick() {
    setToFixed(false);
  }

  return (
    <section className='chapterBackground'>
      <Header />
      <main className='mainBox'>
        <section className='toCentralizeChapterBox'>
          <p className='chapterNumber'>PRÓLOGO</p>
          <p className='chapterTitle'>Uma Luz Verde Num Céu de Maio</p>
          <section className='chapterBox'>
            <Link to="/chapters/prologue">
              <img src={ testImage } alt='teste' className='coverImage' onClick={ handleChapterClick } />
            </Link>
          </section>
        </section>
        <section className='toCentralizeChapterBox'>
          <p className='chapterNumber'>CAPÍTULO I</p>
          <p className='chapterTitle'>Sr. Santos</p>
          <section className='chapterBox'>
            <img src={ comingSoon } alt='teste' className='coverImage' />
          </section>
        </section>
        <section className='toCentralizeChapterBox'>
          <p className='chapterNumber'>CAPÍTULO II</p>
          <p className='chapterTitle'>Ontem</p>
          <section className='chapterBox'>
            <img src={ comingSoon } alt='teste' className='coverImage' />
          </section>
        </section>
        <section className='toCentralizeChapterBox'>
          <p className='chapterNumber'>CAPÍTULO III</p>
          <p className='chapterTitle'>Papílio</p>
          <section className='chapterBox'>
            <img src={ comingSoon } alt='teste' className='coverImage' />
          </section>
        </section>
      </main>
      <Footer />
    </section>
  );
}
