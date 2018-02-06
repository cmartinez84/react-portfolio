import React, { Component } from 'react';
import './project.css'

class Project extends Component {
  render() {
    return (
      <div class="row">

        <div  >

          <img src={this.props.imageURL} className="screenshot pull-right"></img>
          <h1 className="project-name">{this.props.name}</h1>

          <p>{this.props.description}</p>
          {this.props.description.map((paragraph)=>
            <span>
              <span>{paragraph}</span>
              <br></br>
            </span>
          )}
          <span><a href={this.props.liveURL}>live!</a></span>
          <span><a href={this.props.repoURL}>Github</a></span>

        </div>

      </div>
    );
  }
}

export default Project;
