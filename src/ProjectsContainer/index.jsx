import React, { Component } from 'react';
import Project from './../Project/index.jsx';

class ProjectsContainer extends Component {
  myARRAY = [1,2,3,3,4];

  render() {
    return (
      <div>
      {
        this.myARRAY.map((proj)=>
        <div>
          <Project></Project>
        </div>)
      }
      </div>
    );
  }
}

export default ProjectsContainer;
