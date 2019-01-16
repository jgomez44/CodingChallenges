import React from "react";

class ReverseString extends React.Component {
  reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }

  reverseStringLoop(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i];
    }
    return reverseStr;
  }
  render() {
    return (
      <>
        {console.log(this.reverseString("apple"))}
        {console.log(this.reverseStringLoop("orange"))}
      </>
    );
  }
}
export default ReverseString;
