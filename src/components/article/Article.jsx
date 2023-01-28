import React from 'react'
import './article.css'

const Article = ({ imgUrl, language,languageback, title, code, page, linkcode, linkpage, name }) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgUrl} alt='blogimage'/>
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <h3>{title}</h3>
          <p>{language}</p>
          <p>{languageback}</p>
        </div>
        <div className='gpt3__blog-container_link'>
          {page ? <button className="gpt3__blog-container_link-button" onClick={(e) => {
              e.preventDefault();
              window.open(linkpage, '_blank');
            }}> Continuez vers {name} <br /> <span>PAGE</span>
          </button> : null}
          {code ? <button className="gpt3__blog-container_link-button" onClick={(e) => {
              e.preventDefault();
              window.open(linkcode, '_blank');
            }}> Continuez vers {name} <br /> <span>CODE</span>
          </button> : null}
        </div>

      </div>
    </div>
  )
}

export default Article