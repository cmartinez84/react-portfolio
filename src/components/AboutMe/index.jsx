import React, { Component } from 'react';
import PropTypes from 'prop-types';


const AboutMe = (props)=>
      <div style={props.style}>
        <h1>A LITTLE MORE ABOUT ME...</h1>
        <div className="content-panel">
          <p>I began looking into coding a few years ago at the suggestion of a friend who suspected I might be interested. And after a year or so of exploring Treehouse and Youtube tutorials, I decided to enroll in Epicodus, where I chose the Drupal/PHP/Javascript track. Since  graduating Epicodus and finishing my internship, I've continued to code and explore JS libraries and other technologies in my free time </p>
          <p>When I'm not coding or working, I enjoy exploring classical and world music, passionately flavored food, Youtube, and reading.</p>
      </div>
    </div>

AboutMe.propTypes = {
  style: PropTypes.object.isRequired
}
export default AboutMe;
