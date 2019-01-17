import React, { Component } from "react";
import "./App.css";
import FizzBuzz from "./FizzBuzz";
import ReverseString from "./ReverseString";
import Factorialize from "./Factorialize";

class App extends Component {
  render() {
    return (
      <>
        <FizzBuzz />
        <ReverseString />
        <Factorialize />
      </>
    );
  }
}

export default App;
