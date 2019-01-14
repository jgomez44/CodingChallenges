import React from "react";

class FizzBuzz extends React.Component {
  handleFizzBuzz = num => {
    for (let i = 0; i < num + 1; i++) {
      if (i % 3 === 0) {
        console.log("fizz");
      }
      if (i % 5 === 0) {
        console.log("buzz");
      } else {
        console.log(i);
      }
    }
  };
  render() {
    return <>{this.handleFizzBuzz(10)}</>;
  }
}

export default FizzBuzz;
