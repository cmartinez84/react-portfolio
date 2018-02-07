import React, { Component } from 'react';
import './landing.css';

<i class="fas fa-envelope"></i>


class Landing extends Component {

  redirectTo=(panel)=>{
    console.log(panel);
    this.props.redirectTo(panel);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <div className="img-responsive landing-photo-frame">
          <img src="sampleme.jpg" className="img-responsive landing-photo"></img>
          </div>
            <a href="https://github.com/cmartinez84"
              className="contact-icon"
              >
              <h1><i class="fab fa-linkedin" ></i></h1>
              </a>
            <a href="https://www.linkedin.com/in/cmartinez84/"
                className="contact-icon"
                >
              <h1><i class="fab fa-github-square"></i></h1>
            </a>
            <a href="https://github.com/cmartinez84"
              className="contact-icon"
              >
              <h1><i class="fas fa-envelope"></i>
              </h1>
              </a>
        </div>
        <div className="col-sm-8">
          <h1>CHRIS MARTINEZ</h1>
          <h3>Recent Epicodus Graduate and Junior Web Developer</h3>
          <p >What would you like to know about me?</p>
          <p className="redirect-question" onClick={()=>this.redirectTo('bio')}>How did I get here?</p>
          <p className="redirect-question" onClick={()=>this.redirectTo('projects')}>What am I programming?</p>
        </div>
      </div>
    );
  }
}

export default Landing;
