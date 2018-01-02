import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to learn React';
    var person = {firstName: "Tadas", lastName: "Davidsonas"};
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <p>
          The user learning this course is {person.firstName} {person.lastName}<br/>
          module.hot helps to make refresh without reloading the page
        </p>
      </div>
    );
  }
}

export default App;
