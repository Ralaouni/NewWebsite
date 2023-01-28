import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'


const Header = () => {
  return (
    <div>
      <div className='gpt3__header section__padding' id='Home'>
        <div className='gpt3__header-content'>
          <h1><span className='gradient__text'>Entrez dans le futur <br /> avec... <br /></span><br /> <span className='gaetan__kas'>Gaetan Kas</span> <br /><br /> <span className='gradient__text'>Web développeur<br /> de qualité</span> </h1>

        </div>
        <div className='gpt3__header-image'>
          <img src={ai} alt='ai'/>
        </div>
      </div>
    </div>
  )
}

export default Header