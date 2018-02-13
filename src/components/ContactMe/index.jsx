import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

class ContactMe extends Component {
  state={
    email: 'cardamomclouds84@gmail.com',
    subject: 'recapcha testin\'',
    message: 'boo',
    recaptcha: '',
    sendingEmail: false
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  handleCaptchaChange=(res)=>{
    this.setState({ recaptcha: res });
  }

  handleSubmit=()=>{
    this.setState({sendingEmail: true});

    const messageData = {
      "email": this.state.email,
      "subject":  this.state.subject,
      "message": this.state.message,
      "recaptcha" : this.state.recaptcha
    }

    const EMAIL_API_KEY = process.env.REACT_APP_EMAIL_API_KEY;
    const EMAIL_API_URL= process.env.REACT_APP_EMAIL_API_URL;
    // const EMAIL_API_URL= "http://192.168.0.28:3003"

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
              sendingEmail: false
            });
            this.props.successSound.play();
          }
        });//end fetch/then
    }

  render() {
    return (
      <div  method="POST">
        <h2>Contact Me Today</h2>
        <h6>Or leave a message in my <a>Three.js echo chamber</a></h6>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="me@email.com" className="form-control" id="contact-email" value={this.state.email}
            onChange={this.handleChange} name="email" disabled={this.state.sendingEmail}/>
        </div>

        <div className="form-group">
          <label>Subject</label>
            <input type="text" placeholder="what am i getting myself into?" className="form-control" id="contact-subject" value={this.state.subject} name="subject" onChange={this.handleChange} disabled={this.state.sendingEmail}/>
        </div>

      <div className="form-group">
        <label>Message</label>
        <textarea className="form-control" id="contact-body" value={this.state.message} name="message" onChange={this.handleChange} disabled={this.state.sendingEmail}/>
      </div>
      <button type="button"  onClick={this.handleSubmit} disabled={this.state.sendingEmail} >SUBMIT</button>

        <ReCAPTCHA
          ref="recaptcha"
          sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
          onChange={this.handleCaptchaChange}/>

    </div>
    );
  }
}


// <ReCAPTCHA
//   ref="recaptcha"
//   sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
//   onChange={this.handleCaptchaChange}/>


export default ContactMe;
