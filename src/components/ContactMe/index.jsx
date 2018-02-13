import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import './progressbar.css';

class ContactMe extends Component {
  state={
    email: '',
    subject: '',
    message: '',
    recaptcha: '',
    sendingEmail: false,
    hasTried: false,
    responseSuccess: false,
    responseFail: false,

  }
  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  handleCaptchaChange=(res)=>{
    this.setState({ recaptcha: res });
  }

  handleSubmit=()=>{

    if(this.state.email.length > 4 &&
      this.state.subject.length > 10 &&
      this.state.message.length > 50 &&
      this.state.email.indexOf('@') > 0 &&
      this.state.email.indexOf('.') > 0 &&
      this.state.recaptcha.length >  10)
      {
        this.sendEmail();
        this.setState({
          sendingEmail: true,
          responseFail: false,
          responseSuccess: false
        });
      }
      else{
        this.setState({
          hasTried: true,
          responseFail: false,
          responseSuccess: false
        })
      }
    }

    sendEmail=()=>{

      const messageData = {
        "email": this.state.email,
        "subject":  this.state.subject,
        "message": this.state.message,
        "recaptcha" : this.state.recaptcha
      }

      const EMAIL_API_KEY = process.env.REACT_APP_EMAIL_API_KEY;
      const EMAIL_API_URL= process.env.REACT_APP_EMAIL_API_URL;

      const endpointURL = `${EMAIL_API_URL}/send/${EMAIL_API_KEY}`;

      fetch(endpointURL, {
          method: 'POST',
          body: JSON.stringify(messageData),
          headers: { "Content-Type": "application/json" }})
          .then((res)=> res.json())
          .then((data)=>{
            if(data.success === true){
              this.setState({
                email: '',
                subject: '',
                message: '',
                sendingEmail: false,
                hasTried: false,
                responseSuccess: true
              });
              this.props.successSound.play();
            }
            else{
              this.setState({
                responseFail:true,
                sendingEmail: false
               })
            }
          });//end fetch/then

    }
    //website down
    // <h3 className="sub-header-font">Or leave a message in my <a>Three.js echo chamber</a></h3>

  render() {
    const progressButtonClass = classNames({['progress-bar']: this.state.sendingEmail, 'submit-contact': true})
    return (
      <div >
        <h1>CONTACT ME TODAY</h1>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="GwenIfillTower@gmail.com" className="form-control" id="contact-email" value={this.state.email}
            onChange={this.handleChange} name="email" disabled={this.state.sendingEmail}/>
          {
            !this.state.sendingEmail && this.state.hasTried && this.state.email.length < 5 ?
              <small className="text-danger">
                Please Fill out this section.
              </small>: ''
          }


        </div>

        <div className="form-group">
          <label>Subject</label>
            <input type="text" placeholder="What is this about?" className="form-control" id="contact-subject" value={this.state.subject} name="subject" onChange={this.handleChange} disabled={this.state.sendingEmail}/>
              {
                !this.state.sendingEmail && this.state.hasTried && this.state.subject.length < 11 ?
                  <small className="text-danger">
                    Must be at least 10 characters
                  </small>: ''
              }
        </div>

      <div className="form-group">
        <label>Message</label>
        <textarea className="form-control" id="contact-body" value={this.state.message} name="message" onChange={this.handleChange} disabled={this.state.sendingEmail} placeholder="Tell me something good."/>
          {
            !this.state.sendingEmail && this.state.hasTried && this.state.message.length < 50 ?
              <small className="text-danger">
                Must be at least 50 characters
              </small>: ''
          }
      </div>
      <button type="button" className={progressButtonClass} onClick={this.handleSubmit} disabled={this.state.sendingEmail} >SUBMIT</button>
      {
        this.state.responseSuccess ?
        <span class="alert alert-success pull-right" role="alert">
          Your email was sent successfully. I will get back to you soon!
        </span>: ''
      }{
        this.state.responseFail?
        <span class="alert alert-danger pull-right" role="alert">
          Your email could not be devilvered at this time!
        </span>: ''
      }

      <div className="row">

        {
          <ReCAPTCHA
          ref="recaptcha"
          sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
          onChange={this.handleCaptchaChange}/>
        }



      </div>

    </div>
    );
  }
}

ContactMe.propTypes = {
  successSound: PropTypes.object.isRequired
}
export default ContactMe;
