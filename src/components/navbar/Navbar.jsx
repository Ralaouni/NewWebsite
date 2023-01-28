// import { faCcVisa } from '@fortawesome/free-brands-svg-icons'
import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import CV_FR from '../../assets/GK_CV_FR.pdf'
import CV_EN from '../../assets/GK_CV_EN.pdf'

// BEM style used

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>Qui Est-Il ?</a></p>
    <p><a href='#blog'>Projets</a></p>
    <p><a href='#footer'>Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleCv, setToggleCv] = useState(false)

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <button className='gpt3__navbar-sign_button1' type="button" onClick={() => {
          setToggleCv(!toggleCv)
          setToggleMenu(false)
          }}>CV</button>
        {toggleCv? <div className='gpt3__navbar-CV-menu'>
          <button onClick={() => window.open(CV_FR)}>Français</button>
          <button onClick={() => window.open(CV_EN)}>English</button>
        </div> 
          : null}
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => {
            setToggleMenu(true)
            setToggleCv(false)
          }} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu/>
              <div className='gpt3__navbar-menu_container-links-sign'>
                <button onClick={() => window.open(CV_FR)}>CV Français</button>
                <button onClick={() => window.open(CV_EN)}>English CV</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar