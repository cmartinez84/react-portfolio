import React, { Component } from 'react';
import Project from './../Project/index.jsx';

import * as PROJECT_DATA from  './../../libraries/projects.json';


class ProjectsContainer extends Component {
  myARRAY = [1,2,3,3,4];

  render() {
    return (
      <div>
      {Object.keys(PROJECT_DATA).map((i)=>
        <Project
          name={PROJECT_DATA[i].name}
          description={PROJECT_DATA[i].description}
          liveURL={PROJECT_DATA[i].liveURL}
          repoURL={PROJECT_DATA[i].repoURL}
          imageURL={PROJECT_DATA[i].imageURL}
          key={PROJECT_DATA[i].name}
           />
      )}
      </div>
    );
  }
}

export default ProjectsContainer;
