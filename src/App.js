import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header/index.jsx'
import AboutMe from './AboutMe/index.jsx'
import EducationExperience from './EducationExperience/index.jsx'
import ProjectsContainer from './ProjectsContainer/index.jsx'
import './App.css';

class App extends Component {
  state = {
    selectedPanel: 'education',
  }

  changPanel=(panel)=>{
    this.setState({selectedPanel: panel});
  }
  render() {
    var allPanels = {
            header: <Header/>,
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
