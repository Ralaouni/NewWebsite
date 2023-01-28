import React from 'react'
import './blog.css'
import { blog02, blog03, blog04, blog05 } from './imports'
import { Article } from '../../components';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Ses projets.</h1>
      </div>
      <div className='gpt3__blog-container'>
        {/* <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date='Sep 26, 2021' title='GPT-3 and Open AI is the future. Let us exlore how it is?' />
        </div> */}
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} language='Typescript, CSS, HTML5' title='Mini jeu space Invaders' code={true} name='Space Invaders' linkcode='https://github.com/Ralaouni/SpaceInvaders.git' page={true} linkpage='https://ralaouni.github.io/SpaceInvaders/' />
          <Article imgUrl={blog03} language='Front: React, CSS, HTML5' languageback='Back: Node.js, esxpress, BDD: MongoDB' title="Réseau social d'entreprise" code={true} linkcode='https://github.com/Ralaouni/OC_P_7.git' name="le Réseau social d'entreprise"/>
          <Article imgUrl={blog04} language='React' title='Figma design GPT3' code={true} linkcode='https://github.com/Ralaouni/Figma-design-1' page={true} linkpage='https://ralaouni.github.io/Figma-design-1/' name="Figma design" />
          <Article imgUrl={blog05} title='Tous mes autres projets Github' code={true} linkcode='https://github.com/Ralaouni?tab=repositories' name="Github" />
        </div>
      </div>
    </div>
  )
}

export default Blog