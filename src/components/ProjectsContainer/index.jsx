import React, { Component } from 'react';
import Project from './../Project/index.jsx';
import './ProjectsContainer.css';

import * as PROJECT_DATA from  './../../libraries/projects.json';


class ProjectsContainer extends Component {
  myARRAY = [1,2,3,3,4];
  state = {
    selectedProject: null,
  }

  selectProject=(name)=>{
// console.log(name);
    this.setState({selectedProject: name});
  }

  render() {

    return (
      <div>
        <div>
          {Object.keys(PROJECT_DATA).map((i)=>
            <div className="project-preview-container" onClick={()=>{this.selectProject(i)}} key={i}>
              <span className="project-preview-name">{PROJECT_DATA[i].name.toUpperCase()}</span>
              <img
                src={PROJECT_DATA[i].imageURL ||  null}
                className="screenshot-thumbnail"
                ></img>
            </div>
          )}
        </div>


      {Object.keys(PROJECT_DATA).map((i)=>
        i === this.state.selectedProject ?
        <Project
          name={PROJECT_DATA[i].name}
          description={PROJECT_DATA[i].description}
          liveURL={PROJECT_DATA[i].liveURL}
          repoURL={PROJECT_DATA[i].repoURL}
          imageURL={PROJECT_DATA[i].imageURL}
          key={PROJECT_DATA[i].name}
           />
         :''
      )}
      </div>
    );
  }
}

export default ProjectsContainer;
