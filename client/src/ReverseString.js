import React from "react";

class ReverseString extends React.Component {
  reverseString(a) {
    return a
      .split("")
      .reverse()
      .join("");
  }
  render() {
    return <>{console.log(this.reverseString("apple"))}</>;
  }
}
export default ReverseString;
