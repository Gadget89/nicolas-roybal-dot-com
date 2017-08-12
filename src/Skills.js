import React, { Component } from 'react';
import './main.css';

const skills = [
  {
    id:"ideas",
    icon: "fa fa-lightbulb-o fa-3x",
    title: "Ideas",
    content: "I collaborate with clients beginning with a blank canvas to allow the content to guide the design."
  },
  {
    id:"design",
    icon: "fa fa-laptop fa-3x",
    title: "Design",
    content: "I am a creative problem solver and truly enjoy exploring ideas to create beautiful products."
  },
  {
    id:"develop",
    icon: "fa fa-code fa-3x",
    title: "Develop",
    content: "I have an unwavering dedication to my craft and leverage my skills on every project."
  }
]
// Map through array and return a <li>
const skillItems = skills.map((skill) =>
  <article
    className="slide-container"
    key={skill.id}>
    <i className={skill.icon}></i>
    <h2>{skill.title}</h2>
    <p className="center-item">{skill.content}</p>
  </article>
)



class Skills extends Component {

  componentDidMount() {
      this.updateItem();
  }

  updateItem(){
    var words = [
        "Photoshop",
        "HTML5",
        "CSS3",
        "Javascript",
        "React",
        "Node",
        "Firebase",
        "Heroku",
        "Sketch"
      ],
      currentStep = 0,
      currentText = document.querySelector('.skills-change-text'),
      oldWord = '';


  setTimeout(changeWord, 1000);

  function changeWord() {
    oldWord = currentText.innerHTML;

    // check if there is a word atm or not
    if (oldWord.length < 1) {

      if (currentStep !== words.length -1) {
            currentStep ++;
      }else {
        currentStep = 0;
      }
      addNextWord();
    } else {
      setTimeout(deleteWord, 800);
    }

  };

  function deleteWord() {
    var currentWord = currentText.innerHTML,
        currentLength = currentWord.length;

    // The word is deleted so, start adding in the new one
    if (currentLength < 1) {
      changeWord();
      return;
    }

    // Remove a charachter
    currentText.innerHTML = currentWord.substring(0, currentLength - 1);

    setTimeout(deleteWord, 250);
  }

  function addNextWord() {
    var currentWord = currentText.innerHTML,
        currentLength = currentWord.length,
        nextWord = words[currentStep],
        nextWordLength = nextWord.length;


    if (currentLength === nextWordLength) {
      changeWord();
      return;
    }

    // Add a charachter
    currentText.innerHTML = nextWord.substring(0, currentLength + 1);

    setTimeout(addNextWord, 200);
  }
}

  render() {
    return (
      <section className="slides-container" id="skills">
        <h2 className="component-content-title">Skills</h2>
        <aside className="slide-info slide-content">
          {skillItems}
        </aside>
        <aside>
          <h2 className="skills-description">Technologies I use:</h2>
          <p className="skills-change-text"></p>
        </aside>
      </section>
    );
  }
}

export default Skills;
