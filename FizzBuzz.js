import React from "react";

class FizzBuzz extends React.Component {
  handleFizzBuzz(num) {
    for (let i = 0; (i = num); i++) {
      if (num % 2 === 0) {
        console.log("fizz");
      }
      if (num % 5 === 0) {
        console.log("buzz");
      } else {
        console.log(num);
      }
    }
  }
  render() {
    return <>{this.handleFizzBuzz(100)}</>;
  }
}

export default FizzBuzz;
