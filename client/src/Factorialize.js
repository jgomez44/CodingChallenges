import React from "react";

class Factorialize extends React.Component {
  factorialize(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  }
  render() {
    return (
      <>
        <h3>Factorialize the Number 5</h3>
        <div>{this.factorialize(5)}</div>
      </>
    );
  }
}

export default Factorialize;
