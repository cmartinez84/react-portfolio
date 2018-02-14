import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './landing.css';



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
              <h1><i className="fab fa-linkedin" ></i></h1>
              </a>
            <a href="https://www.linkedin.com/in/cmartinez84/"
                className="contact-icon"
                >
              <h1><i className="fab fa-github-square"></i></h1>
            </a>
            <a href="https://github.com/cmartinez84"
              className="contact-icon"
              >
              <h1><i className="fas fa-envelope"></i>
              </h1>
              </a>
        </div>
        <div className="col-sm-8">
          <h1>CHRIS MARTINEZ</h1>
          <h3 className="sub-header-font">Recent Epicodus Graduate and Junior Web Developer</h3>
          <p >What would you like to know about me?</p>
          <p className="redirect-question" onClick={()=>this.redirectTo('bio')}>How did I get here?</p>
          <p className="redirect-question" onClick={()=>this.redirectTo('projects')}>What am I programming?</p>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  redirectTo : PropTypes.func.isRequired
}
export default Landing;
