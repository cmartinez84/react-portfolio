import React, { Component } from 'react';
import './project.css'
import PropTypes from 'prop-types';




class Project extends Component {
  render() {
    return (
      <div className="row">
        <div className="">
          <div className="project-name-wrapper">
            <h2 className="project-name">{this.props.name}
              <span className="project-links pull-right">
                {
                  this.props.liveURL ?
                  <a href={this.props.liveURL}
                    className="contact-icon">
                    <i className="fas fa-eye" ></i>
                    </a> :''
                }

                <a href={this.props.repoURL}
                    className="contact-icon"
                    >
                  <i className="fab fa-github-square"></i>
                </a>
              </span>

            </h2>
          </div>
          <div className="">
            {this.props.technologies.map((tech)=>
              <span className="project-modal-technologies">{tech} </span>
            )}
          </div>
          <img src={this.props.imageURL} className="screenshot pull-right"></img>
              {this.props.description.map((paragraph, i)=>
                  <span className="description-text">
                    <span>{paragraph}</span>
                    <br></br>
                  </span>

              )}

        </div>

      </div>
    );
  }
}

// Project.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.array.isRequired,
//   repoURL: PropTypes.string.isRequired,
//   liveURL: PropTypes.string,
//   imageURL: PropTypes.string,
//   liveURL: PropTypes.string,
//   technologies: PropTypes.array.isRequired
// }

export default Project;
