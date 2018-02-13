import React, { Component } from 'react';
// import './footer.css';
import './footer.css';


class AboutMe extends Component {
  render() {
    return (
      <div className="custom-footer ">
        <span className="col-xs-3 col-xs-offset-8"><a className="portfolio-link" href="https://github.com/cmartinez84/react-portfolio">PORTFOLIO REPO</a></span>
        <span className="col-xs-1">MUTE</span>
      </div>
    );
  }
}

export default AboutMe;
