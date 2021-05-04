import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import { sliderData } from './data/SliderData';
import GlobalStyle from './globalStyle';

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Navbar></Navbar>
      <Hero slides={sliderData}></Hero>
    </>
  );
}

export default App;
