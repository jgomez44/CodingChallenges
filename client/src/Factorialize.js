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
    return <>{console.log(this.factorialize(5))}</>;
  }
}

export default Factorialize;
