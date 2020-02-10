// import React from 'react'; unused
// including "Component" here instead of after "extends" in class based Component
import React, { Component } from "react";
import Guitar from "./components/Guitar";
import guitars from "./guitars.json";
import Navbar from "./components/layout/Navbar";
// replace alerts with sweetalert popups
import Swal from "sweetalert2";

import "./App.css";

// shuffle for loop to randomly shuffle the images.
// this is something that I need to constantly relearn https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffleGuitars(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// App Class based component. Basically the heart of the entire application. ... as I understand it anyway.
class App extends Component {
  // initialize the default state of App

  state = {
    currentScore: 0,
    topScore: 0,
    guitars,
    message: "",
    isClicked: []
  };
  // when someone clicks an image, change state appropriately
  clickState = id => {
    let navbarText = document.getElementById("navText");
    navbarText.textContent = "";
    if (this.state.isClicked.indexOf(id) === -1) {
      this.scoreAdjust();
      this.setState({
        isClicked: this.state.isClicked.concat(id)
      });
    } else {
      this.GameReset();
    }
  };
  // every time an image is clicked, adjust score/states
  scoreAdjust = () => {
    const addScore = this.state.currentScore + 1;
    this.setState({
      currentScore: addScore,
      message: ""
    });
    if (addScore >= this.state.topScore) {
      this.setState({ topScore: addScore });
    }
    if (addScore === 12) {
      this.setState(
        {
          currentScore: 0,
          isClicked: []
        },
        function() {
          this.setState({
            isClicked: []
          });
        }
      );
      // Swal was a compromise to get some working functionality into the game.
      Swal.fire("Congrats!, You've clicked all of the images!");
    }
    this.guitarShuffle();
  };
  // reset score when game ends
  GameReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      isClicked: []
    });
    // Swal was a compromise to get some working functionality into the game.
    Swal.fire("Woops, You've Clicked Wrong! Try Again!");

    this.guitarShuffle();
  };
  // take the shuffled guitar array and update the state
  guitarShuffle = () => {
    let shuffledGuitars = shuffleGuitars(guitars);
    this.setState({ guitars: shuffledGuitars });
  };

  // render components here ...
  render() {
    return (
      <div>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        {this.state.guitars.map(guitars => (
          <Guitar
            key={guitars.id}
            clickState={this.clickState}
            guitarShuffle={this.guitarShuffle}
            id={guitars.id}
            image={guitars.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
