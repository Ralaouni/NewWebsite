import React from 'react'
import { useState } from 'react';
import { Feature } from '../../components';
import './whatGPT3.css'

const WhatGPT3 = () => {

  const[francais,setFrancais] = useState(true)
  const[english,setEnglish] = useState(false)
  const[deutsh,setDeutsh] = useState(false)

  const fr = () => {
    setFrancais(true)
    setEnglish(false)
    setDeutsh(false)
  }
  const en = () => {
    setFrancais(false)
    setEnglish(true)
    setDeutsh(false)
  }
  const de = () => {
    setFrancais(false)
    setEnglish(false)
    setDeutsh(true)
  }

  return (
  <div>
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-Languages'>
        <button onClick={fr}>Français</button>
        <button onClick={en}>English</button>
        <button onClick={de}>Deutsch</button>
      </div>
      {francais? <div>
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>Mais qui est-il ?</h1>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature title="Avant que je découvre la programmation" text="Diplômé d'une licence en sciences de la terre, j'ai décidé par la suite de voyager (Nouvelle-Zélande, Australie, États-Unis, ... ) et travailler en tant que saisonnier, dans des fermes, des cafés et des stations de ski, toujours à la recherche de ce qui pourrait m'animer. "/>
          <Feature title="Ensuite il découvre le web développement" text="Je me suis tourné vers la programmation car j’ai toujours eu à cœur les mathématiques, la logique et que mes cours d'informatique sur python et R étaient là meilleur partie de mes études de géologie. J'ai donc entrepris la formation de développeur web chez Openclassrooms que j’ai adorée."/>
          <Feature title="Maintenant" text="Je fais beaucoup de projets par moi-même pour me perfectionner dans l'art du développement web, et je suis actuellement à la recherche d'un CDI dans une entreprise ou une start up "/>
        </div>
      </div> : null}
      {english ? <div>
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>But who is Gaetan ?</h1>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature title="Before the discovery of programming" text="Graduated with a bachelor degree in earth science, I decided to travel (New Zealand, Australia, United-States, ...) and worked as a seasonal worker, in farms, coffee shop, and ski stations...."/>
          <Feature title="After the discovery of programming" text="After that I started programming because I always liked math and logics, and I have to say that my computer science cursus on Python and R were the best parts of my studies in Geology. So I began the web developer training on OpenClassroooms, and I loved it."/>
          <Feature title="Now" text="I am doing alot of self taught project to get better in the art of programming. I am searching for a job now "/>
        </div>
      </div> : null}
      {deutsh ? <div>
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>Aber wer ist er ?</h1>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature title="Bevor ich das Programmieren für mich entdeckte" text="Nach meinem Abschluss als Bachelor in Geowissenschaften war mir klar, dass diese Richtung nur zum Teil meine Interessensgebiete abdeckt. Ich entschloss mich, zu reisen (Neuseeland, Australien, USA, Asien), arbeitete als Saisonarbeiter in Farmen, Cafés und Skistationen, auf der Suche nach neuen Ideen."/>
          <Feature title="Ich entdeckte die Webentwicklung" text="Mein Herz schlug schon immer für Mathematik und Logik, die Informatikkurse zu Python und R waren für mich der interessanteste Teil meines Geologiestudiums. So habe ich nach meiner Rückkehr nach Belgien und Frankreich mit dem Webentwickler-Training bei Openclassrooms begonnen und habe sehr großes Interesse und Gefallen daran gefunden."/>
          <Feature title="Gegenwärtig" text="Zur Zeit entwickle ich selbst viele Projekte, um mich in der Kunst der Webentwicklung weiter zu bilden.
Ich bin auf der Suche nach einem Posten, in dem ich meine Kenntnisse einbringen kann und der mir erlaubt, sie weiter zu vervollständigen und/oder mich zu spezialisieren, gerne in einer festen Anstellung.
Ich bin örtlich und zeitlich flexibel.
"/>
        </div>
      </div> : null}
    </div>
  </div>
  )
}

export default WhatGPT3