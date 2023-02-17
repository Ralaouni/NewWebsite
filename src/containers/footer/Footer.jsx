import React from 'react'
import './footer.css'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding' id='footer'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Vous n'êtes plus qu'à un clic du bonheur</h1>
      </div>

      <div className='gpt3__footer-btn' onClick={(e) => {window.location.href = 'mailto:gaetankas@hotmail.com'}}>
        <p>Contactez moi</p>
      </div>
      <div>
        <button id="linkedin_button" onClick={(e) => {
            e.preventDefault()
            window.open('https://www.linkedin.com/in/gaetan-kas-738829166', '_blank')
          }}><FontAwesomeIcon className="linkedin" icon={faLinkedinIn} />
        </button>
      </div>
    </div>
  )
}

export default Footer