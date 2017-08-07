import React, { Component } from 'react';

import './main.css';
import Nav from './Nav.js'
import Landing from './Landing'
import CanvasComponent from './Canvas'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <main>
        <Nav/>
        <Landing/>
        <CanvasComponent/>
        <section className="page-content-container">
          <About/>
          <Projects/>
          <Footer/>
        </section>
      </main>
    );
  }
}

export default App;
