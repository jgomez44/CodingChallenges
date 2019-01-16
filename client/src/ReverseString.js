import React from "react";

class ReverseString extends React.Component {
  reverseString(a) {
    let arr = a.split("");
    let reverse = arr.reverse();
    return reverse.join("");
  }
  render() {
    return <>{console.log(this.reverseString("apple"))}</>;
  }
}
export default ReverseString;
