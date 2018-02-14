import React, { Component } from 'react';

const EducationExperience = (props) =>
      <div style={props.style}>
        <h1> EDUCATION / EXPERIENCE</h1>
        <h2 className="sub-header-font">Bakersfield Community College</h2>
        <div>Associate of Arts in English and Sociology</div>
        <h2 className="sub-header-font">Epicodus</h2>
        <div>Epicodus
        A 25-week coding bootcamp, located in Portland, Oregon for full stack development, with a emphasis on back-end, including, but not limited to PHP, Drupal, Javascript development frameworks.</div>
      <h2 className="sub-header-font">Recentia Health</h2>
        <div>Recentia is building web-based medical software for managing patient information. The task for my internship was to develop a easy to use  interface for inputting, updating, and displaying patient history, diagnoses, and each problem's relatinoship to other medical problems. One of the biggest challenges of this project was closing the gap of knowledge between the CEO, who has served as a general practioner, and our front-end theme, having no medical experience of our own and understand medical parlance, the legal ramifications of documenting patient problems, and understanding when and how much permission to grant the user in documenting patient history.
        The hosted project is re-rendering of our teams component, outside the Recentia software. </div>
      </div>

export default EducationExperience;
