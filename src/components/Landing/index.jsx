import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3">
          <img src="sampleme.jpg" className="img-responsive"></img>
        </div>
        <div className="col-sm-9">
          <h1>Chris Martinez</h1>
          <h3>Recent Epicodus Graduate and Junior Web Developer</h3>
          <h3>What would you like to know about me?</h3>
        </div>
      </div>
    );
  }
}

export default Landing;
