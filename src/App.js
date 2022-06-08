import React from 'react';

import {Header, Blog, Possibility, Features, WhatReact, Footer} from './containers';
import {Article, Brand, CTA, Feature, Navbar} from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
          <Navbar/>
          <Header/>
      </div>
      <Brand/>
      <WhatReact/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App;