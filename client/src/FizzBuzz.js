import React from "react";

class FizzBuzz extends React.Component {
  handleFizzBuzz = num => {
    let results = [];
    for (let i = 0; i <= num; i++) {
      results.push(
        <div>
          {i}: {(i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i}
        </div>
      );
    }
    return results;
  };
  render() {
    return (
      <>
        <h3>FizzBuzz up to 25:</h3>
        <div>{this.handleFizzBuzz(25)}</div>
      </>
    );
  }
}

export default FizzBuzz;
