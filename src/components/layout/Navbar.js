import React, { Component } from "react";
import navGtrImg from "../../images/navGtr.png";
import navGtrImgR from "../../images/MustangR500.png";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <a id="gtr-title" href="/">
          Guitar Memory Click Game
        </a>
        <ul id="pinkbear">
          <li>
            <a href="/">
              <img id="navImgGtr" src={navGtrImg} alt="Brown Hummingbird" />
            </a>
          </li>
          <li id="nav-item">
            <span id="score">
              Score: {this.props.currentScore} | Top Score:{" "}
              {this.props.topScore}
            </span>
          </li>
          <li>
            <a href="/">
              <img id="navImgGtrR" src={navGtrImgR} alt="Mustang" />
            </a>
          </li>
        </ul>
        <div id="navText">
          <p className="nav-text">
            Click an image to begin! Click all 12 guitars only once to win! One
            wrong click and you lose!
          </p>
          <p className="nav-text">Click a guitar in the header to reset!</p>
          <span id="message">{this.props.message}</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
