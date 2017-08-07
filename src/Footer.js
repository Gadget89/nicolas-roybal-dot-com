import React, { Component } from 'react';
import './main.css';

const footerItem = [
  {
    id: "github",
    link: "https://github.com/Gadget89",
    icon: "fa fa-github fa-3x",
    title: "Check out my GitHub."
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com/in/nicolas-roybal-54bb1413a",
    icon: "fa fa-linkedin-square fa-3x",
    title: "Check out my LinkedIn."
  },
  {
    id: "medium",
    link: "https://medium.com/@nicolas.roybal/",
    icon: "fa fa-medium fa-3x",
    title: "Check out my blog on Medium."
  },
  {
    id: "codepen",
    link: "http://codepen.io/nickr999/",
    icon: "fa fa-codepen fa-3x",
    title: "Check out my Codepen."
  }
]
// Map through array and return a <li>
const listItems = footerItem.map((item) =>
  <li
    key={item.id}>
    <a
      title={item.title}
      href={item.link}
      rel="noopener noreferrer"
      target="_blank">
      <i className={item.icon}></i>
    </a>
  </li>
)
class Footer extends Component {

  render() {
    return (
      <footer className="footer-container">
        <p className="footer-info">
          Links
        </p>
        <ul className="footer-link-container">
          {listItems}
        </ul>
        <p className="footer-info">
          2017 All Rights Reserved.
        </p>
        <p className="footer-info">
          Made with <i className="fa fa-heart" aria-hidden="true"></i> in San Antonio, TX.
        </p>

      </footer>
    );
  }
}


export default Footer;
