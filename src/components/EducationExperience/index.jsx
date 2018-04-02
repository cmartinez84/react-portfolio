import React, { Component } from 'react';
import PropTypes from 'prop-types';



const EducationExperience = (props) =>
      <div style={props.style}>
        <h1> EDUCATION / EXPERIENCE</h1>
        <h2 className="sub-header-font">Bakersfield Community College</h2>
        <div>Associate of Arts in English and Sociology</div>
        <h2 className="sub-header-font">Epicodus</h2>
        <div>Epicodus
        A 25-week coding bootcamp, located in Portland, Oregon for full stack development, with a emphasis on back-end, including, but not limited to PHP, Drupal, Javascript development frameworks.</div>
      <h2 className="sub-header-font">Recentia Health</h2>
        <div>Recentia is building web-based medical software for managing patient information. The task for my internship was to develop a easy to use  interface for inputting, updating, and displaying patient history, diagnoses, and each problem's relatinoship to other medical problems. One of the biggest challenges of this project was closing the gap of knowledge between the CEO, a former general practioner, and our front-end team with regard to medical parlance and the user practices. 
 </div>
      </div>

EducationExperience.propTypes = {
  style: PropTypes.object.isRequired
}
export default EducationExperience;
