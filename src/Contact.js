import React, { Component } from 'react';

import './main.css';

class App extends Component {
  render() {
    return (
      <section className="center-item" id="contact">
        <h2 name="about" className="component-content-title">
          CONTACT ME
        </h2>
        <p className="contact-message">
          If you need a web developer, please feel free to reach out to me!
        </p>
        <a
          className="contact-link"
          href="mailto:hello@nicolasroybal.com">
          hello@nicolasroybal.com
        </a>
      </section>
    )
  }
}

  export default App;
