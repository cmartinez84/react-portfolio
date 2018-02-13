import React, { Component } from 'react';
import './project.css'

class Project extends Component {
  render() {
    return (
      <div class="row">
        <div className="">
          <div className="project-name-wrapper">
            <h2 className="project-name">{this.props.name}
              <span className="project-links pull-right">
                {
                  this.props.liveURL ?
                  <a href={this.props.liveURL}
                    className="contact-icon">
                    <i class="fas fa-eye" ></i>
                    </a> :''
                }

                <a href={this.props.repoURL}
                    className="contact-icon"
                    >
                  <i class="fab fa-github-square"></i>
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

          {this.props.description.map((paragraph)=>
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

export default Project;
