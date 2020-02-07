// import React from 'react'; unused
// including "Component" here instead of after "extends" in class based Component
import React, { Component } from "react";
import Guitar from "./components/Guitar";
import guitars from "./guitars.json";
import Navbar from "./components/layout/Navbar";

import "./App.css";

// App Class based component. Basically the heart of the entire application. ... as I understand it anyway.
class App extends Component {
  // initialize the default state of App
  // isClicked is placeholder for later to tie into guitars.json
  state = {
    // currentScore = 0,
    // topScore = 0,
    guitars
    // isClicked: []
  };

  // render components here ...
  render() {
    return (
      <div className="App">
        <Navbar /> {this.props.title}
        {this.state.guitars.map(guitars => (
          <Guitar key={guitars.id} id={guitars.id} image={guitars.image} />
        ))}
      </div>
    );
  }
}

export default App;
