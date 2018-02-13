import React, { Component } from 'react';
import './skills.css';

class Skills extends Component {


  render() {

    const techIcons = {
      angular : 'icons/angular.jpg',
      ember : 'icons/ember.png',
      firebase : 'icons/firebase.webp',
      heroku: 'icons/heroku.png',
      javascript : 'icons/javascript.png',
      jquery: 'icons/jquery.png',
      php: 'icons/logo-php.png',
      mysql : 'icons/mysql.png',
      pantheon: 'icons/pantheon.png',
      react: 'icons/react.png',
      silex: 'icons/silex.png'
    }

    return (
      <div>
        <h1>SKILLS</h1>
        <div className="">
          {Object.keys(techIcons).map(key=>
            <div key={key} className="col-xs-3 skill-icon-frame-column ">
              <div className="skill-icon-frame-square">
                <img className="img-responsive tech-icon" src={techIcons[key]}></img>
                <span className="tech-icon-name">{key}</span>
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }
}

export default Skills;
