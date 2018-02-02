import React, { Component } from 'react';
import logo from './logo.svg';
import AboutMe from './components/AboutMe/index.jsx'
import EducationExperience from './components/EducationExperience/index.jsx'
import ProjectsContainer from './components/ProjectsContainer/index.jsx'
import './App.css';

class App extends Component {
  state = {
    selectedPanel: 'projects',
    }

  changPanel=(panel)=>{
    this.setState({selectedPanel: panel});
  }
  render() {
    var allPanels = {
            education: <EducationExperience/>,
            about : <AboutMe/>,
            projects: <ProjectsContainer/>,
    }

    return (

      <div>
        {Object.keys(allPanels).map((panel)=>
          <p key={panel} onClick={()=>this.changPanel(panel)}>{panel}</p>
        )}
        <div className="selectedPanel">
          {allPanels[this.state.selectedPanel]}
        </div>
      </div>
    );
  }
}

export default App;

// <ProjectsContainer/>
// <AboutMe/>
// <EducationExperience/>
