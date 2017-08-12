import React, { Component } from 'react';
import './main.css';
import Hero from './assets/new-hero-photo.jpeg'

class Landing extends Component {
  componentDidMount() {
      this.updateMessage();
  }
  updateMessage(){
    function changeText(element, texts, time) {

      var text = texts.splice(0, 1)[0];
      if (text) {
        element.innerHTML = text;
        setTimeout(function () {
          changeText(element, texts, time);
        }, time);
      }

    }

    var element = document.getElementById("change");
    var texts = [
      'Hello!',
      'Welcome to my portfolio.',
      'Nicolas Roybal<br>Web designer<br>and<br>developer'
    ];
    var time = 3500;

    changeText(element, texts, time);

  }

  render() {
    return (
        <section>
          <aside>
            <a href="#skills" className="landing-button">scroll down to learn more!</a>
          </aside>
          <img alt='' className="landing-hero-img" src={Hero}></img>
            <aside className="landing-message">
              <p id="change"></p>
            </aside>
        </section>

    );
  }
}

export default Landing;
