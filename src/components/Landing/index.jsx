import React, { Component } from 'react';
import PropTypes from 'prop-types';


import './landing.css';



const Landing =(props)=> {

  const redirectTo=(panel)=>{
    props.redirectTo(panel);
  }

    return (
      <div className="row" style={props.style}>
        <div className="col-sm-4">
          <div className="img-responsive landing-photo-frame">
          <img src="meglitched.png" className="img-responsive landing-photo"></img>
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
            <a href="#"
              onClick={()=>redirectTo('contact')}
              className="contact-icon"
              >
              <h1><i className="fas fa-envelope"></i>
              </h1>
              </a>
        </div>
        <div className="col-sm-8">
          <h1>CHRIS MARTINEZ</h1>
          <h3 className="sub-header-font">Epicodus Graduate and Junior Web Developer</h3>
          <p >What would you like to know about me?</p>
          <p className="redirect-question" onClick={()=>redirectTo('bio')}>How did I get here?</p>
          <p className="redirect-question" onClick={()=>redirectTo('projects')}>What am I programming?</p>

          <p>...Or just shoot me an email at cardamomclouds84@gmail.com</p>

        </div>
      </div>
    );

}

Landing.propTypes = {
  redirectTo : PropTypes.func.isRequired,
  style : PropTypes.object.isRequired
}

export default Landing;
