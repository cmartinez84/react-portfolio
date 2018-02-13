import React, { Component } from 'react';
// import './footer.css';
import './footer.css';
const FontAwesome = require('react-fontawesome');






class Footer extends Component {
  state = {
    volumeOn: false,
  }
  toggleMute=()=>{
    this.setState({volumeOn : !this.state.volumeOn})
    this.props.toggleMute();
  }
  render() {
    const volumeUp =  <i className="fas fa-volume-up"></i>

    return (
      <div className="custom-footer ">

        <span className="col-xs-3 col-xs-offset-8"><a className="portfolio-link" href="https://github.com/cmartinez84/react-portfolio">PORTFOLIO REPO</a></span>
        <span className="col-xs-1"><a className="portfolio-link" onClick={this.toggleMute}>{volumeUp}
            {this.state.volumeOn
            ?
            ' OFF' : ' ON'
         }</a>


        </span>
      </div>
    );
  }
}

export default Footer;
