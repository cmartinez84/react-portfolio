import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TransitionGroup from 'react-transition-group/TransitionGroup'
import Fade from './../../Fade';

import './project.css'

const Project=(props)=>{
    return (
      <div className="row" style={props.style}>
        <div className="">
          <div className="project-name-wrapper">
            <h2 className="project-name">{props.name}
              <span className="project-links pull-right">
                {
                  props.liveURL ?
                  <a href={props.liveURL}
                    className="contact-icon">
                    <i className="fas fa-eye" ></i>
                    </a> :''
                }

                <a href={props.repoURL}
                    className="contact-icon"
                    >
                  <i className="fab fa-github-square"></i>
                </a>
              </span>

            </h2>
          </div>
          <div className="">
            {props.technologies.map((tech, i)=>
              <span className="project-modal-technologies" key={i}>{tech} </span>
            )}
          </div>
          <img src={props.imageURL} className="screenshot pull-right"></img>
            <TransitionGroup>
              {props.description.map((paragraph, i)=>
                <Fade duration={.5+(.5 * i)} key={i}>
                  <span className="description-text">
                    <span>{paragraph}</span>
                    <br></br>
                  </span>
                </Fade>
              )}
            </TransitionGroup>

        </div>

      </div>
    );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  repoURL: PropTypes.string.isRequired,
  liveURL: PropTypes.string,
  imageURL: PropTypes.string,
  liveURL: PropTypes.string,
  technologies: PropTypes.array.isRequired
}

export default Project;
