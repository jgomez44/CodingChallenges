import React, { Component } from "react";
import "./App.css";
import FizzBuzz from "./FizzBuzz";
import ReverseString from "./ReverseString";

class App extends Component {
  render() {
    return (
      <>
        <FizzBuzz />
        <ReverseString />
      </>
    );
  }
}

export default App;
