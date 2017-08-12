import React, { Component } from 'react';

import './main.css';
import Nav from './Nav.js'
import Landing from './Landing'
import CanvasComponent from './Canvas'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <section className="page-content-container">
        <Nav/>
        <Landing/>
        <CanvasComponent/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </section>
    );
  }
}

export default App;
