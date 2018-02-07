import React, { Component } from 'react';

class ContactMe extends Component {
  state={
    email: '',
    subject: '',
    message: ''
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div  method="POST">
        <h2>Contact Me Today</h2>
        <h6>Or leave a message in my <a>Three.js echo chamber</a></h6>
        <div className="form-group">
          <label>Email</label>
          <input type="text" placeholder="me@email.com" className="form-control" id="contact-email" value={this.state.email}
            onChange={this.handleChange} name="email"/>
        </div>

        <div className="form-group">
          <label>Subject</label>
            <input type="text" placeholder="what am i getting myself into?" className="form-control" id="contact-subject" value={this.state.subject} name="subject" onChange={this.handleChange}/>
        </div>

      <div className="form-group">
        <label>Message</label>
        <textarea className="form-control" id="contact-body" value={this.state.message} name="message" onChange={this.handleChange}/>
      </div>
      <input type="submit"/>
    </div>
    );
  }
}

export default ContactMe;
