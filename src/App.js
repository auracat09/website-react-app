import React from 'react'
import Hero from './components/navbar/hero/Hero.js'
import Navbar from './components/navbar/Navbar.js'
import Page from './components/navbar/page/Page.js'

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Page/>
    </div>
  );
}

export default App;
