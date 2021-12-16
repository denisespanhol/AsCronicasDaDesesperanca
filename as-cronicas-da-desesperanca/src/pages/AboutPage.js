import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <section className='aboutBackground'>
      <Header />
      <main className='toCentralizeReadingBox'>
        <section className='readingBox'>
          <section className='titleBox'>
            <p className='sobreOProjeto'>ESCREVER SOBRE A DISTOPIA DO HOJE</p>
          </section>
          <section className='textBox'>
            <p>
              Faz um tempo que estou preso no desenvolvimento deste meu primeiro original. Muitas ideias germinaram, cresceram e murcharam. E quanto mais o tempo passava, mais perdido me sentia na escrita-jardinagem.
            </p>
            <p>
              Porém, o que tem mantido fértil as palavras que depositarei neste site são os feedbacks de pessoas incríveis que depositaram seu tempo para ler e criar um diálogo com minhas palavras. Daí, senti essas palavras-plantas resistirem mais ao tempo e ao alento, sabe? E é por esse motivo que criei este site que você se encontra: com o objetivo de encontrar mais pessoas, e mais feedbacks!
            </p>
            <p>
              E escrever sobre as desesperanças do mundo é um tanto complicado, porque elas costumam sangrar bastante. Tenho tentado não me afetar, apesar de que é tão inútil quanto tentar não respirar. Os personagens que você vai conhecer refletem cada qual uma visão de desesperança diferente, neste mundo (que é o nosso) com regras distintas. No entanto, também tem esperança, tem alívio. E, como toda obra de literatura fantástica, tem aventura.
            </p>
            <p>
              Personagens, história e tudo o mais que encontrarem nos capítulos que depositarei aqui, em busca de um oráculo em comum, são pontes para que os leitores possam encontrar as desesperanças que vivemos com o coração e os olhos.
            </p>
            <p>
              Pretendo depositar metade do livro aqui, e espero que possamos trocar muito! Ansioso estou pela nossa troca! Muito obrigado! :)
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </section>
  );
}
