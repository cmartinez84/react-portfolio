import React, { Component } from 'react';
import './project.css'

class Project extends Component {
  render() {
    return (
      <div class="row">
        <div className="col-sm-4">
          <img src={this.props.imageURL} className="screenshot img-responsive"></img>
        </div>
        <div className="col-sm-8">
          <h1>{this.props.name}</h1>
          <p><a href={this.props.liveURL}>live!</a></p>
          <p><a href={this.props.repoURL}>Github</a></p>
          <p>{this.props.description}</p>
          {this.props.description.map((paragraph)=>
            <span>
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
