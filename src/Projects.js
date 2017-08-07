import React, { Component } from 'react';
import './main.css';
import Sudoku from './assets/laptop-sudoku.png'
import Blog from './assets/laptop-blog.png'
import Gist from './assets/laptop-gist.png'

const slides = [
  {
    id: "sudoku",
    photo: {Sudoku},
    link: "https://sudoku-puzzle-sa.herokuapp.com/#/",
    git: "",
    title: "Sudoku Solver",
    text: "This app uses brute force to solve sudoku puzzles and can identify if a puzzle cannot be solved."
  },
  {
    id: "gist",
    photo: {Gist},
    link: "https://the-gist-app.herokuapp.com/#/",
    git: "",
    title: "The Gist App",
    text: "An app created for developer's tool belts to create and store notes."
  },
  {
    id: "blog",
    photo: {Blog},
    link: "https://client-week-project.herokuapp.com/",
    git: "",
    title: "Spurs Blog",
    text: "First group project develpoing a blog dedicated to San Antonio's basketball team."
  }
]

const slideItems = slides.map((slide, images) =>
  <article
    className="slide-container"
    key={slide.id}>
    <a
      href={slide.link}
      rel="noopener noreferrer"
      target="_blank"
      title={"Check out " + slide.title + " website."}>
      <img
        alt={slide.title}
        className="slide-image"
        src={slide.photo.Sudoku||slide.photo.Gist||slide.photo.Blog}>
      </img>
    </a>
    <aside
      className="slide-info">
      <h2
        className="slide-content, component-content-title">
        {slide.title}
      </h2>
      <p
        className="slide-content">
        {slide.text}
      </p>
      <nav
        className="slide-links">
        <a
          href={slide.git}
          rel="noopener noreferrer"
          target="_blank"
          title={slide.title + " git repository."}>
          <i
            className="fa fa-github fa-3x">
          </i>
        </a>
        <a
          href={slide.link}
          rel="noopener noreferrer"
          target="_blank"
          title={slide.title + " website."}>
          <i
            className="fa fa-globe fa-3x">
          </i>
        </a>
      </nav>
    </aside>
  </article>
)

class Projects extends Component {

  render() {
    return (
      <section
        className="slides-container"
        id="projects">
        <h2 className="component-content-title">PROJECTS</h2>
        {slideItems}
      </section>
    );
  }
}

export default Projects;
