import React, { Component } from "react";
import "./App.css";
import FizzBuzz from "./FizzBuzz";
import ReverseString from "./ReverseString";
import Factorialize from "./Factorialize";
import PalindromeCheck from "./PalindromeCheck";

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h2>Coding Exercises</h2>
          <FizzBuzz />
          <ReverseString />
          <Factorialize />
          <PalindromeCheck />
        </div>
      </>
    );
  }
}

export default App;
