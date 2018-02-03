import React, { Component } from 'react';
import logo from './logo.svg';
import AboutMe from './components/AboutMe/index.jsx'
import ContactMe from './components/ContactMe/index.jsx'
import Landing from './components/Landing/index.jsx'
import Skills from './components/Skills/index.jsx'
import EducationExperience from './components/EducationExperience/index.jsx'
import ProjectsContainer from './components/ProjectsContainer/index.jsx'
import './App.css';

class App extends Component {
  state = {
    selectedPanel: 'contact',
    isModalShowing: false,
    }
    componentWillMount=()=>{
      document.addEventListener("keydown", this.closeModalWithEscape)
    }
  changPanel=(panel)=>{
    if(panel === this.state.selectedPanel){
      this.setState({selectedPanel: null});
    }
    else{
      this.setState({selectedPanel: panel});
    }
  }
  clearPanel=()=>{
    this.setState({selectedPanel: 'home'});
  }
  toggleModal=()=>{
    this.setState({isModalShowing: !this.state.isModalShowing})
  }
  closeModalWithEscape=(e)=>{
    e.keyCode == 27 ?
    this.setState({isModalShowing: false}) : '';
  }

  render() {

    const allPanels = {
            home: <Landing/>,
            education: <EducationExperience/>,
            about : <AboutMe/>,
            projects: <ProjectsContainer/>,
            skills: <Skills/>,
            contact: <ContactMe/>
    }

    const modalMenu =
    <div className="custom-modal" >
      <div className="custom-modal-content">
        <span className="close" onClick={this.toggleModal}>&times;</span>
        <br></br>
        <br></br>

        {Object.keys(allPanels)
                .map((panel)=>
                  <p
                    key={panel}
                    className="menu-option"
                    onClick={()=>this.changPanel(panel)}>
                    {panel}</p>
        )}
      </div>
    </div>

    return (

      <div >
        {this.state.isModalShowing ? modalMenu : ''}
        <span onClick={this.toggleModal} className="hamburger-icon">&equiv;</span>
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
