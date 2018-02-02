import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Habo</li>
            <li>Projects</li>
            <li>Education</li>
            <li>Resume</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Linked in </li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
