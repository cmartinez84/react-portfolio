import React, { Component } from 'react';
import './skills.css';

class Skills extends Component {


  render() {

    const techIcons = {
      angular : 'icons/angular.jpg',
      ember : 'icons/ember.png',
      firebase : 'icons/firebase.webp',
      heroku: 'icons/heroku.png',
      javascript : 'icons/Javascript_logo.svg',
      jquery: 'icons/jquery.png',
      php: 'icons/logo-php.png',
      mysql : 'icons/mysql.png',
      pantheon: 'icons/pantheon.png',
      react: 'icons/react.png',
      silex: 'icons/silex.png'
    }

    return (
      <div>
        <h2>Skills</h2>
        <div className="row">
          {Object.keys(techIcons).map(key=>
            <div key={key} className="col-xs-3">
              <img className="img-respsonsive tech-icon" src={techIcons[key]}></img>
              <span className="tech-icon-name">{key}</span>
            </div>
          )}

        </div>
      </div>
    );
  }
}

export default Skills;
