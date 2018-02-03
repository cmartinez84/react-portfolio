import React, { Component } from 'react';

class ContactMe extends Component {
  render() {
    return (
      <div>
        <h2>Contact Me Today</h2>
        <h6>Or leave a message in my <a>Three.js echo chamber</a></h6>
        <div>
          <label>Email</label>
          <input type="text" placeholder="me@email.com"></input>
        </div>
        <div>
          <label>Topic</label>
            <input type="text" placeholder="what am i getting myself into?"></input>
        </div>
      <div>
        <label>Message</label>
        <textarea></textarea>
      </div>
      </div>
    );
  }
}

export default ContactMe;
