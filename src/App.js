import React, { Component } from 'react';
import logo from './logo.svg';
import AboutMe from './components/AboutMe/index.jsx'
import Footer from './components/Footer/index.jsx'
import ContactMe from './components/ContactMe/index.jsx'
import Landing from './components/Landing/index.jsx'
import Skills from './components/Skills/index.jsx'
import EducationExperience from './components/EducationExperience/index.jsx'
import ProjectsContainer from './components/ProjectsContainer/index.jsx'
import './App.css';

import * as PROJECT_DATA from  './libraries/projects.json';


import soundPath1 from './sounds/sound1.mp3';
import soundPath2 from './sounds/sound2.mp3';
import soundPath3 from './sounds/sound3.mp3';
import soundPath4 from './sounds/sound4.mp3';
import successSoundPath from './sounds/success.mp3';


class App extends Component {
  state = {
    selectedPanel: 'skills',
    isModalShowing: false,
    gainNodeVolume: .3,
  }

  audioCtx;
  gainNode;
  sound1;
  sound2;
  hoverSound;
  selectSound;
  successSound;

  componentWillMount(){
    const localAudioInitializer = window.AudioContext || window.webkitAudioContext || window.webkitAudioContext || null;
    if(localAudioInitializer ){
      this.audioCtx = new localAudioInitializer();
      this.gainNode = this.audioCtx.createGain();
      console.log(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);
      this.gainNode.gain.value = this.state.gainNodeVolume;

      this.sound1 = this.audioFileLoader(soundPath1);
      this.sound2 = this.audioFileLoader(soundPath2);
      this.hoverSound = this.audioFileLoader(soundPath3);
      this.selectSound = this.audioFileLoader(soundPath4);
      this.successSound = this.audioFileLoader(successSoundPath);
    }

  }

  audioFileLoader = (fileDirectory) =>{
       var soundObj = {};

       soundObj.fileDirectory = fileDirectory;
       soundObj.canPlay = true;
       var getSound = new XMLHttpRequest();
       getSound.open("GET", soundObj.fileDirectory, true);
       getSound.responseType = "arraybuffer";
       getSound.onload = () => {
           this.audioCtx.decodeAudioData(getSound.response, function(buffer) {
               soundObj.soundToPlay = buffer;
           });
       }

       getSound.send();

       soundObj.play = () => {
            //  this.isPLaying = true;
           var playSound = this.audioCtx.createBufferSource();
           playSound.buffer = soundObj.soundToPlay;
           playSound.connect(this.gainNode);
           playSound.start();
       }
       return soundObj;
     }

  changePanel=(panel)=>{
      this.setState({selectedPanel: panel});
      this.selectSound.play();
  }
  clearPanel=()=>{
    this.setState({selectedPanel: 'home'});
  }


  render() {

    const allPanels = {
            home: <Landing hoverSound={this.hoverSound} redirectTo={this.changePanel} />,
          ['education/ experience']: <EducationExperience/>,
            bio : <AboutMe/>,
            projects: <ProjectsContainer
                      hoverSound={this.hoverSound}
                      selectSound={this.selectSound}/>,
            skills: <Skills/>,
            contact: <ContactMe successSound={this.successSound}/>
    }
//
    return (

      <div className="row" >
        <div className="col-sm-3 menu-sidebar">
          {Object.keys(allPanels)
                  .map((panel)=>
                  <div className="menu-row">
                    <p
                      className={`main-menu-option
                        ${this.state.selectedPanel === panel ? 'selected-menu-option' : ''}
                        `}
                      key={panel}
                      onClick={()=>this.changePanel(panel)}
                      onMouseOver={this.hoverSound.play}
                      >
                      {panel}
                    </p>
                  </div>
          )}
        </div>
        <div className="selectedPanel col-sm-8">
          {allPanels[this.state.selectedPanel]}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
