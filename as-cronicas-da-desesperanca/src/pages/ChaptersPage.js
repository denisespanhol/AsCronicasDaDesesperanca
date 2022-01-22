import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import prologueCover from '../images/prologueCover.jpg';
import comingSoon from '../images/EM-BREVE.png';
import './ChaptersPage.css';


export default function ChaptersPage() {
  return (
    <section className='chapterBackground'>
      <Header />
      <main className='mainBox'>
        <section className='forThreeBoxes'>
          <section className='toCentralizeChapterBox'>
            <p className='chapterNumber'>PRÓLOGO</p>
            <p className='chapterTitle'>Uma Luz Verde Num Céu de Maio</p>
            <section className='chapterBox'>
              <Link to="/chapters/prologue">
                <img src={ prologueCover } alt='capa' className='coverImage' />
              </Link>
            </section>
          </section>
          <section className='toCentralizeChapterBox'>
            <p className='chapterNumber'>CAPÍTULO I</p>
            <p className='chapterTitle'>Sr. Santos</p>
            <section className='chapterBox'>
              <img src={ comingSoon } alt='capa' className='coverComingSoonImage' />
            </section>
          </section>
          <section className='toCentralizeChapterBox'>
            <p className='chapterNumber'>CAPÍTULO II</p>
            <p className='chapterTitle'>Ontem</p>
            <section className='chapterBox'>
              <img src={ comingSoon } alt='capa' className='coverComingSoonImage' />
            </section>
          </section>
        </section>
        <section className='forThreeBoxes'>
          <section className='toCentralizeChapterBox'>
            <p className='chapterNumber'>CAPÍTULO III</p>
            <p className='chapterTitle'>??????</p>
            <section className='chapterBox'>
              <img src={ comingSoon } alt='capa' className='coverComingSoonImage' />
            </section>
          </section>
          <section className='toCentralizeChapterBox'>
            <p className='chapterNumber'>CAPÍTULO IV</p>
            <p className='chapterTitle'>??????</p>
            <section className='chapterBox'>
              <img src={ comingSoon } alt='capa' className='coverComingSoonImage' />
            </section>
          </section>
          <section className='toCentralizeChapterBox'>
            <p className='chapterNumber'>CAPÍTULO V</p>
            <p className='chapterTitle'>??????</p>
            <section className='chapterBox'>
              <img src={ comingSoon } alt='capa' className='coverComingSoonImage' />
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </section>
  );
}
