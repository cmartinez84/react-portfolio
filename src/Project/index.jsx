import React, { Component } from 'react';

class Project extends Component {
  myArray = [1,2,3,4];

  render() {
    return (
      <div>
        <h1>Title</h1>
        <img className="projectPreview" src="http://logosrated.net/wp-content/uploads/parser/React-Logo-1.png"></img>
        <h3>I am one of Chris's awesome projects</h3>
        <div>Description about this le content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and</div>
      </div>
    );
  }
}

export default Project;
