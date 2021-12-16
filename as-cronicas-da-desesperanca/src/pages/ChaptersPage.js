import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import testImage from '../images/full-moon-4824456_1280.webp';
import './ChaptersPage.css';

export default function ChaptersPage() {
  return (
    <section className='chapterBackground'>
      <Header />
      <main>
        <section className='toCentralizeChapterBox'>
          <p className='chapterNumber'>PRÓLOGO</p>
          <p className='chapterTitle'>Uma Luz Verde Num Céu de Maio</p>
          <section className='chapterBox'>
            <img src={ testImage } alt='teste' className='coverImage' />
          </section>
        </section>
        <section className='toCentralizeChapterBox'>
          <p className='chapterNumber'>CAPÍTULO I</p>
          <p className='chapterTitle'>Sr. Santos</p>
          <section className='chapterBox'>
            <img src={ testImage } alt='teste' className='coverImage' />
          </section>
          <section className='toCentralizeChapterBox'>
          <p className='chapterNumber'>CAPÍTULO II</p>
          <p className='chapterTitle'>Ontem</p>
          <section className='chapterBox'>
            <img src={ testImage } alt='teste' className='coverImage' />
          </section>
        </section>
        </section>
      </main>
      <Footer />
    </section>
  );
}
