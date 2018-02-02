import React, { Component } from 'react';
import './project.css'

class Project extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.liveURL}</p>
        <p>{this.props.repoURL}</p>
        <p>{this.props.description}</p>
        <img src={this.props.imageURL} className="screenshot"></img>
      </div>
    );
  }
}

export default Project;
