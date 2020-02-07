import React, { Component } from "react";
// import PropTypes from "prop-types";
import navGtrImg from "../../images/navGtr.png";
// I will redo this component as functional because below is not necessary. Was just following a tutorial...
export class Navbar extends Component {
  // set default state of component so that I don't have to insert props in main app.js
  static defaultProps = {
    title: "Guitar Memory Click Game",
    desc: "Click an image to begin!"
  };
  // not neccesary but good to have ... from what I've read.
  // static PropTypes = {
  //   title: this.PropTypes.string.isRequired,
  //   desc: this.PropTypes.string.isRequired
  // };
  render() {
    return (
      <nav className="navbar bg-primary">
        <ul>
          <li id="navImgGtr" className="nav-item">
            <img src={navGtrImg} alt="Brown Hummingbird" />
            <h1>{this.props.title}</h1>
          </li>
          <li className="nav-item">
            <h2>{this.props.desc}</h2>
          </li>
          <li className="nav-item">
            <span className="navbar-brand" id="score">
              Score: {this.props.currentScore} | Top Score:{" "}
              {this.props.topScore}
            </span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
