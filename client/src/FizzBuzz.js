import React from "react";

class FizzBuzz extends React.Component {
  handleFizzBuzz = num => {
    for (let i = 0; i < num + 1; i++) {
      console.log((i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
    }
  };
  render() {
    return <>{this.handleFizzBuzz(100)}</>;
  }
}

export default FizzBuzz;
