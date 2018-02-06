import React, { Component } from 'react';
import Project from './../Project/index.jsx';
import './ProjectsContainer.css';

import * as PROJECT_DATA from  './../../libraries/projects.json';


class ProjectsContainer extends Component {
  // myARRAY = [1,2,3,3,4];l
  state = {
    selectedProject: "habo",
    isModalShowing: false,
  }

  componentWillMount=()=>{
    document.addEventListener("keydown", this.closeModalWithEscape)
  }

  toggleModal=()=>{
    this.setState({isModalShowing: !this.state.isModalShowing})
  }

  closeModalWithEscape=(e)=>{
    e.keyCode == 27 ?
    this.setState({
      isModalShowing: false,
      selectedProject: false
    }) : '';
  }

  selectProject=(name)=>{
    this.setState({
      selectedProject: name,
      isModalShowing: true,
    });
    this.props.selectSound.play();
  }

  render() {
    const projectModal =
    <div className="custom-modal row" >
      <div className="custom-modal-content col-sm-8 col-sm-offset-2">
        <span className="close" onClick={this.toggleModal}>&times;</span>
        <br></br>
        <br></br>
          <div className="row">
            {Object.keys(PROJECT_DATA).map((i)=>
              i === this.state.selectedProject ?
              <Project
                name={PROJECT_DATA[i].name}
                description={PROJECT_DATA[i].description}
                liveURL={PROJECT_DATA[i].liveURL}
                repoURL={PROJECT_DATA[i].repoURL}
                imageURL={PROJECT_DATA[i].imageURL}
                technologies={PROJECT_DATA[i].technologies}
                key={PROJECT_DATA[i].name}
                 />
               :''
            )}
          </div>

      </div>
    </div>

// style=background-image: url(http://i54.tinypic.com/4zuxif.jpg)
    return (
      <div>
        <div className="row">
          {Object.keys(PROJECT_DATA).map((i)=>
            <div className={`${this.state.selectedProject === i ? 'selected-project' :''} project-preview-container col-sm-4 `}
                  onClick={()=>{this.selectProject(i)}} key={i}

                  >
                  <div className="col-sm-12 preview-inner-shell"   onMouseOver={this.props.hoverSound.play}>

                      <img
                      src={PROJECT_DATA[i].imageURL ||  null}
                      className="preview-screenshot"

                        />

                  <div className="project-details">
                    <h3 className="project-preview-name">{PROJECT_DATA[i].name.toUpperCase()}</h3>
                  </div>

                </div>
                <div className=" technologies-container">
                  {PROJECT_DATA[i].technologies.map((tech)=>
                    <span className="project-preview-technologies ">{tech} </span>
                  )}
                </div>
            </div>
          )}
        </div>

        {
          this.state.isModalShowing ? projectModal  : ''}
        }

      </div>
    );
  }
}

export default ProjectsContainer;
