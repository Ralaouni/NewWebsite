import React from 'react'

import { Footer, Blog, WhatGPT3, Header } from "./containers";
import { Navbar } from "./components";
import './App.css'


const App = () => {

  return (
    

    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <WhatGPT3 />
        <Blog />
        <Footer />
    </div>


  )
}

export default App
