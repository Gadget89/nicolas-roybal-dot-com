import React, { Component } from 'react';
import './main.css';
import Me from './assets/NicHex.png'

class About extends Component {

  render() {
    return (
      <section>
        <article className="about-container-back"></article>
        <article className="about-container-front"></article>
          <article id="about" className="about-container">
            <h2 name="about" className="component-content-title">MY STORY</h2>
            <p className="about-content">
              I began my journey to become a software developer in the Fall of 2016. I've had the great privilege to learn from accomplished instructors at The Iron Yard and I graduated from their Front-End Engineering program in February 2017.
            </p>
            <p className="about-content">
              After gaining a solid foundation, I am excited for this lifetime adventure. My curiosity and passion for code continue driving me to keep learning as much as I can.
            </p>
            <p className="about-content">
              I would like to join a great team and be involved in projects that I can be proud of. I invite you to check out my projects and please feel free to contact me.
            </p>
            <section className="about-img-container">
              <img
                alt="Portrait of Nicolas Roybal."
                src={Me}>
              </img>
            </section>
          </article>

      </section>

    );
  }
}

export default About;
